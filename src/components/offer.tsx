import React, { FunctionComponent, useState } from "react";

interface button {
    text:string;
    icon:string;
}

type offersProps ={
    title:string;
    subtitle?:string;
    buttons:button[];
}

const Offer: FunctionComponent<offersProps> = ({title,subtitle,buttons}) => {
    let  spliTitle = title.split("*",2)

    return(
        <div className="offer_outerContainer">
            <div className="offer_innerContainer">
                <div className="offer_titles">
                    <div className="offer_title">
                        {(spliTitle[0]).split("<br/>").map(function(line,line_id){
                            return(
                                <span className="offer_title--bold">{line_id==0? "":<br/>}{line}</span>
                            )})
                        }
                        <span className="offer_title--thin">{spliTitle[1]}</span></div>
                    <div className="offer_subtitle">{subtitle}</div>
                </div>
                <div className="offer_buttons">
                    {buttons.map(function(button,index){
                        return(
                            <div className="offer_button">
                                <img className="offer_buttonIcon" src={button.icon}></img>
                                <div className="offer_buttonText">{button.text}</div>
                            </div>
                        );
                    })}
                    
                </div>
            </div>
        </div>
    )
}



export default Offer