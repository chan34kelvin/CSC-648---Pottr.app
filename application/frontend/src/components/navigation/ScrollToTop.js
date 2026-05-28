import React, {useEffect, useState} from "react";
import Fab from '@mui/material/Fab';
import { MdAssistantNavigation } from "react-icons/md"

//scroll to top code referenced from https://dev.to/prnvbirajdar/react-hooks-component-to-smooth-scroll-to-the-top-35fd
export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible &&
            <div onClick={scrollToTop}>
                <Fab variant="extended" className= "bg-light d-flex flex-row gap-3 fs-5 p-3 px-5" alt="Go to top">
                    <MdAssistantNavigation className="fs-4" style={{mr: 1, color: "black"}}/>
                    <div className="">Top</div>
                </Fab>
            </div>}
        </div>
    );
}