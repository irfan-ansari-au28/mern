import axios from "axios";

const API_URL = "http://localhost:3000/api/";

const getAllUsers = () => {
  return axios.get(API_URL);
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
