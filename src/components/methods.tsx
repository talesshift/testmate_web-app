import React, { FunctionComponent, useState } from "react";

interface methods_button {
    text:string;
    icon:string;
    color:string;
}

interface methods_main{
    title:string;
    subtitle:string;
}

type methodsProps ={
    methods_buttons:methods_button[];
    methods_main:methods_main;
}

const Methods: FunctionComponent<methodsProps> = ({methods_buttons,methods_main}) => {

    return(
        <div className="methods_container">
            <div className="methods_title">{methods_main.title}</div>
            <div className="methods_subtitle">{methods_main.subtitle}</div>
            <div className="methods_buttons">
                {methods_buttons.map(function(methods_button,index) {
                    return(
                        <div className={"methods_button methods_button--"+methods_button.color} >
                            <div className="methods_buttonIcon">
                                <img className="methods_buttonImg" src={methods_button.icon}/>
                            </div>
                            <div className="methods_buttonText">{methods_button.text}</div>
                        </div>
                    );
                })}                        
            </div>
        </div>
    )
}

export default Methods;