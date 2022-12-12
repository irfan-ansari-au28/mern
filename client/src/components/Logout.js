import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../slices/auth";

const Logout = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        navigate("/");
        window.location.reload();
      });
  };
  return (
    <div onClick={handleLogout}>
      <Link to={"/"}>Logout</Link>
    </div>
  );
};

export default Logout;
