import Features from "./LandingPage/Features";
import LandingPage from "./LandingPage/LandingPage";
import { LatestProducts } from "./LatestProducts/LatestProducts";



export default function Main() {
    return (
        <div>
            <LandingPage />
            <Features />
            <LatestProducts />
        </div>
    )
}
