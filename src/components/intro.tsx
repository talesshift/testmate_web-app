import React, { FunctionComponent, useState } from "react";

type IntroProps = {
    image: string,
}

const Intro: FunctionComponent<IntroProps> = ({image}) => {
    return(
        <div className='Intro_container'>
            <div className="Intro_text">
                <div className="Intro_titles">
                    <h1 className="Intro_Title">Discover how to have a </h1>
                    <h1 className="Intro_Title--orange">website Australians will love</h1>
                </div>
                <p className="Intro_paragraph">Get easy-to-implement user testing reports tailored to Australians. Improve your website usability and find what you need to connect with your customers </p>
                <div className="Intro__buttons">
                    <button className="Intro__button">Book a free call</button>
                </div>
            </div>
            <div className="Intro_images">
                <img className="Intro_image" src={image}></img>
            </div>
        </div>
    )
}

export default Intro