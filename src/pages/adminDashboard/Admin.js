//import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import UserList from "../../components/admin/UserList";
import "./Admin.css";

export default function Admin() {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <>
      {/* <Header page="home" /> */}
      <div className="userList">
        <UserList />
      </div>
    </>
  );
}
