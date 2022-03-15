import React, { FunctionComponent, useState } from "react";

import quote_icon from '../images/services/quoteIcon.png'

type quoteProps ={
    text:string;
    illustration:string;
}

const Quote: FunctionComponent<quoteProps> = ({text,illustration}) => {
    return(
        <div className="quote__outerContainer">
            <div className="quote_innerContainer">
                <div className="quote_marks">
                    <img className="quote_marksIcon" src={quote_icon}></img>
                </div>
                <div className="quote_quote">
                    <div className="quote_text">{text}</div>
                </div>
                <div className="quote_ilustration">
                    <img className="quote_ilu" src={illustration}></img>
                </div>
            </div>
        </div>
    )
}

export default Quote