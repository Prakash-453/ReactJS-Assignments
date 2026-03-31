import React from "react";
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
import Routing from "../ReactJS-Task-16/Routing";

function Display() {
  return (
    <div>
      <div style={{ border: "2px solid black", padding: "20px" }}>
        <center><h1>Task-1 : Simple Welcome Page</h1></center><br/>
        <WelcomePage />
      </div>

      <div style={{ border: "2px solid black", padding: "20px" }}>
        <center><h1>Task-2 : TimeTable</h1></center><br/>
        <Timetable />
      </div>

      <div style={{ border: "2px solid black", padding: "20px" }}>
        <center><h1>Task-3 : Image Gallery</h1></center><br/>
        <HomePage />
      </div>

      <div style={{ border: "2px solid black", padding: "20px" }}>
        <center><h1>Task-4 : Display Images in UI</h1></center><br/>
        <Main />
      </div>

      <div style={{ border: "2px solid black", padding: "20px" }}>
        <center><h1>Task-5 : Accordian</h1></center><br/>
        <Home />
      </div>

      <div style={{ border: "2px solid black", padding: "20px" }}>
        <center><h1>Task-6 : Table</h1></center><br/>
        <Homee />
      </div>

      <div style={{ border: "2px solid black", padding: "20px" }}>
        <center><h1>Task-7 : Counter Application using Class Component</h1></center><br/>
        <Counter />
      </div>

      <div style={{ border: "2px solid black", padding: "20px" }}>
        <center><h1>Task-8 : Form Submission </h1></center><br/>
        <Form />
      </div>

      <div style={{ border: "2px solid black", padding: "20px" }}>
        <center><h1>Task-9 : Whether Input is Even or ODD using Class Component</h1></center><br/>
        <EvenOdd/>
      </div>
 
      <div style={{ border: "2px solid black", padding: "20px" }}>
        <center><h1>Task-10 : Implement Delete Feature in ToDo List application</h1></center><br/>
        <ToDo/>
      </div>

      <div style={{ border: "2px solid black", padding: "20px" }}>
        <center><h1>Task-11 : Add spinner if data is not Loaded yet
        </h1></center><br/>
        <DataLoading/>
      </div>

      <div style={{ border: "2px solid black", padding: "20px" }}>
        <center><h1>Task-12 : Show the Card as per the Button Value.</h1></center><br/>
        <ButtonCard/>
      </div>

      <div style={{ border: "2px solid black", padding: "20px" }}>
        <center><h1>Task-13 : Counter Application using Functional Component</h1></center><br/>
        <Counterr />
      </div>

      <div style={{ border: "2px solid black", padding: "20px" }}>
        <center><h1>Task-14 : Upload Image in the form Show the FormData in the Modal</h1></center><br/>
        <FormComponent />
      </div>
      
      <div style={{ border: "2px solid black", padding: "20px" }}>
        <center><h1>Task-15 :Login API Call using Axios</h1></center><br/>
        <LoginForm />
      </div>

      <div style={{ border: "2px solid black", padding: "20px" }}>
        <center><h1>Task-16 : Routing Tasks</h1></center><br/>
        <Routing />
      </div>

    </div>
  );
}

export default Display;
