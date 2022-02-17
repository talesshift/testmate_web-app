import React, { FunctionComponent, useState } from "react";

type TrustProps = {
    companys: string[];
}



const Trust: FunctionComponent<TrustProps> = ({companys}) => {
    return(
        <div className="trust_outerContainer">
            <div className="trust_innerContainer">
                <div className="trust_text"> 
                    <div className="trust_buttons">
                        <button className="trust_button">Brands that trust us</button>
                    </div>
                    <p className="trust_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="trust_images">
                    {companys.map(company => (
                        <img  className='trust-image' src={company}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Trust;