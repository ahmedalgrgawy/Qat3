import About from "../About/About";
import IntroPage from "../IntroPage/IntroPage";
import Features from "../LandingPage/Features";
import LandingPage from "../LandingPage/LandingPage";
import Navbar from "../Navbar/Navbar";


export default function Main() {
    return (
        <div>
            <Navbar />
            <LandingPage />
            <Features />
            <About />
        </div>
    )
}
