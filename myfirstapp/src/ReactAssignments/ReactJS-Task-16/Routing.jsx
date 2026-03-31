import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import WelcomePage from "../ReactJS-Task-1/index";
import Timetable from "../ReactJS-Task-2/index";
import HomePage from "../ReactJS-Task-3/HomePage/HomePage";
import Main from "../ReactJS-Task-4/index";
import Home from "../ReactJS-Task-5/Home";
import Homee from "../ReactJS-Task-6/Homee";
import Counter from "../ReactJS-Task-7/Counter";
import Form from "../ReactJS-Task-8/Form";
import EvenOdd from "../ReactJS-Task-9/index";
import ToDo from "../ReactJS-Task-10/ToDo";
import DataLoading from "../ReactJS-Task-11/index";
import ButtonCard from "../ReactJS-Task-12/index";
import Counterr from "../ReactJS-Task-13/Counter";
import FormComponent from "../ReactJS-Task-14/formevents";
import LoginForm from "../ReactJS-Task-15/index";

function Routing() {
  return (
    <div>
      <BrowserRouter>
      
        <div style={{display: "flex", justifyContent: "space-evenly", backgroundColor: "orange", padding: "20px",marginBottom:"15px"}}>

          <Link to="/task-1">Task-1</Link>
          <Link to="/task-2">Task-2</Link>
          <Link to="/task-3">Task-3</Link>
          <Link to="/task-4">Task-4</Link>
          <Link to="/task-5">Task-5</Link>
          <Link to="/task-6">Task-6</Link>
          <Link to="/task-7">Task-7</Link>
          <Link to="/task-8">Task-8</Link>
          <Link to="/task-9">Task-9</Link>
          <Link to="/task-10">Task-10</Link>
          <Link to="/task-11">Task-11</Link>
          <Link to="/task-12">Task-12</Link>
          <Link to="/task-13">Task-13</Link>
          <Link to="/task-14">Task-14</Link>
          <Link to="/task-15">Task-15</Link>
        </div>

        <Routes>
            <Route path="/task-1" element={<WelcomePage />}></Route>
            <Route path="/task-2" element={<Timetable />}></Route>
            <Route path="/task-3" element={<HomePage />}></Route>
            <Route path="/task-4" element={<Main />}></Route>
            <Route path="/task-5" element={<Home />}></Route>
            <Route path="/task-6" element={<Homee />}></Route>
            <Route path="/task-7" element={<Counter />}></Route>
            <Route path="/task-8" element={<Form />}></Route>
            <Route path="/task-9" element={<EvenOdd />}></Route>
            <Route path="/task-10" element={<ToDo />}></Route>
            <Route path="/task-11" element={<DataLoading />}></Route>
            <Route path="/task-12" element={<ButtonCard />}></Route>
            <Route path="/task-13" element={<Counterr />}></Route>
            <Route path="/task-14" element={<FormComponent />}></Route>
            <Route path="/task-15" element={<LoginForm />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default Routing;
