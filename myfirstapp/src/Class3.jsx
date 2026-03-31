// // import { Component } from "react"; // In React A class has predefined component

// // const obj = {
// //   productName: "Mobile",
// //   productPrice: 55000,
// //   productAvailability: true,
// // };

// // class Main extends Component {
// //   render() {
// //     return (
// //       <>
// //         <h1>{obj.productName}{obj.productPrice}</h1>
// //       </>
// //     );
// //   }
// // }

// // export default Main;


// // import { Component } from "react"; 

// // const obj = {
// //   productName: "Mobile",
// //   productPrice: 55000,
// //   productAvailability: false,
// // };

// // class Main extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <h1 style={obj.productAvailability?styles.available:styles.unavailable}>
// //           {obj.productName}
// //           {obj.productPrice}
// //         </h1>
// //       </div>
// //     );
// //   }
// // }

// // const styles = {
// //   available: { backgroundColor: "red" },
// //   unavailable: { backgroundColor: "violet" },
// // };

// // export default Main;

// import { Component } from "react"; 

// const obj = {
//   productName: "Mobile",
//   productPrice: 55000,
//   productAvailability: true,
// };

// class Main extends Component {
//   render() {
//     return (
//       <div style={obj.productAvailability?styles.greenbox:styles.redbox}>
//         <h1 style={obj.productAvailability?styles.available:styles.unavailable}>
//           {obj.productName}
//           {obj.productPrice}
//         </h1>
//       </div>
//     );
//   }
// }

// const styles = {
//   available: { color: "white" ,padding:'10px'},
//   unavailable: { color: "black",padding:'10px' },
//   redbox:{backgroundColor:"red"},
//   greenbox:{backgroundColor:"green"}
// };

// export default Main;

// // class Index extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <h1 style={obj.productAvailability ? styles.available : styles.unavailable}>{obj.productName}</h1>
// //       </div>
// //     );
// //   }
// // }

// // const styles = {
// //   available: { color: "red", padding: "" },
// //   unavailable: { color: "violet" },
// // };

// // export default Index;

// // import { Component } from "react";
// // import "./indexx.css";

// // const products = [
// //   { productName: "Mobile", productPrice: 500, productAvailability: true },
// //   { productName: "Laptop", productPrice: 5000, productAvailability: false },
// //   { productName: "Watch", productPrice: 5000, productAvailability: true },
// // ];

// // class Index extends Component {
// //   render() {
// //     return (
// //       <>
// //         <center>
// //           <div className="mainbox">
// //             <div className={products[0].productAvailability ? "available" : "unavailable"}>
// //               <h1>{products[0].productName}</h1>
// //               <h1>{products[0].productPrice}</h1>
// //             </div>
// //             <div className={products[1].productAvailability ? "available" : "unavailable"}>
// //               <h1>{products[1].productName}</h1>
// //               <h1>{products[1].productPrice}</h1>
// //             </div>
// //             <div className={products[2].productAvailability ? "available" : "unavailable"}>
// //               <h1>{products[2].productName}</h1>
// //               <h1>{products[2].productPrice}</h1>
// //             </div>
// //           </div>
// //         </center>
// //       </>
// //     );
// //   }
// // }

// // export default Index;


import { Component } from "react";
import "./Class3.css";
import img1 from "./Images/img1.jpg"

const products = [
  {
    productName: "mobile",
    productImage:img1,
    produtPrice: 55000,
    productAvailability: false,
  },
  { productName: "laptop", produtPrice: 55000, productAvailability: true },

  { productName: "watch", produtPrice: 30000, productAvailability: false },
];

class Main extends Component {
  render() {
    return (
      <>
        <div className="mainbox">
          <div
            className={
              products[0].productAvailability ? "available" : "unavailable"
            }
          >
            <h1> {products[0].productName}</h1>
            <img style={{height:"130px",width:"120px"}} src={products[0].productImage} alt='img1' />
            <h1>{products[0].produtPrice}</h1>
          </div>
          <div
            className={
              products[1].productAvailability ? "available" : "unavailable"
            }
          >
            <h1>{products[1].productName}</h1>
            <h1>{products[1].produtPrice}</h1>
          </div>
          <div className={products[2].productAvailability?"available":"unavailable"}>
            <h1>{products[2].productName}</h1>
            <h1>{products[2].produtPrice}</h1>

          </div>
        </div>
      </>
    );
  }
}

export default Main;