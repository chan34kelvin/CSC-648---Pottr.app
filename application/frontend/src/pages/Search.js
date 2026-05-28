import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Env from "../env.js";
import CategoryLayout from "../layouts/Category.js";
import CategoryBanner from "../components/banner/CategoryBanner.js";
import CardDisplay from "../components/display/CardDisplay.js";
import CoverCard from "../components/card/CoverCard.js";
import CategoryFilter from "../components/filter/CategoryFilter.js";

//utils
const Info = require("../utils/Info.js");
const Filter = require("../utils/Filter.js");

//not optimized yet
export default function Search() {
  const [competitions, setCompetitions] = useState(() => []);
  const [states, setStates] = useState(() => ({
    category: "",
    prize: "",
    fee: "",
    active: "",
  }));
  const [cardsForFilters, setCardsForFilters] = useState(() => []);
  const [notFound, setNotFound] = useState(() => (false))
  const parameter = useParams()["id"];
  const env = Env();

  useEffect(() => {
    const options = {
      method: "GET",
      url: env.url + "/competitions/search",
      params: { search: parameter },
      headers: { "Content-Type": "application/json" },
    };
    axios
      .request(options)
      .then(function (response) {
        if (response.data.results.length > 0) {
          setCompetitions(Info.getAllInfoForCompetition(response.data.results));
          setCardsForFilters(
            Info.getAllInfoForCompetition(response.data.results)
          );
        } else {
          setNotFound(true)
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [parameter, env.url]);

  //this takes effect when user change a filter input and view will call this
  useEffect(() => {
    let data = cardsForFilters;

    data = Filter.filterCategory(data, states["category"]);
    data = Filter.filterPrize(data, states["prize"]);
    data = Filter.filterFee(data, states["fee"]);
    data = Filter.filterActive(data, states["active"]);
    setCompetitions(data);
    
    if(data.length <= 0){
        setNotFound(true)
    }else{
        setNotFound(false)
    }
  }, [cardsForFilters, states]);

  console.log(competitions);
  //update title of page
  if (document.getElementById("title")) {
    document.getElementById("title").innerHTML = "🦦 - "+parameter;
  }

  const categories = Filter.findValues(cardsForFilters, "category");
  const id = "search"

  return(
        <CategoryLayout notFound={notFound}>
            banner={
                <CategoryBanner
                    length={competitions.length}
                    id={id}
                    text={"Search: " + parameter}
                />
            }
            cards={
                <CardDisplay cardType={CoverCard} cards={competitions} />
            }
            filter={
                <CategoryFilter
                    states={states}
                    setStates={setStates}
                    id={id}
                    categories={categories}
                />
            }
        </CategoryLayout>
  )
}
