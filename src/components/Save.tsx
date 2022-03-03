import React, { FunctionComponent, useState } from "react";

interface save_topic {
    icon:string;
    text:string;
}

interface save_main{
    title:string;
    paragraph:string;
    illustration:string;
    button:string;
}

type saveProps ={
    save_topics:save_topic[];
    save_main:save_main;
}

const Save: FunctionComponent<saveProps> = ({save_topics,save_main}) => {

    return(
        <div className="save_container">
            <div className="save_main">
                <div className="save_mainTitle">{save_main.title}</div>
                <div className="save_mainParagraph">{save_main.paragraph}</div>
                <div className="save_mainIlustration">
                    <img className="save_mainImg" src={save_main.illustration}/>
                </div>
            </div>
            <div className="save_topics">
                {save_topics.map(function(save_topic,index) {
                    return(
                        <div className="save_topic">
                            <div className="save_topicIcon">
                                <img className="save_topicImg" src={save_topic.icon}/>
                            </div>
                            <div className="save_topicText">{save_topic.text}</div>
                            <div className="save_topicButton">
                                <img className="save_topicbtn" src={save_main.button}></img>
                            </div>
                        </div>
                    );
                })}
                
            </div>
        </div>
    )
}

export default Save;