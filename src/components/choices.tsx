import React, { FunctionComponent, useState } from "react";

interface choice {
    text:string;
    button:string;
    color?:string;
}

type choicesProps ={
    choices:choice[];
}

const Choices: FunctionComponent<choicesProps> = ({choices}) => {
    return(
        <div className="choices__container">
            {choices.map(function(choice,index){
                return(
                    <div className="choices_choice">
                        <div className="choices_text">{choice.text}</div>
                        <div className="choices_button" style={{backgroundColor:choice.color}}>{choice.button}</div>
                    </div>
                );
            })}
        </div>
    )
}

export default Choices