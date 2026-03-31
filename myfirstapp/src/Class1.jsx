// function Sample() {
//   return <h1>Hello!I am Sample Here!!!</h1>;
// }
// export default Sample;


// function Sample() {
//   return (
//     <h1 style={{ backgroundColor: "aqua", color: "red", padding: "15px" }}>
//       Hello!I am Sample Here!!!
//     </h1>
//   );
// }
// export default Sample;


// function Sample() {
//   return (
//     <div>
//         <h1 style={styles.container}>Hello!I am Sample Here!!!</h1>;
//     </div>
//   )
// }

// // This is JSX Approach JSX - JavaScript+HTML
// const styles = {
//   container: {
//     color: "red",
//     backgroundColor:"aqua",
//     padding:"15px"
//   },
// };
// export default Sample;


// function Sample() {
//   return (
//     <div>
//       <h1 style={styles.container1}>Hello!I am Sample Here!!!</h1>;
//       <h1 style={styles.container2}>Welcome</h1>;
//     </div>
//   );
// }

// const styles = {
//   container1: {
//     color: "red",
//     backgroundColor: "aqua",
//     padding: "15px",
//   },
//   container2: {
//     color: "blue",
//     backgroundColor: "red",
//     padding: "20px",
//   },
// };
// export default Sample;


import './Class1.css'
function Sample(){
    return(
        <div>
            <h1 className="color">Hello!I am Sample Here!!!</h1>
            <h2>Welcome</h2>
        </div>
    )
}

export default Sample
