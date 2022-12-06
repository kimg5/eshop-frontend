//npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/x-data-grid
//npm i bootstrap

import React, { useState, useEffect } from "react";
//import axios from "axios";
import { Table, Button } from "react-bootstrap";
//import { Grid } from "@mui/x-data-grid";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
export default function UserList(props) {
  console.log(props);
  /* LIST USERS */
  //const [usersList, setUsersList] = useState([]);
  var i = 0;
  const userList = props.rows;

  const handleStatusChange = (user) => {
    console.log("status changeTheme");
    // try {
    //   axios.put(
    //     `${process.env.REACT_APP_BACKEND_URL}/updateStatus/` + user._id,
    //     {
    //       status: user.status,
    //     }
    //   )
    //   .then(response =>{
    //     getUserList();
    //     console.log(response.data);
    //   })
    // } catch (error) {
    //   console.log(error.response.data.message);
    // }
  };

  const handleDeleteClick = async (event, user) => {
    event.preventDefault();
    console.log("delete");
    // try {
    //   const { data } = await axios.delete(
    //     `${process.env.REACT_APP_BACKEND_URL}/deleteUser/` + user._id
    //   );
    //   getUserList();
    //   console.log(data);
    // } catch (error) {
    //   console.log(error.response.data.message);
    // }
  };

  //   const getUserList = async () => {
  //     axios
  //       .get(`${process.env.REACT_APP_BACKEND_URL}/fetchUsers`)
  //       .then((response) => {
  //         setUsersList(response.data);
  //       });
  //   }

  //   useEffect(() => {
  //     axios
  //       .get(`${process.env.REACT_APP_BACKEND_URL}/fetchUsers`)
  //       .then((response) => {
  //         setUsersList(response.data);
  //       });
  //   }, []);

  return (
    <div className="container">
      <br />
      <br />
      <h4 className="text-center display">Admin Dashboard</h4>

      <Table className="table table-striped table-hover align-middle table-sm caption-top table-responsive">
        {/*<Table striped bordered hover>*/}
        <caption>List of Users</caption>

        <thead className="table-info text-center">
          <tr>
            <th scope="col">#</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, i) => (
            <tr key={user._id}>
              <th scope="row">{++i}</th>

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
