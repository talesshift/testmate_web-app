import React, { FunctionComponent, useState } from "react";

type TesteProps = {
    image: string,
}

const Intro: FunctionComponent<TesteProps> = ({image}) => {
    return(
        <div className='Block1_container'>
            <div className="block1_text">
                <div className="block1_titles">
                    <h1 className="block1_Title">Discover how to have a </h1>
                    <h1 className="block1_Title--orange">website Australians love</h1>
                </div>
                <p className="block1_paragraph">Get easy-to-implement user testing reports tailored to Australians. Improve your website usability and find what you need to connect with your customers </p>
                <div className="block1__buttons">
                    <button className="block1__button">Book a free call</button>
                </div>
            </div>
            <div className="block1_images">
                <img className="block1_image" src={image}></img>
            </div>
        </div>
    )
}

export default Intro