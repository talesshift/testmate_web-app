import React, { FunctionComponent, useState } from "react";

type TesteProps = {
    image: string,
}

const Block1: FunctionComponent<TesteProps> = ({image}) => {
    return(
        <div className='Block1_container'>
            <div className="block1_text">
                <h1 className="block1_Title">Test your website with <span className="orange">real Australian users</span></h1>
                <p className="block1_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="block1_images">
                <img className="block1_image" src={image}></img>
            </div>
        </div>
    )
}

export default Block1