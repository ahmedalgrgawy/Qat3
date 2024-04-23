import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/AuthPages/Register/Register";
import Login from "./Components/AuthPages/Login/Login";
import IntroPage from "./Components/AuthPages/IntroPage/IntroPage";
import About from "./Components/Pages/About/About";
import Shop from "./Components/Pages/Shop/Shop";
import Reviews from "./Components/Pages/Reviews/Reviews";
import Contact from "./Components/Pages/Contact/Contact";
import Cart from "./Components/Pages/Cart/Cart";
import { useState } from "react";
import Navbar from "./Components/Home/Navbar/Navbar";
import Footer from "./Components/Home/Footer/Footer";
import Newsletters from "./Components/Home/Newsletters/Newsletters";
import SingleProduct from "./Components/Pages/SingleProduct/SingleProduct"

export default function App() {
  const [userAuth, setUserAuth] = useState(true);

  return (
    <div>

      {userAuth ?
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/reviews" element={<Reviews />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/single-product" element={<SingleProduct />}></Route>
          </Routes>
          <Newsletters />
          <Footer />
        </BrowserRouter> : <BrowserRouter>
          <Routes>
            <Route path="/" element={<IntroPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </BrowserRouter>}

    </div >
  );
}
