import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import "./style.css";

export default function UserList() {
  /* LIST USERS */
  const [usersList, setUsersList] = useState([]);
  var i = 0;

  const handleStatusChange = (user) => {
    try {
      axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/updateStatus/` + user._id,
        {
          status: user.status,
        }
      )
      .then(response =>{ 
        getUserList();
        console.log(response.data);
      })
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const handleDeleteClick = async (event, user) => {
    event.preventDefault();
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/deleteUser/` + user._id
      );
      getUserList();
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const getUserList = async () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/fetchUsers`)
      .then((response) => {
        setUsersList(response.data);
      });
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/fetchUsers`)
      .then((response) => {
        setUsersList(response.data);
      });
  }, []);

  return (
    <div className="container">
      <br />
      <br />
      <h4 className="text-center display">Admin Dashboard</h4>

      <Table className="table table-striped table-hover align-middle table-sm caption-top table-responsive">
        <caption>List of Users</caption>

        <thead className="table-info text-center">
          <tr>
            <th>#</th>   
            <th>UserName</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className=" text-center">
          {usersList.map((user, i) => (
            <tr key={user._id}>
              <td>{++i}</td>
              
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>

              <td>
                <Button
                  className="me-3"
                  size="sm"
                  variant="primary"
                  onClick={handleStatusChange.bind(this, user)}
                  disabled={user.status === "Active"}
                >
                  Activate
                </Button>
                <Button
                  className="me-3"
                  size="sm"
                  variant="info"
                  onClick={handleStatusChange.bind(this, user)}
                  disabled={user.status === "Disabled"}
                >
                  Deactivate
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={(event) => handleDeleteClick(event, user)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}