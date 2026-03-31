// import React, { useState } from "react";
// // import "./index.css";
// import MyVerticallyCenteredModal from "../LoginForm/modalcomponentt";
// // import { useNavigate } from "react-router-dom";

// export default function LoginForm() {
//   const [modalShow, setModalShow] = useState(false);
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     expiresInMins: 30,
//   });

//   const [res, setResponse] = useState(false);
//   const handleInput = (e) => {
//     let { name, value, type } = e.target;

//     setFormData((a) => {
//       return {
//         ...a,
//         [name]: value,
//       };
//     });
//   };

//   // const navigate=useNavigate()
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch("https://dummyjson.com/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         res.accessToken ? setResponse(true) : setResponse(false);
//         // res.accessToken?navigate("/welcome"):navigate('*')
//         setModalShow(true);
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column",width: "50vw",}}>
//         <input type="text" name="username" value={formData.username} onChange={handleInput} placeholder="enter username"/>
//         <input type="text" name="password" value={formData.password} onChange={handleInput} placeholder="enter password"/>
//         <input type="number" name="expiresInMins" value={formData.expiresInMins} onChange={handleInput}/>
//         <input type="submit" />
//       </form>
//       {res ? (
//         <MyVerticallyCenteredModal
//           show={modalShow}
//           onHide={() => setModalShow(false)}
//           user={formData.username}
//           password={formData.password}
//         />
//       ) : (
//         <MyVerticallyCenteredModal
//           show={modalShow}
//           onHide={() => setModalShow(false)}
//           user="UnAuthorized user"
//         />
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import axios from "axios";
import MyVerticallyCenteredModal from "../LoginForm/modalcomponentt";

export default function LoginForm() {
  const [modalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    expiresInMins: 30,
  });
  const [res, setResponse] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace fetch with axios
    axios.post("https://dummyjson.com/auth/login",formData,{
          headers: { "Content-Type": "application/json" },
        })
      .then((res) => {
        res.data.accessToken ? setResponse(true) : setResponse(false);
        setModalShow(true);
      })
      .catch((err) => {
        setModalShow(true);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "40vw",
           gap:"20px"
        }}
      >
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInput}
          placeholder="Enter Username"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInput}
          placeholder="Enter Password"
        />
        <input
          type="number"
          name="expiresInMins"
          value={formData.expiresInMins}
          onChange={handleInput}
        />
        <input type="submit" />
      </form>
      {res ? (
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          user={formData.username}
          password={formData.password}
        />
      ) : (
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          user="UnAuthorized user"
        />
      )}
    </div>
  );
}
