import { Component } from "react";
import Header from "../Header/header";
import ImageGallery from "../Main/Image-Gallery";
import Footer from "../Footer/footer";

class Home extends Component {
  render() {
    return (<div>
        <Header/>
        <ImageGallery/>
        <Footer/>
    </div>)
  }
}

export default Home;
