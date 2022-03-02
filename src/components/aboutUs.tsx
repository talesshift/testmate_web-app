import React, { FunctionComponent, useState } from "react";

interface aboutUs_topic {
    image:string;
    text:string;
}

interface aboutUs_main{
    title:string;
    text:string;
    image:string;
}

type aboutUsProps ={
    aboutUs_topics:aboutUs_topic[];
    aboutUs_main:aboutUs_main;
}

const AboutUs: FunctionComponent<aboutUsProps> = ({aboutUs_topics,aboutUs_main}) => {

    return(
    <div className="aboutUs_container">
        <div className="aboutUs_main">
            <div className="aboutUs_mainTitle">{aboutUs_main.title}</div>
            <div className="aboutUs_mainText">{aboutUs_main.text}</div>
            <div className="aboutUs_mainImage">
                <img className="aboutUs_mainImg" src={aboutUs_main.image}></img>
            </div>
        </div>
        <div className="aboutUs_topics">
            {aboutUs_topics.map(function(aboutUs_topic) {
                return(
                    <div className="aboutUs_topic">
                        <div className="aboutUs_topicImage">
                            <img className="aboutUs_topicImg" src={aboutUs_topic.image}></img>
                        </div>
                        <div className="aboutUs_topicText">{aboutUs_topic.text}</div>
                    </div>
                )
            })}
        </div>
    </div>
    );

}

export default AboutUs;