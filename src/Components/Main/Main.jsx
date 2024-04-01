import IntroPage from "../IntroPage/IntroPage";
import Features from "../LandingPage/Features";
import LandingPage from "../LandingPage/LandingPage";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import Register from "../Register/Register";

export default function Main() {
    return (
        <div>
            <Navbar />
            <LandingPage />
            <Features />
            {/* <IntroPage /> */}
            {/* <Login /> */}
            {/* <Register /> */}
        </div>
    )
}
