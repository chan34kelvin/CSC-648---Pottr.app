import { useState, useEffect } from "react";
import axios from "axios";
import Env from "../env.js";
import CoverView from "../layouts/Cover.js";

//utils
const Info = require("../utils/Info.js");

export default function Cover() {
  const [cards, setCards] = useState(() => []);
  const env = Env();

  //update title of page
  if (document.getElementById("title")) {
    document.getElementById("title").innerHTML = "🦦Pottr - Home Page";
  }

  //gets all competitions and extract 7 out to display on cover page
  useEffect(() => {
    const options = {
      method: "GET",
      url: env.url + "/competitions/getAll",
      headers: { "Content-Type": "application/json" },
    };

    axios
      .request(options)
      .then(function (response) {
        setCards(Info.getAllInfoForCompetition(response.data));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [env.url]);

  return <CoverView cards={cards} />;
}
