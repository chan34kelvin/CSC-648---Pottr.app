import CoverBanner from "../components/banner/CoverBanner";
import CoverCard from "../components/card/Cover";
import CoverLayout from "../layouts/Cover";
import useCompetitions from "../hooks/useCompetitions";
import Loading from "../components/loading/Loading";

//coverpage
export default function Cover() {

    const { competitions, isLoading } = useCompetitions()

    if (isLoading) {
        return (
            <Loading />
        )
    }

    //update title of page
    if (document.getElementById("title")) {
        document.getElementById("title").innerHTML = "🦦Pottr - Home Page";
    }

    return (
        <CoverLayout
            banner={
                <CoverBanner length={competitions.length} />
            }
            cards={
                <CoverCard cards={competitions} />
            }
        />
    );
}