// import React, { Component } from "react";

// class LifeCycle extends Component {
//   constructor() {
//     console.log("Constructing");
//     super();
//     this.state = {};
//   }

//   componentDidMount() {
//     console.log("Mounting");
//   }

//   static getDerivedStateFromProps() {
//     console.log("State Derving From Props");
//     return null;
//   }

//   render() {
//     console.log("Rendering");
//     return (
//       <div>
//         <h1>LifeCycle</h1>
//       </div>
//     );
//   }
// }

// export default LifeCycle;

import React, { Component } from "react";
import ProfileCard from "../../../Day-6/Profile/ProfileCard";
import axios from "axios";

class Mounting extends Component {
  constructor() {
    super();
    this.state = { products: [] };
  }

  componentDidMount() {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     this.setState({ products: json });
    //   });

    axios.get("https://fakestoreapi.com/products").then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {this.state.products.map((a, b) => {
            return (
              <ProfileCard
                title={a.title}
                description={a.description}
                image={a.image}
                category={a.category}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Mounting;
