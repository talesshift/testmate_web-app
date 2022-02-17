import React, { FunctionComponent, useState } from "react";

type TesteProps = {
    image: string,
}

const Intro: FunctionComponent<TesteProps> = ({image}) => {
    return(
        <div className='Block1_container'>
            <div className="block1_text">
                <h1 className="block1_Title">Test your website with </h1>
                <h1 className="block1_Title--orange">real Australian users</h1>
                <p className="block1_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="block1__buttons">
                    <button className="block1__button">Call to action</button>
                </div>
            </div>
            <div className="block1_images">
                <img className="block1_image" src={image}></img>
            </div>
        </div>
    )
}

export default Intro