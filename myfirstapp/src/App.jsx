// import logo from "./logo.svg";
import "./App.css";

// import Mounting from "./Class Components/LifeCycleMethods/Mounting Phase/Mounting"

// import Updating from "./Class Components/LifeCycleMethods/Updating Phase/Updating";

// import FunLifeCycle from "./FunctionalComponents/LifeCycleMethods";

// import FormComponent from "./FunctionalComponents/FormEvents/formEvents";

// import Counter from "./FunctionalComponents/PureComponents/counter";

// import LoginForm from "./FunctionalComponents/LoginForm/loginform";

// import UseEffectComponent from "./FunctionalComponents/UseEffect/useeffect";

// import AddToCart from "./FunctionalComponents/AddToCart/addtoCart";

// import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom";

// import React from "react";
// import Home from "./FunctionalComponents/RoutingComponents/Home";
// import Contact from "./FunctionalComponents/RoutingComponents/Contact";
// import About from "./FunctionalComponents/RoutingComponents/About";
// import Pricing from "./FunctionalComponents/RoutingComponents/Pricing";
// import PageNotFound from "./FunctionalComponents/RoutingComponents/PagenotFound";
// import LoginForm from "./FunctionalComponents/LoginForm/loginform";
// import Welcome from "./FunctionalComponents/RoutingComponents/Welcome";

// Static Routing
// function App() {
//   return (
//     <div>
//       <Router>
//         <div style={{ backgroundColor: "yellowgreen", padding: "15px",display:"flex",justifyContent:"space-evenly" }}>
//           <Link className="links" to="/Home">Home</Link>
//           <Link className="links" to="/Contact">Contact</Link>
//           <Link className="links" to="/About">About</Link>
//           <Link className="links" to="/Pricing">Pricing</Link>
//           <Link className="links" to="/Login">Login</Link>
//         </div>

//         <Routes>
//           <Route path="*" element={<PageNotFound/>}></Route>
//           <Route path="/Login" element={<LoginForm/>}></Route>
//           <Route path="/Home" element={<Home/>}></Route>
//           <Route path="/Contact" element={<Contact/>}></Route>
//           <Route path="/About" element={<About/>}></Route>
//           <Route path="/Pricing" element={<Pricing/>}></Route>
//           <Route path="/Welcome" element={<Welcome/>}></Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }
// export default App;

// import React from "react";
// import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Dynamic Routing
// import Home from "./FunctionalComponents/Dynamic Routing/Home";
// import MoviesList from "./FunctionalComponents/Dynamic Routing/MoviesList";
// import MoviesDetails from "./FunctionalComponents/Dynamic Routing/MoviesDetails";

// function App() {
//   return (
//     <div>
//       <Router>
//         <div style={{display:'flex',justifyContent:"space-around"}}>
//         <Link to="/Home">Home</Link>
//         <Link to="/MoviesList">Movies</Link>
//         </div>

//         <Routes>
//           <Route path="/Home" element={<Home />}></Route>
//           <Route path="/MoviesList" element={<MoviesList />}></Route>
//           <Route path="/MoviesList/:id" element={<MoviesDetails/>}></Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Display from "./ReactAssignments/ReactAssignmentsDisplay/display";

function App() {
  return (
    <div>
      <Display />
    </div>
  );
}

export default App;
