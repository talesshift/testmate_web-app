import React, { FunctionComponent, useState } from "react";
import checked_true from '../images/services/check.png';
import checked_false from '../images/services/unCheck.png';


const tick = {
    true:checked_true,
    false: checked_false
}

type tableProps ={
    compareTable_title?:string;
    compareTable_text?:string;
    compareTable_Contents:Array<Array<any>>;
}

const CompareTable: FunctionComponent<tableProps> = ({compareTable_title,compareTable_text,compareTable_Contents}) => {
    return(
        <div className="compareTable_container">
            <div className="compareTable_Header">
                <div className="compareTable_title">{compareTable_title}</div>
                <div className="compareTable_text">{compareTable_text}</div>
            </div>
            <div className="compareTable_table">
                {compareTable_Contents.map(function(compareTable_row,row_id){
                    return(
                        <div className={"compareTable_tableRow"+(row_id==0?"--header":"")}>
                            {compareTable_row.map(function(compareTable_cell,cell_id){
                                return(
                                    <div className={"compareTable_table"+(row_id==0? (cell_id==0?'Header--services':'Header--head'):(cell_id==0?'Item--label':'Item--icon'))}>
                                        {row_id==0? (cell_id==0?(<div className="compareTable_servicesButton">{compareTable_cell}</div>):compareTable_cell):(cell_id==0?compareTable_cell:(<img className={"compareTable_tableIcon"+(compareTable_cell?" check":" unCheck")} src={compareTable_cell?tick.true:tick.false}/>))}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default CompareTable