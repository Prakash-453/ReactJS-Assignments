import React, { useContext } from "react";

import { userInfo } from "./ParentComponent";

import { productInfo } from "./ParentComponent";

function ChildComponent2(){

    const user=useContext(userInfo)

    const product = useContext(productInfo)

    return(
        <div>
            <h1>Welcome {user}!</h1>
            <h1>{product.P_ID}</h1>
            <h1>{product.P_Name}</h1>
            <h1>{product.P_Price}</h1>
            <h1>{product.P_Model}</h1>
        </div>
    )
}

export default ChildComponent2