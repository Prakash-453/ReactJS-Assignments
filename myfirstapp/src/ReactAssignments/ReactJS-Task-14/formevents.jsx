import React, { useState } from "react";
import MyVerticallyCenteredModal from "./modalComponent";

function FormComponent() {
  const [modalShow, setModalShow] = useState(false);
  const [formData, setformData] = useState({ user: "", mobile: "", email: "", img: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setformData((a) => ({
      ...a,
      [name]: value,
    }));
  };

  const handleImageInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setformData((a) => ({
        ...a,
        img: imageUrl,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalShow(true);
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
      <form onSubmit={handleSubmit}style={{display: "flex",flexDirection: "column",alignItems: "center",}}>

        <input type="text" name="user" value={formData.user} onChange={handleInput} placeholder="Name"/><br/>

        <input type="tel" name="mobile" value={formData.mobile} onChange={handleInput} placeholder="Mobile"/><br/>

        <input type="email" name="email" value={formData.email} onChange={handleInput} placeholder="Email"/><br/>

        {formData.img && (<img src={formData.img} alt="Preview" hidden/>)}
        <input type="file" name="img" onChange={handleImageInput} style={{marginLeft:"100px"}}/><br/>

        <input type="submit" value="Submit"/>
      </form>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        user={formData.user}
        mobile={formData.mobile}
        email={formData.email}
        image={formData.img}
      />
    </div>
  );
}

export default FormComponent;

