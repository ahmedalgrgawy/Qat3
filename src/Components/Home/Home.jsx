import Features from "./LandingPage/Features";
import LandingPage from "./LandingPage/LandingPage";
import { LatestProducts } from "./LatestProducts/LatestProducts";
import States from "./States/States";

export default function Home() {


    return (
        <div>
            <LandingPage />
            <Features />
            <States />
            <LatestProducts />
        </div>
    )
}
