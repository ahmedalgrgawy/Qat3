import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/AuthPages/Register/Register";
import Login from "./Components/AuthPages/Login/Login";
import IntroPage from "./Components/AuthPages/IntroPage/IntroPage";
import { useState } from "react";

export default function App() {
  const [userAuth, setUserAuth] = useState(true);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={userAuth ? <Home /> : <IntroPage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
