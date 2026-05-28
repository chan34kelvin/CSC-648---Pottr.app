import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Env from "../env.js";
import UploadLayout from "../layouts/Upload.js";
import UploadForm from "../components/upload/UploadForm.js";

//utils
const Info = require("../utils/Info.js");
const Filter = require("../utils/Filter.js");
const UploadUtil = require("../utils/Upload.js");

//unoptimized upload page for later change
export default function Upload(props) {
  //these are competitions
  const [competitions, setCompetitions] = useState(() => []);
  const [states, setStates] = useState(() => ({
    category: "",
    competition: "",
    title: "",
  }));
  const [filterHelper, setFilterHelper] = useState(() => []);
  const [isActive, setIsActive] = useState(() => ({
    active: "",
  }));

  //store file
  const [file, setFile] = useState(() => null);

  //checks error of the form
  const [ifError, setIfError] = useState(() => false);

  //after its submitted
  const [isLoading, setIsLoading] = useState(() => false);

  //redirect user if they'arnt logged in
  const history = useHistory();
  const env = Env();

  //get all post and competitions for users to choose
  useEffect(() => {

    if (sessionStorage.getItem("login") !== "active") {
      history.push("/signin")
    }
    const options = {
      method: "GET",
      url: env.url + "/competitions/getAll",
      headers: { "Content-Type": "application/json" },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setCompetitions(Info.getAllInfoForCompetition(response.data));
        setFilterHelper(Info.getAllInfoForCompetition(response.data));
      })
      .catch(function (error) {
        console.error(error);
      });

    //disable the button before a file gets detected
    if (document.getElementById("uploadButton")) {
      document.getElementById("uploadButton").disabled = true;
    }
  }, [env.url, props.update]);

  //ask model to return the related post to its category
  //filter out competitions when user choose a game
  useEffect(() => {
    let data = Filter.filterCategory(filterHelper, states.category);
    data = Filter.filterActive(data, isActive.active);
    setCompetitions(data);
  }, [states.category, filterHelper, isActive]);

  //field validations
  //check if file is valid
  const onFileChange = (files) => {
    setFile(files[0]);
    FileValidation(files[0]);
  };

  //checking user input
  useEffect(() => {
    if (ifError) {
      UploadUtil.uploadValidation(states);
    }
  }, [states, ifError]);

  function FileValidation(testFile) {
    if (testFile) {
      document.getElementById("uploadButton").disabled = false;
      document.getElementById("uploadValid").style = "color: green";
      document.getElementById("uploadValid").innerHTML =
        "Valid file to upload, it takes 1 min to fully upload after button click";
    } else {
      document.getElementById("uploadValid").style = "color: red";
      document.getElementById("uploadButton").disabled = true;
      document.getElementById("uploadValid").innerHTML =
        "No file right now, please upload one";
    }
  }

  //handle form submission
  function onSubmit(event) {
    event.preventDefault();

    if (!UploadUtil.uploadValidation(states)) {
      alert("Please fix the errors above listed");
      setIfError(true);
      setIsLoading(false);
      return;
    }

    const form = new FormData();
    form.append("title", states["title"]);
    form.append(
      "categoryId",
      UploadUtil.getId(
        filterHelper,
        "category",
        "categoryId",
        states["category"]
      )
    );
    form.append(
      "competitionId",
      UploadUtil.getId(filterHelper, "title", "id", states["competition"])
    );
    form.append("video", file);

    console.log(
      file,
      UploadUtil.getId(filterHelper, "title", "id", states["competition"]),
      UploadUtil.getId(
        filterHelper,
        "category",
        "categoryId",
        states["category"]
      ),
      states.title
    );

    setIsLoading(true);

    const options = {
      method: "POST",
      url: env.url + "/posts/create",
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=---011000010111000001101001",
      },
      data: form,
    };

    axios
      .request(options)
      .then(function (response) {
        setIsLoading(false);
        history.push("/post/" + response.data);
      })
      .catch(function (error) {
        setIsLoading(false);
        FileValidation(null);
        alert("Failed, Please try again with correct items");
        console.error(error);
      });
  }

  const categories = Filter.findValues(filterHelper, "category");

  return (
    <UploadLayout loading={isLoading}>
      form={
        <UploadForm
          states={states}
          setStates={setStates}
          categories={categories}
          active={isActive}
          setActive={setIsActive}
          fileChange={onFileChange}
          onSubmit={onSubmit}
          cards={competitions}
        />
      }
    </UploadLayout>
  )
}
