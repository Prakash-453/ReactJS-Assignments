import React, { useState } from "react";
import axios from "axios";
import MyVerticallyCenteredModal from "./modalcomponent";

function LoginForm() {
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

    axios
      .post("https://dummyjson.com/auth/login", formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        res.data.accessToken ? setResponse(true) : setResponse(false);
        setModalShow(true);
      })
      .catch((err) => {
        console.error("Error:", err);
        setResponse(false)
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
          gap: "20px",
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
          type="text"
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

export default LoginForm;
