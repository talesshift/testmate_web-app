import React, { FunctionComponent, useState } from "react";

const Carousel: FunctionComponent<{}> = ({children}) => {
    const n_slides =  React.Children.count(children)
    const buttons = Array.from(Array(n_slides).keys())
    const [at, setAt] = useState(0);
    
    return(
        <div className="carousel_container">
            <button className="carousell_backBtn" 
                onClick={e => {
                    if(at>0){ 
                        setAt(at-1)
                    }
                }}
            >bk</button>
            <div className="carousel_content">
                <div className="carousel_before">
                    {React.Children.map(children, (child, i) => {
                        // Ignore the first child
                        if (i==at-1){
                            return child
                        }
                    })}
                </div>
                <div className="carousel_at">
                    {React.Children.map(children, (child, i) => {
                        // Ignore the first child
                        if (i==at){
                            return child
                        }
                    })}
                </div>
                <div className="carousel_after">
                    {React.Children.map(children, (child, i) => {
                        // Ignore the first child
                        if (i==at+1){
                            return child
                        }
                    })}
                </div>
            </div>
            <div className="carousel_lines">
                    {buttons.map(function(num) {
                        return (<button className="carousel_line" onClick={e => {
                            setAt(num)
                        }}>{num}</button>)
                    })}
            </div>
            <button className="carousell_goBtn" 
                onClick={e => {
                    if(at<n_slides-1){ 
                        setAt(at+1)
                    }
                }}
            >go</button>
        </div>
    )

}

export default Carousel