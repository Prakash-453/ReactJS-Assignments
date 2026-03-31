import React, { createContext, useState } from "react";
import ChildComponent1 from "./ChildComponent1";

export const userInfo = createContext();
export const productInfo = createContext();

function ParentComponent() {
  const [user] = useState("Prakash");
  const [product] = useState({
    P_ID: 1,
    P_Name: "Mobile",
    P_Price: 25000,
    P_Model: 2024,
  });
  return (
    <div>
      <productInfo.Provider value={product}>
        <userInfo.Provider value={user}>
          <ChildComponent1 />
        </userInfo.Provider>
      </productInfo.Provider>
    </div>
  );
}

export default ParentComponent;
