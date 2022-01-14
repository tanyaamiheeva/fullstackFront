import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import Deadlines from "./pages/Deadlines";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<Home/>}/>
          <Route exact path={"/login"} element={<Login/>}/>
          <Route exact path={"/signup"} element={<Registration/>}/>
          <Route exact path={"/profile"} element={<Profile/>}/>
          <Route exact path={"/deadlines"} element={<Deadlines/>}/>
          <Route exact path={"/schedule"} element={<Schedule/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
