import Features from "./LandingPage/Features";
import LandingPage from "./LandingPage/LandingPage";
import { LatestProducts } from "./LatestProducts/LatestProducts";
import States from "./States/States";

export default function Home() {


    return (
        <div data-aos-offset='100' data-aos-anchor-placement="top-center">
            <LandingPage />
            <Features />
            <States />
            <LatestProducts />
        </div>
    )
}
