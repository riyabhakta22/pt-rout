import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  // const [data, setData] = useState(formData);
  const navigate = useNavigate()


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("users"));
    if (data) {
      data.push(formData);
      localStorage.setItem("users", JSON.stringify(data));
    } else {
      localStorage.setItem("users", JSON.stringify([formData]));
    }
    navigate('/contact')
  };

  return (
    <div className="container">
      <div className="justify-content-center col-6">
        <h1 className="mt-4">CONTACT US</h1>
        <div>
    </div>
        <form onSubmit={handleSubmit} className="form-control mt-3 p-4">
          <label className="p-2">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
          </label>
          <br />

          <label className="p-2">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
          </label>
          <br />

          <label className="p-2">
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="form-control"
            />
          </label>
          <br />
          <button
            type="submit"
            className="btn btn-success float-end fw-bold text-light"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
