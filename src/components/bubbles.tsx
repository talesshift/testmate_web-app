import React, { FunctionComponent, useState } from "react";

import bubbles_logo from '../images/services/Group 4759@2x.png'

interface bubble{
    size:string;
    height:string;
    text:string;
}

type bubblesProps ={
    title:string;
    bubbles:bubble[];
}

const Bubbles: FunctionComponent<bubblesProps> = ({title,bubbles}) => {
    return(
        <div className="bubbles_container">
            <div className="bubbles_title"></div>
            <div className="bubbles_logo">
                <img className="bubbles_img">{bubbles_logo}</img>
            </div>
            <div className="bubbles_bubbles">
                <div className="bubbles_bubble">
                    <div className="text"></div>
                </div>
            </div>
        </div>
    )
}

export default Bubbles