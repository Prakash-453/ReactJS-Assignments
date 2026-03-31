import { Component } from "react";
import Image1 from "../Images/img1.jpg";
import Image2 from "../Images/img2.jpg";
import Image3 from "../Images/img3.jpg";
import Image4 from "../Images/img4.jpg";
import "./gallery.css"

class ImageGallery extends Component {
  render() {
    return (
      <div className="main">
         <div className="images1">
          <img src={Image1} style={{height:"340px",width:"340px"}} alt="" />
          <img src={Image2} style={{height:"340px",width:"340px"}} alt="" />
        </div>
        <div className="images2">
          <img src={Image3} style={{height:"340px",width:"340px"}} alt="" />
          <img src={Image4} style={{height:"340px",width:"340px"}} alt="" />
        </div>
      </div>
    );
  }
}

export default ImageGallery;
