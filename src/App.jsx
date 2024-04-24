import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/AuthPages/Register/Register";
import Login from "./Components/AuthPages/Login/Login";
import About from "./Components/Pages/About/About";
import Shop from "./Components/Pages/Shop/Shop";
import Reviews from "./Components/Pages/Reviews/Reviews";
import Contact from "./Components/Pages/Contact/Contact";
import Cart from "./Components/Pages/Cart/Cart";
import Navbar from "./Components/Home/Navbar/Navbar";
import Footer from "./Components/Home/Footer/Footer";
import Newsletters from "./Components/Home/Newsletters/Newsletters";
import SingleProduct from "./Components/Pages/SingleProduct/SingleProduct"
import UserProfilePage from "./Components/AuthPages/UserProfile/UserProfile";
import IntroPage from "./Components/AuthPages/IntroPage/IntroPage"
import Bye from "./Components/AuthPages/Bye/Bye";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import ScrollButton from "./Components/Home/ScrollButton/ScrollButton ";


export default function App() {

  useEffect(() => {
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1500,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    });
    AOS.refresh();
  }, []);

  return (

    <div className=" duration-300 delay-300">
      <SignedOut>
        <BrowserRouter scrollToTop={true}>
          <Routes>
            <Route path="/" element={<IntroPage />}></Route>
            <Route path="/sign-up" element={<Register />}></Route>
            <Route path="/sign-in" element={<Login />}></Route>
            <Route path="/bye" element={<Bye />}></Route>
          </Routes>
        </BrowserRouter>
      </SignedOut>

      <SignedIn>
        <BrowserRouter scrollToTop={true}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/reviews" element={<Reviews />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/single-product" element={<SingleProduct />}></Route>
            <Route path="/user-profile" element={<UserProfilePage />}></Route>
          </Routes>
          <Newsletters />
          <Footer />
          <ScrollButton />
        </BrowserRouter>
      </SignedIn>

    </div >
  );
}
