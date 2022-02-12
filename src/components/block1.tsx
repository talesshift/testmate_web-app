import React, { FunctionComponent, useState } from "react";

type TesteProps = {
    prop: string,
}

const Block1: FunctionComponent<TesteProps> = ({prop}) => {
    return(
        <div className='oi'>{prop}</div>
    )
}

export default Block1