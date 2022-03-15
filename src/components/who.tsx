import React, { FunctionComponent, useState } from "react";
import go_icon from "../images/services/Group 4774.svg"

interface item{
    icon:string;
    text:string;
}

type whosProps ={
    title:string;
    items:item[];
}

const Who: FunctionComponent<whosProps> = ({items,title}) => {
    return(
        <div className="who_container">
            <div className="who_title">{title}</div>
            <div className="who_items">
                {items.map(function(item,item_id){
                    let spliText = item.text.split("*")
                    return(
                        <div key={"who_item_"+item_id} className="who_item">
                            <div className="who_itemIcon">
                                <img className="who_itemImg" src={item.icon}></img>
                            </div>
                            <div className="who_itemText">{spliText[0]}<span className="who_itemText--bold">{spliText[1]}</span>{spliText[2]}</div>
                            <div className="who_itemLine"></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Who