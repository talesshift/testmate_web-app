import React, { FunctionComponent, useState } from "react";

interface info_topic {
    image:string;
    decoration:string;
    title:string;
    paragraph:string;
    button:string;
}

interface info_main{
    title:string;
    paragraph:string;
    decoration:string;
}

type infoProps ={
    info_topics:info_topic[];
    info_main:info_main;
}

const Info: FunctionComponent<infoProps> = ({info_topics,info_main}) => {

    return(
    <div className="info_container">
        <div className="info_main">
            <div className="info_mainText">
                <div className="info_mainTitle">{info_main.title}</div>
                <div className="info_mainParagraph">{info_main.paragraph}</div>
            </div>
            <div className="info_mainDecoration">
                <img className="info_mainDecorationImg" src={info_main.decoration}></img>
            </div>
        </div>
        <div className="info_topics">
            {info_topics.map(function(info_topic,index) {
                return(
                    <div className="info_topic" style={index % 2 ? {flexDirection: "row-reverse"}:{flexDirection: "row"}}>
                        <div className={index % 2 ?  "info_topicDecoration--right":"info_topicDecoration--left"}>
                            <img className="info_topicDec" src={info_topic.decoration}/>
                        </div>
                        <div className="info_topicImage" >
                            <img className="info_topicImg" src={info_topic.image}></img>
                        </div>
                        <div className="info_topicText"  style={index % 2 ? {marginLeft: "5rem"}:{marginLeft: "9.25rem"}}>
                            <h1 className="info_topicTitle">{info_topic.title}</h1>
                            <p className="info_topicPragraph">{info_topic.paragraph}</p>
                            <button className="info_topicButton">{info_topic.button}</button>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
    );

}

export default Info;