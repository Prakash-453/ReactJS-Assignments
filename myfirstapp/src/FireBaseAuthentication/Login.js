import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "./Firebase";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const route = useNavigate("") 
  let Login = getAuth(app)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      let LoginSuccess = await signInWithEmailAndPassword(Login,email,password)
      console.log(LoginSuccess)
      alert("Login Succesfully")
      route("/")
    }
    catch(err){
      console.log(err)
      alert("User Not Found")
    }
    // console.log(email,password)
    setEmail("")
    setPassword("")
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter Email Here" onChange={(e) => setEmail(e.target.value)}value={email}/>
        <input type="password" placeholder="Enter Password Here" onChange={(e) => setPassword(e.target.value)}value={password}/>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
