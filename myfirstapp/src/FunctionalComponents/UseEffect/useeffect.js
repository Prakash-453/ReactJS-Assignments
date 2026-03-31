// import React, { useEffect, useState } from "react";

// function UseEffectComponent(){
//     const [value,setValue] = useState(1)

//     // useEffect(()=>{setValue(value+1)})    // Dependency array we won't give then it will execute Infinite Loop

//     // useEffect(()=>{setValue(value+1)},[])

//     // useEffect(()=>{setValue(8)})     // Same State

//     const[message,setMessage] = useState("Hiiii")

//     const[display,setDisplay] = useState("a")

//     const handleValue = ()=>{
//         setMessage(message+"10K")
//     }

//     const handleDisplay = ()=>{
//         setDisplay(display+"1")
//     }

//     useEffect(()=>{setValue(value+1)},[message,display])

//     return(
//         <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
//             <h1>Value : {value}</h1>
//             <h1>Message : {message}</h1>
//             <h1>Display : {display}</h1>
//             <button onClick={handleValue}>ClickMe</button>
//             <button onClick={handleDisplay}>Display</button>
//         </div>
//     )
// }

// export default UseEffectComponent

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function UseEffectComponent() {
//   const [value, setValue] = useState(1);

//   const [message, setMessage] = useState("Hiiii");

//   const [display, setDisplay] = useState("Hii");

//   const handleValue = () => {
//     setMessage(message + "10K");
//   };

  
//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products").then((res) => {
//       setDisplay(display+res.data[0].title)
//     });
//   },[]);

//   return (
//     <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",}}>
//       <h1>Value : {value}</h1>
//       <h1>Message : {message}</h1>
//       <h1>Display : {display}</h1>
//       <button onClick={handleValue}>ClickMe</button>
//       <button>Display</button>
//     </div>
//   );
// }

// export default UseEffectComponent;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function UseEffectComponent() {

//   const [cart, addtoCart] = useState(0);

//   const [product,setProduct] = useState("")

//   const handleaddtoCart = () => {
//     addtoCart(cart+1)
//   };

  
//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products").then((res) => {
//       setProduct(product+res.data[0].title)
//     });
//   },[cart]);

//   return (
//     <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",}}>
//       <h1>AddToCart : {cart}</h1>
//       <h1>Product : {product}</h1>
//       <button onClick={handleaddtoCart}>addtoCart</button>
//     </div>
//   );
// }

// export default UseEffectComponent;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../AddToCart/cards";

function UseEffectComponent() {
  const [cart, setCart] = useState(0);
  const [products, setProducts] = useState([]);

  const handleAddToCart = () => {
    setCart(cart + 1);
  };

  useEffect(() => {
    // Fetching products when the component mounts
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data); // Store all products in the state
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []); // Empty dependency array to fetch data only once

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Add To Cart: {cart}</h1>
      <button onClick={handleAddToCart}>Add to Cart</button>
      
      <h2>Products:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Cards title={product.title}/></li> // Display each product's title
        ))}
      </ul>
    </div>
  );
}

export default UseEffectComponent;

