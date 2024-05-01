import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../features/cart/cartSlice';


export default function SingleProduct() {

    const dispatch = useDispatch()

    const product = useSelector(state => state.products.SingleProduct)

    return (
        <div>
            <h2 className="main-title my-28">
                productName
            </h2>

            <div className="container">
                {product.map((item, index) => {
                    return (
                        <div key={index} className="single grid grid-cols-2 gap-5 items-center">
                            <div className="text-center w-[80%]">
                                <img src={item.img} alt="main-picture" className="mb-5 w-full m-auto" />
                            </div>

                            <div className="">
                                <p className="mb-5 text-base text-black-900">{item.category}</p>

                                <h4 className="text-3xl font-semibold">{item.name}</h4>

                                <h2 className=" my-5 text-3xl font-bold">{item.price} EGP</h2>

                                <div className="my-10">

                                    <select className="me-5 p-2 border-2 rounded-lg " name="size" id="">

                                        <option defaultValue disabled value="none">Select Color</option>
                                        {item.color.map((color, index) => {
                                            return (
                                                <option key={index} value={color}>{color}</option>
                                            )
                                        })}

                                    </select>

                                    <button className="ms-5 py-2 px-5 bg-main-darker text-white font-semibold rounded-lg shadow-md hover:bg-main focus:outline-none duration-300 "
                                        onClick={() => dispatch(addToCart({
                                            id: item.id,
                                            price: item.price,
                                            amount: 1,
                                            totalPrice: item.price,
                                            name: item.name,
                                            color: item.color,
                                            img: item.img,
                                            text: item.text
                                        }))}>Add To Cart</button>
                                </div>

                                <h2 className="mb-5 text-3xl font-bold">Product Details :</h2>

                                <p className="text-lg text-black-900">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
