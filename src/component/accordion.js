import React, { useState, useRef, useEffect, useContext} from "react";
import ThemeContext from "../context";

import "../component/accordion.css";

const Accordion = ({ title, children }) => {
    // const [active, setActive] = useState("");
    const [height, setHeight] = useState("0px");
    const content = useRef();
    const sensitive = useRef();

    const {active, setActive} = useContext(ThemeContext)

    const toggleAccordion = () => {
        setActive(active === "" ? "active" : "");

        setHeight(
            active === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
       
    };

    const useOnClickOutside = (ref, handler) => {

        useEffect(() => {
            const listener = event => {

                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }

                handler(event);

            };

            document.addEventListener("mousedown", listener);

            return () => {
                document.removeEventListener("mousedown", listener);
            };


        }, [ref, handler]);
    };

    useOnClickOutside(sensitive, () => {
        setActive("");
        setHeight("0px");
       
    });

    return (
        <div className="accordion__section" ref={sensitive}>

            <button className={`accordion ${active}`} onClick={toggleAccordion}>
                <p className="accordion__title">{title}</p>
                
            </button>

            <div
                ref={content}
                style={{ maxHeight: `${height}` }}
                className="accordion__content"
            >

                <div className="accordion__text">{children}</div>
            </div>
        </div>
    );
};

export default Accordion;