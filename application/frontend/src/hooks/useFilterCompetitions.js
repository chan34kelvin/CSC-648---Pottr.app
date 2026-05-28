import { useState, useEffect } from "react";
import { CompetitionAPI } from "../services/CompetitionAPI.js";

//utils
const Info = require("../utils/Info.js");
const Filter = require("../utils/Filter.js");

export default function useFilterCompetitions() {
    const [competitions, setCompetitions] = useState(() => []);
    const [states, setStates] = useState(() => ({
        category: "",
        prize: "",
        fee: "",
        active: "",
    }));
    const [notFound, setNotFound] = useState(() => (false))
    const [filterHelper, setFilterHelper] = useState(() => []);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchCompetitions = async () => {
            try {
                setIsLoading(true);
                const data = await CompetitionAPI.getAll();
                setCompetitions(Info.getAllInfoForCompetition(data));
                setFilterHelper(Info.getAllInfoForCompetition(data));
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchCompetitions();
    }, [])

    //this takes effect when user change a filter input and view will call this
    useEffect(() => {
        let data = filterHelper;

        data = Filter.filterCategory(data, states["category"]);
        data = Filter.filterPrize(data, states["prize"]);
        data = Filter.filterFee(data, states["fee"]);
        data = Filter.filterActive(data, states["active"]);
        setCompetitions(data);

        if (data.length <= 0) {
            setNotFound(true)
        } else {
            setNotFound(false)
        }
    }, [filterHelper, states]);

    console.log(competitions);

    let categories = Filter.findValues(filterHelper, "category");

    return { competitions, states, setStates, categories, notFound, isLoading };
}