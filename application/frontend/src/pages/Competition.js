import { useParams } from "react-router-dom";
import CompetitionBanner from "../components/banner/CompetitionBanner";
import VideoCard from "../components/card/VideoCard";
import CardDisplay from "../components/display/CardDisplay";
import CompetitionLayout from "../layouts/Competition";
import useCompetition from "../hooks/useCompetition";
import useWinningPost from "../hooks/useWinningPost";
import usePosts from "../hooks/usePosts";
import Loading from "../components/loading/Loading";

//competition page
export default function Competition() {

    //competition id
    const id = useParams()["id"];

    const { competition, isCompetitionLoading } = useCompetition(id);
    const { posts, isPostsLoading } = usePosts(id);
    const { winningPost, isWinnerLoading } = useWinningPost(competition.winningPost);

    if (isCompetitionLoading || isWinnerLoading || isPostsLoading) {
        return (
            <Loading />
        )
    }

    // if (isWinnerLoading) {
    //     return (
    //         <h1 className="bg-light text-dark">loading...</h1>
    //     )
    // }

    // if (isPostsLoading) {
    //     return (
    //         <h1 className="bg-light text-dark">loading...</h1>
    //     )
    // }

    //title of the competition
    const whatPage = competition["title"];
    //update title of page
    if (document.getElementById("title")) {
        document.getElementById("title").innerHTML = "🦦 - " + whatPage;
    }

    return (
        <CompetitionLayout
            banner={
                <CompetitionBanner
                    length={posts.length}
                    competition={competition}
                    winner={winningPost}
                />
            }
            card={
                <CardDisplay cardType={VideoCard} cards={posts} />
            }
        />
    )
}