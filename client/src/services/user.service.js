import axios from "axios";
import AuthService from "./auth.service";

const API_URL = "http://localhost:8080/api";

const getAllUsers = () => {
  let token = null;
  token = AuthService.getCurrentUser().token;
  if (token) {
    return axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
};

// const getUserBoard = () => {
//   return axios.get(API_URL + "user");
// };

// const getModeratorBoard = () => {
//   return axios.get(API_URL + "mod");
// };

// const getAdminBoard = () => {
//   return axios.get(API_URL + "admin");
// };

const UserService = {
  getAllUsers,
  //   getUserBoard,
  //   getModeratorBoard,
  //   getAdminBoard,
};

export default UserService;
