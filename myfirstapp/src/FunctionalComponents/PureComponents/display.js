// import React, { Component } from "react";

// function Display(props) {
//   console.log("Display Component is Rendering");

//   return (
//     <div>
//       <h1>{props.value}</h1>
//     </div>
//   );
// }

// // export default Display;

// export default React.memo(Display);  // child component make it to pure component by using React.memo 

// Memo will takes display previous state if previous state will change then only it re-renders.
// It avoids the unneccessary rendering of the component.


import React,{PureComponent} from "react"

class Display extends PureComponent{
    render(){
        console.log("Display Component is Rendering")
        return(
            <div>
                <h1>{this.props.value}</h1>
            </div>
        )
    }
}

export default Display
