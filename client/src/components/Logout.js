import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../slices/auth";

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        alert("logged Out successfully !!");
      });
  };
  return (
    <div onClick={handleLogout}>
      <Link to={"/login"}>Logout</Link>
    </div>
  );
};

export default Logout;
