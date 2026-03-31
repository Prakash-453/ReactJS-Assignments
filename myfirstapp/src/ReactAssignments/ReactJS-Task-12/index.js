import React, { Component } from "react";
import axios from "axios";
import ProfileCard from "../ReactJS-Task-11/ProfileCard";
import Spinnerr from "../ReactJS-Task-11/Spinner";

class ButtonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  fetchProduct = (id) => {
    this.setState({ product: null }); 
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => this.setState({ product: res.data }));
  };

  render() {
    const { product } = this.state;
    return (
      <div>
        <center>
          <div style={{ marginBottom: "20px" }}>
            {Array.from({ length: 10 }, (_, index) => {
              console.log("index");
              return (
                <button
                  key={index + 1}
                  onClick={() => this.fetchProduct(index + 1)}
                  style={{
                    margin: "5px",
                    padding: "10px 20px",
                    cursor: "pointer",
                  }}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </center>
        <center>
          {product ? (
            <ProfileCard
              title={product.title}
              image={product.image}
              description={product.description}
              category={product.category}
            />
          ) : (
            <Spinnerr />
          )}
        </center>
      </div>
    );
  }
}

export default ButtonCard;
