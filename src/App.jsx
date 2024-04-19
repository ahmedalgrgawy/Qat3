import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import IntroPage from "./Components/IntroPage/IntroPage";
import { useState } from "react";

export default function App() {
  const [userAuth, setUserAuth] = useState(true);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={userAuth ? <Main /> : <IntroPage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
