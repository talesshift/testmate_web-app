import React, { FunctionComponent, useState } from "react";

type subTitleProps ={
    text:string;
    button:string;
    illustration:string;
}

const SubTitle: FunctionComponent<subTitleProps> = ({text,button,illustration}) => {
    return(
        <div className="subTitle_container">
            <div className="subTitle_texts">
                <div className="subTitle_text">{text}</div>
                <div className="subTitle_button">{button}</div>
            </div>
            <div className="subTitle_illustration">
                <img className="subTitle_img" src={illustration}></img>
            </div>
        </div>
    )
}

export default SubTitle