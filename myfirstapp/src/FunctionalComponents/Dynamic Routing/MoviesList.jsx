// import React from "react";
// import { Link } from "react-router-dom";

// function MoviesList() {
  // const movies = [
  //   {
  //     id: "1",
  //     movie: "OriginalGangster",
  //     cast: ["Pawan Kalyan", "Priyanka Mohan", "Sujeeth"],
  //     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZtI83dezzNIsSYW70lO8VreLP1E2-hDK8hZRZY6LnGDejPuS_psunv3BkpE0p0Lntmc&usqp=CAU",
  //   },
  //   {
  //     id: "2",
  //     movie: "GameChanger",
  //     cast: ["Ram Charan", "Kiara Adavani", "Shankar"],
  //     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAU-1vJsyhs2Ljdx8lTEcUpgFPQyM1Vfj8MQ&s"
  //   },
  //   {
  //     id: "3",
  //     movie: "LuckyBhaskar",
  //     cast: ["Duquler Salaman", "Meenakshi Chowdary", "Manamae"],
  //     image:"https://www.ntvenglish.com/wp-content/uploads/2024/11/lb-1.jpg"
  //   },
  // ];
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {movies.map((a, b) => (
//         <ul>
//           <li key={b}>
//             <Link to={`/MoviesList/${a.id}`}>{a.movie}</Link>
//           </li>
//         </ul>
//       ))}
//     </div>
//   );
// }

// export default MoviesList;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import Spinner from "../../Class Components/LifeCycleMethods/Spinner/spinner"

function MoviesList() {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    axios.get(("https://fakestoreapi.com/products")).then((res)=>{
      setProducts(res.data)
    })
  },[])
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {products.length>0?products.map((a, b) => (
        <ul>
          <li key={b}>
            <Link to={`/MoviesList/${a.id}`}>{a.title}</Link>
          </li>
        </ul>
      )):<Spinner/>}

       {/* {movies.map((a, b) => (
        <ul>
          <li key={b}>
            <Link to={`/MoviesList/${a.id}`}>{a.title}</Link>
          </li>
        </ul>
      )) */}
    </div>
  );
}

export default MoviesList;

