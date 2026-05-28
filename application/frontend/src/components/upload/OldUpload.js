import { React, useEffect, useState } from "react";
import DropFileInput from "./DropFileInput";
import axios from 'axios'
import InitializeFilter from "../../Components/Filter/Functions/InitializeFilter";
import MakeFilters from "../../Components/Filter/Functions/MakeFilters";
import FindValues from "../../Components/Filter/Functions/FindValues";
import Env from "../../env";
import UploadValidation from "./UploadValidation";

import "./Upload.css"
import { useHistory } from "react-router-dom";

const whatToFilter = [
    {
        filter: "categoryName",
        label: "the game",
        valid: "validGame",
    },
    {
        filter: "competitionName",
        label: "competition",
        valid: "validCompetition",
    },
    {
        filter: "ifEnter",
        label: "if Enter pot?",
        valid: "validEnter",
    },
    {
        filter: "title",
        label: "title",
        valid: "validTitle",
    }
]

//not in use anymore
export default function OldUpload() {

    const [posts, setPosts] = useState(() => ([]))
    const [states, setStates] = useState(() => (InitializeFilter(whatToFilter)))
    const [cardsForFilters, setCardsForFilters] = useState(() => ([]))
    const [file, setFile] = useState(() => (null))
    const [ifError, setIfError] = useState(() => (false))
    const [loading, setLoading] = useState(() => (false))
    const history = useHistory()
    const env = Env()

    //get all post and competitions for users to choose
    useEffect(() => {
        const options = {
            method: 'GET',
            url: env.url + '/competitions/getAll',
            headers: { 'Content-Type': 'application/json' }
        };

        axios.request(options).then(function (response) {
            setPosts(response.data)
            setCardsForFilters(response.data)
        }).catch(function (error) {
            console.error(error);
        });

        if (document.getElementById("uploadButton")) {
            document.getElementById("uploadButton").disabled = true
        }
    }, [env.url])

    //filter out competitions when user choose a game
    useEffect(() => {
        if (states["categoryName"] !== "") {
            setPosts((cardsForFilters.filter(card => { return card["categoryName"].toLowerCase().includes((states["description"]).toLowerCase()) })))
        } else {
            setPosts(cardsForFilters)
        }
    }, [states.categoryName, cardsForFilters])

    //checking user input
    useEffect(() => {
        if (ifError) {
            UploadValidation(whatToFilter, states)
        }
    }, [states, ifError])

    if (sessionStorage.getItem("login") !== "true") {
        history.push("/login")
    }

    //check if file is valid
    const onFileChange = (files) => {
        setFile(files[0])
        FileValidation(files[0])
    }

    function FileValidation(testFile) {
        if (testFile) {
            document.getElementById("uploadButton").disabled = false
            document.getElementById("uploadValidation").style = "color: green"
            document.getElementById("uploadValidation").innerHTML = "Valid file to upload, it takes 1 min to fully upload after button click"
        } else {
            document.getElementById("uploadValidation").style = "color: red"
            document.getElementById("uploadButton").disabled = true
            document.getElementById("uploadValidation").innerHTML = "No file right now, please upload one"
        }
    }

    function onSubmit(event) {

        event.preventDefault();

        if (!UploadValidation(whatToFilter, states)) {
            alert("Please fix the errors above listed")
            setIfError(true)
            setLoading(false)
            return
        }

        const form = new FormData();
        form.append("title", states["title"]);
        form.append("categoryId", getId(cardsForFilters, "categoryName", "categoryId", states["categoryName"]));
        form.append("competitionId", getId(cardsForFilters, "competitionName", "competitionId", states["competitionName"]));
        form.append("video", file);

        setLoading(true)

        const options = {
            method: 'POST',
            url: env.url + '/posts/create',
            headers: { 'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001' },
            data: form
        };

        axios.request(options).then(function (response) {
            setLoading(false)
            history.push("/post/" + response.data)
        }).catch(function (error) {
            setLoading(false)
            FileValidation(null)
            alert("Failed, Please try again with correct items")
            console.error(error);
        });
    }

    return (
        <div className="bg-light px-md-3" style={{ minHeight: "100vh" }} id="upload">
            {loading && (
                <div className="d-flex flex-column w-100 justify-content-center text-center fs-1 gap-3" style={{ position: "fixed", top: "30vh" }}>
                    <div className="">
                        Loading... Please don't close the page
                    </div>
                    <div className="">
                        You will be redirect shortly
                    </div>
                </div>
            )}
            {!loading && (<div className="container-fluid justify-content-center px-md-5" style={{ maxWidth: "1000px", paddingTop: "3vw" }}>
                <div className="d-flex flex-column">
                    <div className="fs-1">
                        Upload
                        <hr />
                    </div>
                    <div className="d-flex flex-wrap gap-4 mb-3">
                        <CreateTextFields filter={whatToFilter[0].filter} label={whatToFilter[0].label}
                            states={states} setStates={setStates} valid={whatToFilter[0].valid} validMsg={""}
                            title={"Choose " + whatToFilter[0].label} options={FindValues(cardsForFilters, whatToFilter[0].filter)}
                        />
                        <CreateTextFields filter={whatToFilter[1].filter} label={whatToFilter[1].label}
                            states={states} setStates={setStates} valid={whatToFilter[1].valid} validMsg={""}
                            title={"Choose " + whatToFilter[1].label} options={FindValues(posts, whatToFilter[1].filter)} />
                        <div className="d-flex flex-column gap-2 w-100 fs-5" style={{ fontWeight: "600" }}>
                            <div className="">
                                Type your title of the video here
                            </div>
                            <div className="w-100">
                                <input onChange={(event) => { setStates({ ...states, "title": event.target.value }) }}
                                    className="p-3 w-100" maxLength="50" />
                            </div>
                            <div className="blockquote-footer mt-1" id={"validTitle"}>
                            </div>
                        </div>
                        <CreateTextFields filter={whatToFilter[2].filter} label={whatToFilter[2].label}
                            states={states} setStates={setStates} valid={whatToFilter[2].valid} validMsg={""}
                            title={whatToFilter[2].label} width="275px" options={["yes", "no"]} />
                    </div>
                    <hr />
                    <div className="d-flex flex-column gap-3">
                        <div className="fs-5" style={{ fontWeight: "600" }}>
                            Upload your video file here
                        </div>
                        <DropFileInput
                            onFileChange={(files) => onFileChange(files)}
                        />
                    </div>
                    <div className="d-flex flex-column my-5 gap-3">
                        <div className="blockquote-footer fs-4" id="uploadValidation">
                            Please upload a file to continue
                        </div>
                        <button variant="contained" className="btn btn-primary fs-5 p-3" onClick={onSubmit} style={{ maxWidth: "200px" }} id="uploadButton">
                            Upload
                        </button>
                    </div>
                </div>
            </div>)}
        </div>
    );
}

function CreateTextFields(props) {

    //default in filter
    let width = "90vw"
    if (props.width) {
        width = props.width
    }
    return (
        <div className="d-flex flex-column gap-2 fs-5" style={{ fontWeight: "600" }}>
            <div className="">
                {props.title}
            </div>
            <div className="">
                <MakeFilters name={props.filter} label={props.label} options={props.options} states={props.states} setStates={props.setStates} width={width} />
            </div>
            <div className="blockquote-footer mt-1" id={props.valid}>
                {props.validMsg}
            </div>
        </div>
    )
}

//get existing categories, use categories to find competitions
function getId(cardsForFilters, whatToAccess, whatToGet, item) {
    for (let i = 0; i < cardsForFilters.length; i += 1) {
        let current = cardsForFilters[i]
        if (current[whatToAccess] == item) {
            return current[whatToGet]
        }
    }

    return "-1"
}
