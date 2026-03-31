import React, { Component } from "react";
import ProfileCard from "./ProfileCard";
import Spinnerr from "./Spinner";
import axios from "axios";

class DataLoading extends Component {
  constructor() {
    super();
    this.state = { products: [] };
  }

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }

  render() {
    const { products } = this.state;
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
          {products.length > 0 ? (
            products.map((a, b) => {
              return (
                <ProfileCard
                  title={a.title}
                  description={a.description}
                  image={a.image}
                  category={a.category}
                />
              );
            })
          ) : (
            <Spinnerr />
          )}
        </div>
      </div>
    );
  }
}

export default DataLoading;
