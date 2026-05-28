import { useState, useEffect } from "react";
import { CompetitionAPI } from "../services/CompetitionAPI.js";

//utils
const Info = require("../utils/Info.js");

export default function useCompetitions() {
    const [competitions, setCompetitions] = useState(() => []);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchCompetitions = async () => {
            try {
                setIsLoading(true);
                const data = await CompetitionAPI.getAll();
                const competitions = Info.getAllInfoForCompetition(data);
                setCompetitions(competitions);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchCompetitions();
    }, []);

    return { competitions, isLoading };
}