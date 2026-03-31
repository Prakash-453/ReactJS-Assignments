import React from "react";

function ProductCard(props)
{
    return(
        <div>
            {props.children}
            {/* {props.children.map((a,b)=>{return(
                <ul key={b}>
                    <li>{a}</li>
                </ul>
            ) })} */}
        </div>
    )
}

export default ProductCard