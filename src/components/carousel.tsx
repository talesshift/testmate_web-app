import React, { FunctionComponent, useState, useEffect } from "react";

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

    return(
        <div className='process_container'>
            <div className="carousel_images">
                <img className="carousel_image" src={slides[at].image}></img>
            </div>
            <div className="carousel_container">
                <div className="carousel_content">
                    <div className="process_carouselText">
                        <div className="process_carouselLabels">
                            <div className="process_carouselLabel">Our Process:</div>
                        </div>
                        <div className="process_carouselBig" >
                            <h1 className="process_carouselNumber">{String(at+1)}.</h1>
                            <h1 className="process_carouselTitle">{slides[at].title}</h1>
                        </div>
                        <p className="process_carouselParagraph">{slides[at].text}</p>                        
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