
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";

const EditContact = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    email: '',
    address: '',
  });
  const [input, setInput] = useState(formData)
  const navigate = useNavigate()
  const uid = useParams()
  const id = uid.id
  useEffect(() => {
    let users = JSON.parse(localStorage.getItem('users'))
    let data = users[id]
    setInput(data)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users'))
    // users[id] = input
    users.splice(id, 1, input)
    console.log(users)
    localStorage.setItem("users", JSON.stringify(users))
    navigate('/contact')
  };

  return (
    <div className="container">
      <div className="justify-content-center col-6">
        <h1 className='mt-4'>CONTACT US</h1>
        <form onSubmit={handleUpdate} className='form-control mt-3 p-4'>
          <label className='p-2'>
            Name:
            <input
              type="text"
              name="name"
              value={
                input.name}
              onChange={handleChange}
              className='form-control'
            />
          </label>
          <br />

          <label className='p-2'>
            Email:
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handleChange}
              className='form-control'
            />
          </label>
          <br />

          <label className='p-2'>
            Address:
            <input
              type="text"
              name="address"
              value={input.address}
              onChange={handleChange}
              className='form-control'
            />
          </label>
          <br />
          <button type='submit' className='btn btn-info float-end fw-bold text-light'>UPDATE</button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;

