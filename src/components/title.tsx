import React, { FunctionComponent, useState } from "react";

type titleProps ={
    small_title?:string;
    main_title:string;
    text?:string;
}

const Title: FunctionComponent<titleProps> = ({small_title,main_title,text}) => {
    return(
        <div className="title_all">
            <div className="title__outerContainer">
                <div className="title_innerContainer">
                    <div className="title_titles">
                        <div className="title_smallTitle">{small_title}</div>
                        <div className="title_mainTitle">{main_title}</div>
                    </div>
                    <div className="title_texts">
                        <p className="title_text">{text}</p>
                    </div>
                </div>
            </div>
            <div className="title_hole"></div>
        </div>
        
    )
}

export default Title