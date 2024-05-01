import { FaCircle } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa"
import { categories } from "../../../assets/Finale Data/data";
import { products } from "../../../assets/Finale Data/data";
import { useDispatch, useSelector } from 'react-redux';
import { filterProduct } from "../../../features/products/productSlice";

export default function Shop() {

    const dispatch = useDispatch()

    const filterOn = useSelector((state) => state.products.filterOn)

    let filteredProducts = useSelector((state) => state.products.filteredProducts)

    const error = useSelector((state) => state.products.error)

    return (
        <div>
            <h2 data-aos="fade-up" className="main-title my-28">
                Our Shop
            </h2>
            <div className='flex items-center justify-center py-8'>
                {categories.map((cat, index) => {
                    return (
                        <div className="mx-6" key={index}>
                            <button onClick={() => dispatch(filterProduct(cat))} className="p-2 second-btn">{cat}</button>
                        </div>
                    )
                })}
            </div>
            <div>
                <div className="container text-center">
                    <div className="products flex justify-center md:justify-around flex-wrap">
                        {(filterOn && error === false) ? (
                            filteredProducts.map((product) => {
                                return (
                                    <div key={product.id} data-aos='flip-down' className="product mt-14 w-[70%] md:w-[30%] lg:w-[22%] min-w-60 py-2 px-3 border border-main-darker rounded-3xl cursor-pointer shadow-2xl my-[15px] mx-0 duration-300 ease-in-out relative hover:scale-105">
                                        <img className="w-full rounded-2xl" src={product.img} alt="" />
                                        <div className="info text-start py-[10px]">
                                            <span className="font-normal text-[14px] " >{product.brand}</span>
                                            <h5 className="pt-2.5 text-[18px] text-[#222] font-black">{product.name}</h5>
                                            <div className="colors pt-2.5 flex">
                                                {product.color.map((color, index) => {
                                                    return (
                                                        <i key={index} className="pr-3">{<FaCircle color={color} size={18} />}</i>
                                                    )
                                                })}
                                            </div>
                                            <h4 className="pt-2.5 text-main-darker text-[16px] font-black">{product.price} <span className="text-[14px]">EGP</span></h4>
                                        </div>
                                        <a href="#" className="absolute right-10 bottom-5  w-12 h-12 bg-main-darker rounded-[50%] flex items-center justify-center hover:bg-main duration-300">
                                            <i className="text-white">{<FaShoppingCart className="text-[20px]" />}</i>
                                        </a>
                                    </div>
                                )
                            })
                        ) : (
                            products.map((product) => {
                                return (
                                    <div key={product.id} data-aos='flip-down' className="product mt-14 w-[70%] md:w-[30%] lg:w-[22%] min-w-60 py-2 px-3 border border-main-darker rounded-3xl cursor-pointer shadow-2xl my-[15px] mx-0 duration-300 ease-in-out relative hover:scale-105">
                                        <img className="w-full rounded-2xl" src={product.img} alt="" />
                                        <div className="info text-start py-[10px]">
                                            <span className="font-normal text-[14px] " >{product.brand}</span>
                                            <h5 className="pt-2.5 text-[18px] text-[#222] font-black">{product.name}</h5>
                                            <div className="colors pt-2.5 flex">
                                                {product.color.map((color, index) => {
                                                    return (
                                                        <i key={index} className="pr-3">{<FaCircle color={color} size={18} />}</i>
                                                    )
                                                })}
                                            </div>
                                            <h4 className="pt-2.5 text-main-darker text-[16px] font-black">{product.price} <span className="text-[14px]">EGP</span></h4>
                                        </div>
                                        <a href="#" className="absolute right-10 bottom-5  w-12 h-12 bg-main-darker rounded-[50%] flex items-center justify-center hover:bg-main duration-300">
                                            <i className="text-white">{<FaShoppingCart className="text-[20px]" />}</i>
                                        </a>
                                    </div>
                                )
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
