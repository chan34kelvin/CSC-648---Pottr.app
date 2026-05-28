import { useState, useEffect } from "react";
import axios from "axios";
import Env from "../env.js";
import Category from "../layouts/Category.js";

//utils
const Info = require("../utils/Info.js");
const Filter = require("../utils/Filter.js");

export default function Category() {
  const [cards, setCards] = useState(() => []);
  const [states, setStates] = useState(() => ({
    category: "",
    prize: "",
    fee: "",
    active: "",
  }));
  const [notFound, setNotFound] = useState(() => (false))
  const [cardsForFilters, setCardsForFilters] = useState(() => []);
  const env = Env();

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
        setCardsForFilters(Info.getAllInfoForCompetition(response.data));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [env.url]);

  //this takes effect when user change a filter input and view will call this
  useEffect(() => {
    let data = cardsForFilters;

    data = Filter.filterCategory(data, states["category"]);
    data = Filter.filterPrize(data, states["prize"]);
    data = Filter.filterFee(data, states["fee"]);
    data = Filter.filterActive(data, states["active"]);
    setCards(data);
    
    if(data.length <= 0){
        setNotFound(true)
    }else{
        setNotFound(false)
    }
  }, [cardsForFilters, states]);

  console.log(cards);
  //update title of page
  if (document.getElementById("title")) {
    document.getElementById("title").innerHTML = "🦦 - Competitions";
  }

  const categories = Filter.findValues(cardsForFilters, "category");

  return (
    <Category
      cards={cards}
      id={"category"}
      states={states}
      setStates={setStates}
      categories={categories}
      notFound= {notFound}
      text={"All Competitions"}
    />
  );
}
