import React, { useEffect, useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {getAuth,onAuthStateChanged} from "firebase/auth"

export default function App() {
  const authorize = getAuth()
  const [userLoggedIn,setUserLoggedIn] = useState(null)
  useEffect(()=>{
    let a = onAuthStateChanged(authorize,(e)=>{
      if(e){
        setUserLoggedIn(true)
      }
      else{
        setUserLoggedIn(null)
      }
    })
  },[authorize])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={userLoggedIn ? <Home/> : <Navigate to = "/login"/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={userLoggedIn ? <Navigate to ="/"/> : <Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// <> </> - Fragments : It acts as a container div and it will holds multiple components together

// why Fragements : It will not added into DOM loading will get fast
