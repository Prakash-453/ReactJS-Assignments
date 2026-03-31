import { Component } from "react";
import "./index.css";
// import img1 from "../../Images/img1.jpg";
// import img2 from "../../Images/img2.jpg";

const products = [
  {
    productName: "Mobile",
    productImage: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    produtPrice: 55000,
    productAvailability: false,
  },
  {
    productName: "Laptop",
    productImage: "https://i.pcmag.com/imagery/reviews/07f8FmuWzIKHir2YRAXsK7G-1.fit_lim.size_919x518.v1716757237.jpg",
    produtPrice: 55000,
    productAvailability: true,
  },

  {
    productName: "Watch",
    productImage: "https://m.media-amazon.com/images/I/61IduqXygwL._AC_UY350_.jpg",
    produtPrice: 30000,
    productAvailability: false,
  },
];

class Main extends Component {
  render() {
    return (
      <div style={{display:"flex",justifyContent:"center"}}>
        <div className="mainbox">

          <div className={products[0].productAvailability ? "available" : "unavailable"}>
            <h1> {products[0].productName}</h1>
            <img style={{height:"140px",width:"140px"}} src={products[0].productImage} alt='img1' />
            <h1>{products[0].produtPrice}</h1>
          </div>

          <div className={products[1].productAvailability ? "available" : "unavailable"}>
            <h1>{products[1].productName}</h1>
            <img style={{height:"140px",width:"140px"}} src={products[1].productImage} alt='img' />
            <h1>{products[1].produtPrice}</h1>
          </div>

          <div className={products[2].productAvailability?"available":"unavailable"}>
            <h1>{products[2].productName}</h1>
            <img style={{height:"120px",width:"140px"}} src={products[2].productImage} alt='img2' />
            <h1>{products[2].produtPrice}</h1>
          </div>

        </div>
      </div>
    );
  }
}

export default Main;
