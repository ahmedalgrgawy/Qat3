import { FaCircle } from "react-icons/fa6";
import { products } from "../../../assets/Finale Data/data";

export const LatestProducts = () => {

    let shuffledProducts = shuffle(products);

    function shuffle(arr) {
        for (var i = 0; i < arr.length - 1; i++) {
            var j = i + Math.floor(Math.random() * (arr.length - i));

            var temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }


    return (
        <div>
            <h2 data-aos='fade-down' className="main-title">Latest Products</h2>
            <div className="container text-center">
                <div className="products flex justify-center md:justify-around flex-wrap">
                    {shuffledProducts.slice(shuffledProducts.length - 6).map((product, index) => {
                        return (
                            <div key={index} data-aos='flip-down' className="product mt-14 w-[70%] md:w-[45%] lg:w-[30%] min-w-60 py-2 px-3 border border-main-darker rounded-3xl cursor-pointer shadow-2xl my-[15px] mx-0 duration-300 ease-in-out relative hover:scale-105">
                                <img className="w-full rounded-2xl" src={product.img} alt={product.name} />
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
                                    <h4 className="pt-2.5 text-main-darker text-[16px] font-black">{product.price}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
