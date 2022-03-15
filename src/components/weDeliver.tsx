import React, { FunctionComponent, useState } from "react";

interface weDeliver_topic {
    icon:string;
    title:string;
    text:string;
}

interface weDeliver_main{
    title:string;
    image:string;
}

type weDeliverProps ={
    weDeliver_topics:weDeliver_topic[];
    weDeliver_main:weDeliver_main;
}

const WeDeliver: FunctionComponent<weDeliverProps> = ({weDeliver_topics,weDeliver_main}) => {

    return(
    <div className="weDeliver_container">
        <div className="weDeliver_main">
            <div className="weDeliver_mainImage">
                <img className="weDeliver_mainImg" src={weDeliver_main.image}></img>
            </div>
        </div>
        <div className="weDeliver_topics">
            <div  className="weDeliver_title">{weDeliver_main.title}</div>
            {weDeliver_topics.map(function(weDeliver_topic) {
                return(
                    <div className="weDeliver_topic">
                        <div className="weDeliver_topicIcon">
                            <img className="weDeliver_topicImg" src={weDeliver_topic.icon}></img>
                        </div>
                        <div className="weDeliver_topicTitle">{weDeliver_topic.title}</div>
                        <div className="weDeliver_topicText">{weDeliver_topic.text}</div>
                    </div>
                )
            })}
        </div>
    </div>
    );

}

export default WeDeliver;