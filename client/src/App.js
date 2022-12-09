import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
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
          <Link to={"/register"} className="">
            Sign Up
          </Link>
          <Link to={"/"} className="">
            Home
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
