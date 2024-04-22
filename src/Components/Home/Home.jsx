import Features from "./LandingPage/Features";
import LandingPage from "./LandingPage/LandingPage";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer"
import { Newsletters } from "./Newsletters/Newsletters";
import { LatestProducts } from "./LatestProducts/LatestProducts";



export default function Main() {
    return (
        <div>
            <Navbar />
            <LandingPage />
            <Features />
            <LatestProducts />
            <Newsletters />
            <Footer />
        </div>
    )
}
