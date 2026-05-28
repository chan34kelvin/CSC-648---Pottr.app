
export default function Loading() {
    return (
        <div
            className="d-flex flex-column w-100 justify-content-center text-center text-light fs-1 gap-3"
            style={{ position: "fixed", top: "30vh" }}
        >
            {
                //everytime it reloads, it goes back to top
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }
            <div className="">Loading... Please don't close the page</div>
            <div className="">You will be loaded shortly</div>
            <div className="spinner-border text-light align-self-center"></div>
        </div>
    )
}