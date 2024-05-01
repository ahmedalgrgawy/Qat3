import { useSelector } from 'react-redux'
export default function SingleProduct() {

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

                                    <input type="number" min="1" className="mx-5 p-2 w-14 border-2 border-gray rounded-lg" />

                                    <button className="ms-5 py-2 px-5 bg-main-darker text-white font-semibold rounded-lg shadow-md hover:bg-main focus:outline-none duration-300 ">Add To Cart</button>
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
