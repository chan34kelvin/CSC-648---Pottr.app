import { useState, useEffect } from "react";
import { CompetitionAPI } from "../services/CompetitionAPI.js";

//utils
const Info = require("../utils/Info.js");

export default function useCompetition(id) {
  const [competition, setCompetition] = useState(() => []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    if (!id) {
      return;
    }

    const fetchCompetition = async () => {
      try {
        setIsLoading(true);
        const data = await CompetitionAPI.get(id);
        const competition = Info.getAllInfoForCompetition(data);
        setCompetition(competition);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCompetition();
  }, [id]);

  return { competition, isLoading };
}