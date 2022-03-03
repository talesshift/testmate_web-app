import React, { FunctionComponent, useState } from "react";

interface how_topic {
    icon:string;
    text:string;
}

interface how_header{
    title:string;
    paragraph:string;
}

type howProps ={
    how_topics:how_topic[];
    how_header:how_header;
}

const How: FunctionComponent<howProps> = ({how_topics,how_header}) => {

    return(
    <div className="how_outerContainer">
        <div className="how_innerContainer">
            <div className="how_header">
                <div className="how_headerTitle">{how_header.title}</div>
                <div className="how_headerParagraph">{how_header.paragraph}</div>
            </div>
            <div className="how_topics">
                {how_topics.map(function(how_topic,index) {
                    return(
                        <div className="how_topic">
                            <div className="how_topicIcon">
                                <img className="how_topicImg" src={how_topic.icon}></img>
                            </div>
                            <div className="how_topicText">
                                <div className="how_topicTitle">{how_topic.text}</div>
                                <div className="how_topicButton">
                                    <div className="how_topicButtonText">Read More</div>
                                    <div className="how_topicButtonArrow">
                                        <img className="how_topicButtonSvg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    );

}

export default How;