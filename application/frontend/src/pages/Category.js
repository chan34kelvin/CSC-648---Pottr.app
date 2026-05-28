import CategoryBanner from "../components/banner/CategoryBanner";
import CoverCard from "../components/card/CoverCard";
import CardDisplay from "../components/display/CardDisplay";
import CategoryFilter from "../components/filter/CategoryFilter";
import CategoryLayout from "../layouts/Category";
import useFilterCompetitions from "../hooks/useFilterCompetitions";
import Loading from "../components/loading/Loading";

//category page
export default function Category() {

    const { competitions, states, setStates, categories, notFound, isLoading } = useFilterCompetitions();

    if (isLoading) {
        return (
            <Loading />
        )
    }

    //update title of page
    if (document.getElementById("title")) {
        document.getElementById("title").innerHTML = "🦦 - Competitions";
    }

    const id = "category"

    return (
        <CategoryLayout notFound={notFound}>
            banner={
                <CategoryBanner
                    length={competitions.length}
                    id={id}
                    text={"All Competitions"}
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