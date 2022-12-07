//import { useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";

import UserList from "../../components/admin/UserList";
import "./Admin.css";

export default function Admin() {
  // const { user } = useSelector((state) => ({ ...state }));
  const userList = [
    { username: "john", email: "123@", role: "user" },
    { username: "micheal", email: "123", role: "user" },
  ];

  return (
    <>
      {/* <Header page="home" /> */}
      <div>
        <UserList rows={userList} />{" "}
        {/* define userlist in another component and import it */}
      </div>
    </>
  );
}
