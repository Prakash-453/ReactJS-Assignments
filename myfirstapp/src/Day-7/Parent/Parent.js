import React, { Component } from "react";
// import Child1 from "../Child1/Child1";
// import ConditionalRendering from "../Conditional-Rendering/Conditional-Rendering";
import UserComponent from "../UserComponent/UserComponent";
import AdminComponent from "../AdminComponent/AdminComponent";

// function Parent(props) {
//   return (
//     <div>
//       {/* <h1>Parent Component</h1>
//             <Child1 c1="For Child One From Parent" c2="For Child Two From Parent"/> */}

//       {/* <ConditionalRendering isLoggedIn={false}/> */}

//       {/* {props.login==="user"?<UserComponent/>:<AdminComponent/>} */}

//     </div>
//   );

// return props.Login==="User"?<UserComponent/>:<AdminComponent/>
// }

class Parent extends Component {
  render() {
    return (
        this.props.Login === "User" ? <UserComponent /> : <AdminComponent />
    );
  }
}

export default Parent;
