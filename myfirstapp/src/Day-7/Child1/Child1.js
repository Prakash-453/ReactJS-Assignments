import React from "react";
import Child2 from "../Child2/Child2";

function Child1(props)
{
    return(
        <div>
            <h1>I am Child One</h1>
            <h1>{props.c1}</h1>
            <Child2 c2={props.c2}/>
        </div>
    )
}

export default Child1