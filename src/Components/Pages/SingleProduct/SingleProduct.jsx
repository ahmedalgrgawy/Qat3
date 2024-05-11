import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../features/cart/cartSlice';
import { useParams } from 'react-router-dom';


export default function SingleProduct() {

    const dispatch = useDispatch()

    const product = useSelector(state => state.products.SingleProduct)

    const { id } = useParams()

    return (
        <div>
            {product.filter((product => product.id === id)).map((item, index) => {
                return (
                    <div key={index}>
                        <h2 data-aos='fade-down' className="main-title my-28">
                            {item.brand}
                        </h2>
                        <div className="single grid lg:grid-cols-2 gap-5 items-center container ">
                            <div data-aos='fade-left' className="text-center mx-auto w-[100%] sm:w-[80%] ">
                                <img src={item.img} alt="main-picture" className="mb-5 w-full m-auto" />
                            </div>

                            <div className='text-center lg:text-start lg:w-[100%]' data-aos='fade-right'>
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
                    </div>
                )
            })}
        </div>
    )
}
