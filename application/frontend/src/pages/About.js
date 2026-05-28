import { Link } from "react-router-dom"

export default function About() {
    return (
        <div id="AppInfo" className="bg-light">
            <div className="container" style={{ padding: "2vmin", fontSize: "5vmin", minHeight: "100vh", textAlign: "left" }}>
                <h1>
                    ✨🦦
                    <Link to="/" className="display-4" style={{ color: "purple", background: " -webkit-linear-gradient(#999, #4B0082)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "400" }}>
                        pottr
                    </Link>🦦✨
                </h1>
                <hr />
                <h1>Problem:</h1>
                <p className="fs-4">

                    People love memes. People love money. People do not have a website to bring these two things together.
                </p>
                <h1>Solution:</h1>
                <p className="fs-4">
                    A web application where users participate in meme competitions. Basic process:
                </p><p className="fs-4">
                    1.Users submit a meme submission and a "points" backing to a competition listing. These "points" are entered into a pot.
                </p><p className="fs-4">
                    2.After the end of the submission period, the voting period opens (no self-voting) and the participating users may vote for a submission.
                </p><p className="fs-4">
                    3.The elected winner receives the pot as a reward.
                </p><p className="fs-4">

                    *I think it is important to note that dealing with untrustworthy participants trying to "cheat" the system are inevitable. For example, creating multiple accounts to vote for a particular meme.
                </p><p className="fs-4">
                    <h1>Ideas:</h1>
                </p><p className="fs-4">
                    <h2>Name</h2>
                </p><p className="fs-4">
                    pottr.app
                    pot + otter = cool mascot
                </p><p className="fs-4">
                    <h1>Issues:</h1>

                    I: Instagram already does this. A: Instagram is not a dedicated platform for this kind of function. In terms of dealing with this type of activity, Instagram may take on unneccesary risk (i.e. underage participants) and thus, future use of the Instagram platform is not static and guaranteed. Many others, myself included, do not use Instagram and are thus barriered from this type of activity if hosted on Instagram. However, Instagram is an extremely large entity and is worth considering how it may impact market fit. With this web app, novel ideas must be developed for user adoption.
                </p>
                <h1>Features:</h1>
            </div>
        </div >
    )
}