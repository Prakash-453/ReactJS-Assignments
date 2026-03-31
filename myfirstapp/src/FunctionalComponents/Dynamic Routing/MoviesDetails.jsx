import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "../../Day-6/Profile/ProfileCard.js"
import axios from "axios";
import Spinner from "react-bootstrap/esm/Spinner.js";

function MoviesDetails() {
    // const movies = [
    //     {
    //       id: "1",
    //       movie: "OriginalGangster",
    //       cast: ["Pawan Kalyan", "Priyanka Mohan", "Sujeeth"],
    //       image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZtI83dezzNIsSYW70lO8VreLP1E2-hDK8hZRZY6LnGDejPuS_psunv3BkpE0p0Lntmc&usqp=CAU",
    //     },
    //     {
    //       id: "2",
    //       movie: "GameChanger",
    //       cast: ["Ram Charan", "Kiara Adavani", "Shankar"],
    //       image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAU-1vJsyhs2Ljdx8lTEcUpgFPQyM1Vfj8MQ&s"
    //     },
    //     {
    //       id: "3",
    //       movie: "LuckyBhaskar",
    //       cast: ["Duquler Salaman", "Meenakshi Chowdary", "Manamae"],
    //       image:"https://www.ntvenglish.com/wp-content/uploads/2024/11/lb-1.jpg"
    //     },
    //   ];
  const [products,setProducts]=useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
      setProducts(res.data)
    })
  })
  const { id } = useParams();
  const movie = products.find((a, b) => a.id == id);
  if(!movie){
    return(<Spinner/>)
  }
  return (
    <div style={{ display: "flex", flexDirection:"column",justifyContent: "center" ,alignItems:"center"}}>
      {/* <h1>{movie.movie}</h1>
      <img src={movie.image} height="100" width="100" alt=""/> */}
      <ProfileCard image={movie.image} title={movie.title}/>
    </div>
  );
}

export default MoviesDetails;
