import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./Firebase";

const Signup = () => {
  const route = useNavigate("")
  const SignUp = getAuth(app)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
        let a = await createUserWithEmailAndPassword(SignUp,email,password) // We should wait until signup the user
        alert("SignUp Done Succesfully")
        console.log(a)
        route("/Login")
    }
    catch(err){
        console.log(err)
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
        <button>SignUp</button>
      </form>
    </div>
  );
};

export default Signup;
