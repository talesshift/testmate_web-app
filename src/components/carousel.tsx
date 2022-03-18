import React, { FunctionComponent, useState, useEffect } from "react";
import {CSSTransition,TransitionGroup,} from 'react-transition-group';

interface  slide {
    image:string;
    title:string;
    text:string;
}
type carouselProps ={
    slides:slide[];
}


const Carousel: FunctionComponent<carouselProps> = ({slides}) => {
    const n_slides =  slides.length;
    const buttons = Array.from(Array(n_slides).keys())
    const [at, setAt] = useState(0);
    const [slideIn, setSlideIn] = useState(false);


    return(
        <div className='carousel_container'>
            {/* <div className="carousel_images"> */}
            <TransitionGroup className="carousel_images">
                    {slides.map(function(slide,slideid){
                        if(slideid==at){
                            return(
                            
                                <CSSTransition
                                    key={at}
                                    in={slideIn}
                                    timeout={1000}
                                    classNames="carousel_imt"
                                >
                                    <img className="carousel_image" src={slides[at].image}></img>
                                </CSSTransition>
                            )
                        }
                    })}
            </TransitionGroup>
            {/* </div> */}
            <div className="carousel_content">
                <div className="carousel_texts">
                    <div className="carousel_contentText">
                        <div className="carousel_contentLabels">
                            <div className="carousel_contentLabel">Our Process:</div>
                        </div>
                        <div className="carousel_contentBig" >
                            <h1 className="carousel_contentNumber">{String(at+1)}.</h1>
                            <h1 className="carousel_contentTitle">{slides[at].title}</h1>
                        </div>
                        <p className="carousel_contentParagraph">{slides[at].text}</p>                        
                    </div>
                </div>
                <div className="carousel_lines">
                        {buttons.map(function(num) {
                            
                            return (
                            <div key={num} onClick={e => {setAt(num)}} className="carousel_lineClick">
                                <button className="carousel_line" 
                                style={num == at ? {backgroundColor: "#f80"}:{backgroundColor: "#e1d9fa"}}></button>
                            </div>
                            )
                        })}
                </div>
                <button className="carousel_goBtn" id="bota"
                    onClick={e => {
                        if(at<n_slides-1){ 
                            setAt(at+1)
                        }else{
                            setAt(0)
                        }
                    }}
                ><span className={at == n_slides-1 ? "back" : "go"}>{at == n_slides-1 ? <>&laquo;</>:<>&rsaquo;</>}</span></button>
            </div>
        </div>
        
    )

}

export default Carousel