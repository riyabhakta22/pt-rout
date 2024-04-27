import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Contact = () => {
  const [user, setUser] = useState();
  const [search, searchUser] = useState();

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
 
  

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
    setFilteredUsers(storedUsers);

    setUser(JSON.parse(localStorage.getItem("users")));
  }, []);


  const handleDelete = (id) => {
    let users = JSON.parse(localStorage.getItem("users"));
    users.splice(id, 1);
    localStorage.setItem("users", JSON.stringify(users));
    setUser(users);
  };

  return (
    <>
      {/* <h1>Hello, I m Contact Page</h1> */}

      <div className="row">
        <div className="container">
          <div className="card">
            <div className="card-title">
              <h2 className="ms-3">Hello, I m Contact Page</h2>
            </div>
            <div className="card-body">
              {/* <Link to="/EditContact" className='btn btn-success text-left'>Add New</Link> */}
              <Link to="/FormContact" className="btn btn-success text-left">
                ADD NEW
              </Link>
              <table className="table table-bordered mt-5">
                <thead className="bg-dark">
                  <tr>
                    {/* <td>ID</td> */}
                    <td>NAME</td>
                    <td>EMAIL</td>
                    <td>ADDRESS</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {user &&
                    user.map((item, index) => (
                      <tr key={index}>
                        <td key={item.id}>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            type="button"
                            onClick={(e) => handleDelete(index)}
                          >
                            DELETE
                          </button>
                          <Link
                            to={`/EditContact/${index}`}
                            className="btn btn-dark"
                          >
                            EDIT
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
