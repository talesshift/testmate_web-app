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
                    <p className="trust_paragraph">For 6 years, we've been helping incredible brands improve their website's user experience. </p>
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