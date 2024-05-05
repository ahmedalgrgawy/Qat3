import { AboutVideo, logos } from "../../../assets/data";

export default function About() {
    return (
        <div>
            <h2 className="main-title my-28">
                About Us
            </h2>
            <div className="container flex justify-around gap-10 items-center mb-20 mx-auto">
                <div className="w-[30%]">
                    <img src={logos.logoOne} alt="Qat3" />
                </div>
                <div className=" w-[65%] p-10">
                    <h2 className="text-5xl font-bold mb-5">Why Choose Qat3?</h2>

                    <p className="text-gray-600 mb-5">We partner with a wide range of Egyptian vendors, from established brands to exciting new startups. By shopping with Qat3, you are directly supporting the local economy and helping Egyptian businesses thrive, We offer a diverse selection of products across various categories, ensuring you can find everything you need, from fashion and homeware to electronics and groceries.</p>

                    <p className="text-gray-400 mb-5">Browse our user-friendly website, find what you love, and enjoy a seamless checkout experience. We deliver straight to your door, saving you time and effort,We source high-quality products from vendors who prioritize excellence. You can shop with confidence knowing you are getting the best Egyptian-made goods.</p>

                    <marquee className="bg-main-darker text-white p-3 rounded-lg" behavior="smooth" direction="left" >At Qat3, We are passionate about connecting you with the best products from Egyptian businesses, all conveniently delivered to your doorstep. We believe in supporting our local community and showcasing the incredible talent and craftsmanship our country has to offer.</marquee>
                </div>

            </div>

            <div className="container flex flex-col items-center justify-center my-10 text-center" >
                <h1 className="text-4xl font-bold my-5">Download Our <a className="cursor-pointer underline decoration-5 text-sky-800">App</a></h1>

                <div className="w-[30%]">
                    <video loop autoPlay src={AboutVideo.video} alt="App" className="mx-auto" />
                </div>

            </div>
        </div>
    )
}
