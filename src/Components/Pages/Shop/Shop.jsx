import { FaCircle } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa"
import { categories } from "../../../assets/Finale Data/data";
import { products } from "../../../assets/Finale Data/data";
import { useDispatch, useSelector } from 'react-redux';
import { filterProduct, singleProduct } from "../../../features/products/productSlice";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../../features/cart/cartSlice";
import { scrollToTop } from "../../../features/main/mainSlice";

export default function Shop() {

    const dispatch = useDispatch();

    const filterOn = useSelector((state) => state.products.filterOn);

    let filteredProducts = useSelector((state) => state.products.filteredProducts);

    const error = useSelector((state) => state.products.error);

    return (
        <div>
            <h2 data-aos="fade-up" className="main-title my-28">
                Our Shop
            </h2>
            <div className='flex items-center justify-center flex-wrap md:flex-nowrap py-8'>
                {categories.map((cat, index) => {
                    return (
                        <div className="mx-6" key={index} data-aos='zoom-in'>
                            <button onClick={() => dispatch(filterProduct(cat))} className="p-2 my-2 md:my-0 second-btn">{cat}</button>
                        </div>
                    )
                })}
            </div>
            <div className="container text-center">
                <div className="products flex justify-center md:justify-around flex-wrap">
                    {filterOn && error === false ? (

                        filteredProducts.map((product, index) => {
                            return (
                                <div key={index} data-aos='flip-down' className="product mt-14 w-[70%] md:w-[30%] lg:w-[22%] min-w-60 py-2 px-3 border border-main-darker rounded-3xl cursor-pointer shadow-2xl my-[15px] mx-0 duration-300 ease-in-out relative hover:scale-105">
                                    <NavLink onClick={() => dispatch(scrollToTop())} to={`/single-product/${product.id}`}>
                                        <div onClick={() => dispatch(singleProduct(product.id))}>
                                            <div className="w-[70%] mx-auto my-auto">
                                                <img className="w-full rounded-2xl" src={product.img} alt="" />
                                            </div>
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
                                        </div>
                                    </NavLink>
                                    <button
                                        onClick={() => dispatch(addToCart({
                                            id: product.id,
                                            price: product.price,
                                            amount: 1,
                                            totalPrice: product.price,
                                            name: product.name,
                                            color: product.color,
                                            img: product.img,
                                            text: product.text
                                        }))} href="#" className="absolute right-10 bottom-5  w-12 h-12 bg-main-darker rounded-[50%] flex items-center justify-center hover:bg-main duration-300">
                                        <i className="text-white">{<FaShoppingCart className="text-[20px]" />}</i>
                                    </button>
                                </div>
                            )
                        }))
                        : (
                            products.map((product, index) => {
                                return (
                                    <div key={index} data-aos='flip-down' className="product h-full mt-14 w-[70%] md:w-[30%] lg:w-[22%] min-w-60 py-2 px-3 border border-main-darker rounded-3xl cursor-pointer shadow-2xl my-[15px] mx-0 duration-300 ease-in-out relative hover:scale-105">
                                        <NavLink onClick={() => dispatch(scrollToTop())} to={`/single-product/${product.id}`}  >
                                            <div onClick={() => dispatch(singleProduct(product.id))}>
                                                <div className="w-[70%] mx-auto my-auto">
                                                    <img className="w-full rounded-2xl" src={product.img} alt="" />
                                                </div>
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
                                            </div>
                                        </NavLink>
                                        <button href="#" className="absolute right-10 bottom-5  w-12 h-12 bg-main-darker rounded-[50%] flex items-center justify-center hover:bg-main duration-300"
                                            onClick={() => dispatch(addToCart({
                                                id: product.id,
                                                price: product.price,
                                                amount: 1,
                                                totalPrice: product.price,
                                                name: product.name,
                                                color: product.color,
                                                img: product.img,
                                                text: product.text
                                            }))}>
                                            <i className="text-white">{<FaShoppingCart className="text-[20px]" />}</i>
                                        </button>
                                    </div>
                                )
                            })
                        )}
                </div>
            </div>
        </div>
    )
}