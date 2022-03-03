import React, { FunctionComponent, useState } from "react";

interface delivery_topic {
    text:string;
}

interface delivery_header{
    title:string;
    paragraph:string;
}

type deliveryProps ={
    delivery_topics:delivery_topic[];
    delivery_header:delivery_header;
    delivery_illustration:string;
}

const Delivery: FunctionComponent<deliveryProps> = ({delivery_topics,delivery_header,delivery_illustration}) => {

    return(
    <div className="delivery_container">
        <div className="delivery_info">
            <div className="delivery_header">
                <div className="delivery_headerTitle">{delivery_header.title}</div>
                <div className="delivery_headerParagraph">{delivery_header.paragraph}</div>
            </div>
            <div className="delivery_topics">
                {delivery_topics.map(function(delivery_topic,index) {
                    return(
                        <div className="delivery_topic">
                            <div className="delivery_topicIcon">
                                {/* <img className="delivery_topicImg"/> */}
                            </div>
                            <div className="delivery_topicText">{delivery_topic.text}</div>
                        </div>
                    );
                })}
            </div>
        </div>
        <div className="delivery_illustration">
            <img className="delivery_img" src={delivery_illustration}/>
        </div>
    </div>
    );

}

export default Delivery;