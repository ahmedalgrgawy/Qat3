import { FaCircle } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa"
import product from "../../../assets/f5.jpg"
import pic1 from "../../../assets/product-pictures/picture1.jpg"
import pic2 from "../../../assets/product-pictures/picture2.jpg"
import pic3 from "../../../assets/product-pictures/picture3.jpg"
import pic4 from "../../../assets/product-pictures/picture4.jpg"

export default function SingleProduct() {


    return (
        <div>
            <h2 className="main-title my-28">
                productName
            </h2>



            <div className="container">
                <div className="single grid grid-cols-2 gap-5 flex items-center">
                <div className=" text-center">

                <img src={pic1} alt="main-picture" className="mb-5 w-3/5 m-auto" />

                    <div className="grid grid-cols-4 gap-2 ">
                    <img src={pic1} alt="first-picture" />
                    <img src={pic2} alt="second-picture" />
                    <img src={pic3} alt="third-picture" />
                    <img src={pic4} alt="forth-picture" />

                    </div>

                </div>

<div className="">
<p className="mb-5 text-base text-black-900">Home / T-shirt</p>

<h4 className="text-3xl font-semibold">Men's Fashion T-Shirt</h4>

<h2 className=" my-5 text-3xl font-bold">$ 140,50</h2>




<div className="my-10">

<select className="me-5 p-2 border-2 rounded-xl " name="size" id="">

    <option selected disabled value="none">Select Size</option>
    <option value="small">Small</option>
    <option value="medium">Medium</option>
    <option value="large">Large</option>
    <option value="XLarge">XL</option>
    <option value="2XLarge">XXL</option>

</select>

<input type="number" min="1" className="mx-5 p-2 w-14 border-2 border-gray rounded-xl" />

<button className="ms-5 py-2 px-5 bg-yellow-500 text-white font-semibold rounded-full shadow-md hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-violet-500 focus:ring-opacity-75">Add To Cart</button>
</div>

<h2 className="mb-5 text-3xl font-bold">Product Details :</h2>

<p className="text-lg text-black-900">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestias veritatis dignissimos aut maxime nam tempore quo atque, cumque ut fugit reiciendis asperiores, inventore, quidem natus reprehenderit mollitia incidunt? Adipisci aut velit voluptas ad soluta magni dolorem, cumque molestiae vero totam maxime laborum? Corrupti, officia deserunt? Reprehenderit velit sequi harum? Praesentium ad ut accusamus voluptates deleniti labore repudiandae nulla exercitationem?
</p>
</div>





                </div>
                <div className="similar text-center">
                    <h2 className="main-title my-28">
                        Similar Products
                    </h2>
                    <div className=" flex justify-center md:justify-around flex-wrap">
                        <div className="product mt-14 w-[70%] md:w-[30%] lg:w-[22%] min-w-60 py-2 px-3 border border-main-darker rounded-3xl cursor-pointer shadow-2xl my-[15px] mx-0 duration-300 ease-in-out relative hover:scale-105">
                            <img className="w-full rounded-2xl" src={product} alt="" />
                            <div className="info text-start py-[10px]">
                                <span className="font-normal text-[14px] " >Adidas</span>
                                <h5 className="pt-2.5 text-[18px] text-[#222] font-black">T-Shirt Oversize</h5>
                                <div className="colors pt-2.5 flex">
                                    <i className="pr-3">{<FaCircle color="#ccc" size={18} />}</i>
                                    <i className="pr-3">{<FaCircle color="#222" size={18} />}</i>
                                    <i className="pr-3">{<FaCircle color="#999" size={18} />}</i>
                                    <i className="pr-3">{<FaCircle color="#777" size={18} />}</i>
                                </div>
                                <h4 className="pt-2.5 text-main-darker text-[16px] font-black">25$</h4>
                            </div>
                            <a href="#" className="absolute right-10 bottom-10 w-10 h-10 md:w-14 md:h-14 bg-main-darker rounded-[50%] flex items-center justify-center hover:bg-main duration-300">
                                <i className="text-white">{<FaShoppingCart className="text-[18px] md:text-[25px]" />}</i>
                            </a>
                        </div>
                        <div className="product mt-14 w-[70%] md:w-[30%] lg:w-[22%] min-w-60 py-2 px-3 border border-main-darker rounded-3xl cursor-pointer shadow-2xl my-[15px] mx-0 duration-300 ease-in-out relative hover:scale-105">
                            <img className="w-full rounded-2xl" src={product} alt="" />
                            <div className="info text-start py-[10px]">
                                <span className="font-normal text-[14px] " >Adidas</span>
                                <h5 className="pt-2.5 text-[18px] text-[#222] font-black">T-Shirt Oversize</h5>
                                <div className="colors pt-2.5 flex">
                                    <i className="pr-3">{<FaCircle color="#ccc" size={18} />}</i>
                                    <i className="pr-3">{<FaCircle color="#222" size={18} />}</i>
                                    <i className="pr-3">{<FaCircle color="#999" size={18} />}</i>
                                    <i className="pr-3">{<FaCircle color="#777" size={18} />}</i>
                                </div>
                                <h4 className="pt-2.5 text-main-darker text-[16px] font-black">25$</h4>
                            </div>
                            <a href="#" className="absolute right-10 bottom-10 w-10 h-10 md:w-14 md:h-14 bg-main-darker rounded-[50%] flex items-center justify-center hover:bg-main duration-300">
                                <i className="text-white">{<FaShoppingCart className="text-[18px] md:text-[25px]" />}</i>
                            </a>
                        </div>
                        <div className="product mt-14 w-[70%] md:w-[30%] lg:w-[22%] min-w-60 py-2 px-3 border border-main-darker rounded-3xl cursor-pointer shadow-2xl my-[15px] mx-0 duration-300 ease-in-out relative hover:scale-105">
                            <img className="w-full rounded-2xl" src={product} alt="" />
                            <div className="info text-start py-[10px]">
                                <span className="font-normal text-[14px] " >Adidas</span>
                                <h5 className="pt-2.5 text-[18px] text-[#222] font-black">T-Shirt Oversize</h5>
                                <div className="colors pt-2.5 flex">
                                    <i className="pr-3">{<FaCircle color="#ccc" size={18} />}</i>
                                    <i className="pr-3">{<FaCircle color="#222" size={18} />}</i>
                                    <i className="pr-3">{<FaCircle color="#999" size={18} />}</i>
                                    <i className="pr-3">{<FaCircle color="#777" size={18} />}</i>
                                </div>
                                <h4 className="pt-2.5 text-main-darker text-[16px] font-black">25$</h4>
                            </div>
                            <a href="#" className="absolute right-10 bottom-10 w-10 h-10 md:w-14 md:h-14 bg-main-darker rounded-[50%] flex items-center justify-center hover:bg-main duration-300">
                                <i className="text-white">{<FaShoppingCart className="text-[18px] md:text-[25px]" />}</i>
                            </a>
                        </div>
                        <div className="product mt-14 w-[70%] md:w-[30%] lg:w-[22%] min-w-60 py-2 px-3 border border-main-darker rounded-3xl cursor-pointer shadow-2xl my-[15px] mx-0 duration-300 ease-in-out relative hover:scale-105">
                            <img className="w-full rounded-2xl" src={product} alt="" />
                            <div className="info text-start py-[10px]">
                                <span className="font-normal text-[14px] " >Adidas</span>
                                <h5 className="pt-2.5 text-[18px] text-[#222] font-black">T-Shirt Oversize</h5>
                                <div className="colors pt-2.5 flex">
                                    <i className="pr-3">{<FaCircle color="#ccc" size={18} />}</i>
                                    <i className="pr-3">{<FaCircle color="#222" size={18} />}</i>
                                    <i className="pr-3">{<FaCircle color="#999" size={18} />}</i>
                                    <i className="pr-3">{<FaCircle color="#777" size={18} />}</i>
                                </div>
                                <h4 className="pt-2.5 text-main-darker text-[16px] font-black">25$</h4>
                            </div>
                            <a href="#" className="absolute right-10 bottom-10 w-10 h-10 md:w-14 md:h-14 bg-main-darker rounded-[50%] flex items-center justify-center hover:bg-main duration-300">
                                <i className="text-white">{<FaShoppingCart className="text-[18px] md:text-[25px]" />}</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
