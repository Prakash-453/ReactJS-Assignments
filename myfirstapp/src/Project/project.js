import React, { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("intro");

  return (
    <div>
      <div>
        <button
          onClick={() => setActiveSection("intro")}
        >
          Intro Section
        </button>
        <button
          onClick={() => setActiveSection("product")}
        >
          Product Section
        </button>
        <button
          onClick={() => setActiveSection("about")}
        >
          About Section
        </button>
      </div>

      <div>
        {activeSection === "intro" && (
          <div>
            <h2>Welcome to the Intro Section</h2>
            <p>This is the introduction of the website.</p>
          </div>
        )}
        {activeSection === "product" && (
          <div>
            <h2>Product Section</h2>
            <p>Here are some featured products.</p>
          </div>
        )}
        {activeSection === "about" && (
          <div>
            <h2>About Section</h2>
            <p>Learn more about us in this section.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "space-between",
//     padding: "20px",
//     fontFamily: "Arial, sans-serif",
//   },
//   sidebar: {
//     flex: 1,
//     marginRight: "20px",
//   },
//   button: {
//     display: "block",
//     width: "100%",
//     padding: "10px",
//     margin: "10px 0",
//     cursor: "pointer",
//     border: "none",
//     backgroundColor: "#007BFF",
//     color: "white",
//     borderRadius: "5px",
//     fontSize: "16px",
//   },
//   content: {
//     flex: 3,
//     padding: "20px",
//     border: "2px solid #ccc",
//     borderRadius: "10px",
//     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//   },
//   section: {
//     display: "block",
//   },
//   imageContainer: {
//     flex: 2,
//     textAlign: "center",
//   },
//   image: {
//     maxWidth: "100%",
//     borderRadius: "10px",
//   },
// };

export default App;




































// import React from "react";
// // import { BrowserRouter , Route, Routes } from "react-router-dom";
// import "./project.css"

// function App() {
//   return (
//     <div className="hii">

//       <div className="main">
//           <div id="picture1">
//             <img src="https://res.cloudinary.com/dsxloyhnu/image/upload/v1727765251/2150264108_ykk9jw.jpg" alt="" style={{width:"600px",height:'300px'}}/>
//           </div>

//           <div id="picture2">
//             <img src="https://res.cloudinary.com/dsxloyhnu/image/upload/v1727765601/modern-office-desk-composition-with-technological-device_xx4o89.jpg" alt="" style={{height:"310px",width:"600px"}}/>
//           </div>

//           <div id="picture3">
//             <img src="https://images.squarespace-cdn.com/content/630f6f1e9677196e0a55d0f9/c39f5ef6-c6db-4f7e-a5e8-50e5db077adb/Chair+.jpg?format=1500w&content-type=image%2Fjpeg" alt="" style={{width:"600px",height:'300px'}}/>
//           </div>
//       </div>

//       <div>
//         <button>Intro Section</button>
//         <button>Product Section</button>
//         <button>About Section</button>
//       </div>

//     </div>
//   );
// }

// // const styles = {
// //   container: {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     padding: "20px",
// //     width:"70%",
// //     fontFamily: "Arial, sans-serif",
// //     gap:"20px"
// //   },
// //   sidebar: {
// //     flex: 1,
// //     marginRight: "20px",
// //   },
// //   button: {
// //     display: "block",
// //     width: "100%",
// //     padding: "10px",
// //     margin: "10px 0",
// //     cursor: "pointer",
// //     border: "none",
// //     backgroundColor: "#007BFF",
// //     color: "white",
// //     borderRadius: "5px",
// //     fontSize: "16px",
// //   },
// //   content: {
// //     padding: "20px",
// //     border: "2px solid #ccc",
// //     borderRadius: "10px",
// //     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //   },
// //   section: {
// //     display: "block",
    
// //   },
// //   imageContainer: {
// //     flex: 2,
// //     textAlign: "center",
// //   },
// //   image: {
// //     maxWidth: "100%",
// //     borderRadius: "10px",
// //   },
// // };

// export default App;
