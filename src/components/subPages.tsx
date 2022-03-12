import React, { FunctionComponent, useState } from "react";

interface subPage{
    illustration:string;
    text:string;
}

type subPagesProps ={
    subPages:subPage[];
}

const SubPages: FunctionComponent<subPagesProps> = ({subPages}) => {
    return(
        <div className="subPages__container">
            <div className="subPages_subPages">
                {subPages.map(function(subPage,index) {
                    return(
                        <div className="subPages_subPage">
                            <div className="subPages_ilustration">
                                <img className="subPages_ilu" src={subPage.illustration}/>
                            </div>
                            <div className="subPage_buttons">
                                <button className="subPages_buttonMain">{subPage.text}</button>
                                <div className="subPages_buttonIcon">
                                    <img className="subPages_buttonImg"/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SubPages