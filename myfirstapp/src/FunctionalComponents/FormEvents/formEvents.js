// import React, { useState } from "react";

// function FormComponent() {
//   const [user, setUser] = useState("");
//   const [result, setResult] = useState("");

//   const handleInput = (e) => {
//     setUser(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setResult(user);
//     setUser("")
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="User" value={user} onChange={handleInput} />
//         <input type="submit" />
//       </form>
//       <h1>{result}</h1>
//     </div>
//   );
// }

// export default FormComponent;


import React, { useState } from "react";
import MyVerticallyCenteredModal from "./modalComponent";
import TajMahal from "./Taj Mahal.jpeg"


function FormComponent() {
    const [modalShow, setModalShow] = React.useState(false);

  const [formData, setformData] = useState({user:"",mobile:"",email:""});

  const handleInput = (e) => {
    // console.log(e.target.name);
    const {name,value}=e.target
    setformData((a)=>{
        console.log(a,"Curent State")
        return{
            ...a,
            [name]:value

        }
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    // alert(formData.user+" "+formData.mobile+" "+formData.email)
    setModalShow(true)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="user" value={formData.user} onChange={handleInput} />
        <input type="mobile" name="mobile" value={formData.mobile} onChange={handleInput} />
        <input type="email" name="email" value={formData.email} onChange={handleInput} />
        <input type="submit" />
      </form>

      {/* <h1>{formData.user}</h1>
      <h1>{formData.mobile}</h1>
      <h1>{formData.email}</h1> */}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        user={formData.user}
        mobile={formData.mobile}
        email={formData.email}
      />
    </div>
  );
}

export default FormComponent;




// import React, { useState } from "react";
// import MyVerticallyCenteredModal from "./modalComponent";

// function FormComponent() {
//   const [modalShow, setModalShow] = useState(false);
//   const [formData, setformData] = useState({ user: "", mobile: "", email: "", img: "" });

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setformData((a) => ({
//       ...a,
//       [name]: value,
//     }));
//   };

//   const handleImageInput = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setformData((a) => ({
//         ...a,
//         img: imageUrl,
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setModalShow(true);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh", 
//         backgroundColor: "#f8f9fa",
//       }}
//     >
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           backgroundColor: "#fff",
//           padding: "20px",
//           borderRadius: "8px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           maxWidth: "400px",
//           width: "100%", 
//         }}
//       >
//         <input
//           type="text"
//           name="user"
//           value={formData.user}
//           onChange={handleInput}
//           placeholder="Name"
//           style={{ marginBottom: "10px", width: "100%", padding: "10px" }}
//         />
//         <input
//           type="tel"
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleInput}
//           placeholder="Mobile"
//           style={{ marginBottom: "10px", width: "100%", padding: "10px" }}
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInput}
//           placeholder="Email"
//           style={{ marginBottom: "10px", width: "100%", padding: "10px" }}
//         />

//         {formData.img && (
//           <img
//             src={formData.img}
//             alt="Preview"
//             hidden
//             style={{ maxWidth: "100%", maxHeight: "150px", marginBottom: "10px" }}
//           />
//         )}
//         <input
//           type="file"
//           name="img"
//           onChange={handleImageInput}
//           style={{ marginBottom: "10px", width: "100%" }}
//         />

//         <input
//           type="submit"
//           value="Submit"
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "#007bff",
//             color: "#fff",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//             width: "100%",
//           }}
//         />
//       </form>
//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//         user={formData.user}
//         mobile={formData.mobile}
//         email={formData.email}
//         image={formData.img}
//       />
//     </div>
//   );
// }

// export default FormComponent;



