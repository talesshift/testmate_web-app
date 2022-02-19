import React, { FunctionComponent, useState } from "react";
import Carousel from './carousel'

type ProcessProps = {
    image: string,
}

const Process: FunctionComponent<ProcessProps> = ({image}) => {
    return(
        <div className='process_container'>
            <div className="process_images">
                <img className="process_image" src={image}></img>
            </div>
            <Carousel>
                <div>FRAME 1</div>
                <div>FRAME 2</div>
                <div>FRAME 3</div>
                <div>FRAME 4</div>
            </Carousel>
        </div>
    )
}





export default Process