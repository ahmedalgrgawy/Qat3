import { FaCircle } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa"
import product from "../../../assets/f5.jpg"
export const LatestProducts = () => {
    return (
        <div>
            <h2 className="main-title">Latest Products</h2>
            <div className="container text-center">
                <div className="products flex justify-center md:justify-around flex-wrap">
                    <div className="product mt-14 w-[70%] md:w-[45%] lg:w-[30%] min-w-60 py-2 px-3 border border-main-darker rounded-3xl cursor-pointer shadow-2xl my-[15px] mx-0 duration-300 ease-in-out relative hover:scale-105">
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
                    <div className="product mt-14 w-[70%] md:w-[45%] lg:w-[30%] min-w-60 py-2 px-3 border border-main-darker rounded-3xl cursor-pointer shadow-2xl my-[15px] mx-0 duration-300 ease-in-out relative hover:scale-105">
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
                    <div className="product mt-14 w-[70%] md:w-[45%] lg:w-[30%] min-w-60 py-2 px-3 border border-main-darker rounded-3xl cursor-pointer shadow-2xl my-[15px] mx-0 duration-300 ease-in-out relative hover:scale-105">
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
                    <div className="product mt-14 w-[70%] md:w-[45%] lg:w-[30%] min-w-60 py-2 px-3 border border-main-darker rounded-3xl cursor-pointer shadow-2xl my-[15px] mx-0 duration-300 ease-in-out relative hover:scale-105">
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
                    <div className="product mt-14 w-[70%] md:w-[45%] lg:w-[30%] min-w-60 py-2 px-3 border border-main-darker rounded-3xl cursor-pointer shadow-2xl my-[15px] mx-0 duration-300 ease-in-out relative hover:scale-105">
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
                    <div className="product mt-14 w-[70%] md:w-[45%] lg:w-[30%] min-w-60 py-2 px-3 border border-main-darker rounded-3xl cursor-pointer shadow-2xl my-[15px] mx-0 duration-300 ease-in-out relative hover:scale-105">
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
                    <div className="product mt-14 w-[70%] md:w-[45%] lg:w-[30%] min-w-60 py-2 px-3 border border-main-darker rounded-3xl cursor-pointer shadow-2xl my-[15px] mx-0 duration-300 ease-in-out relative hover:scale-105">
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
                    <div className="product mt-14 w-[70%] md:w-[45%] lg:w-[30%] min-w-60 py-2 px-3 border border-main-darker rounded-3xl cursor-pointer shadow-2xl my-[15px] mx-0 duration-300 ease-in-out relative hover:scale-105">
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
                    <div className="product mt-14 w-[70%] md:w-[45%] lg:w-[30%] min-w-60 py-2 px-3 border border-main-darker rounded-3xl cursor-pointer shadow-2xl my-[15px] mx-0 duration-300 ease-in-out relative hover:scale-105">
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
    )
}
