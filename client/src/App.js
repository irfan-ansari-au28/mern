import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";

function App() {
  return (
    // <div className="bg-slate-500 ">
    //   <header>
    //     <h1 className="text-3xl font-bold underline">App is working...</h1>
    //   </header>
    // </div>
    <div>
      <BrowserRouter>
        <nav>
          <div>
            <Link to={"/register"} className="">
              Sign Up
            </Link>
          </div>
          <div>
            <Link to={"/login"} className="">
              Login
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
