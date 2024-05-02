import { CiCircleRemove } from "react-icons/ci";
import { useUser } from '@clerk/clerk-react';
import { useState } from "react";
import "./Cart.css";
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from "../../../features/cart/cartSlice";

export default function Cart() {

  const { user } = useUser();

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart.cart);

  console.log(cart);

  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const [shipping, setShipping] = useState(30);

  if (totalPrice > 2000) {
    setShipping(50)
  }


  return (
    <div>
      <h2 className="main-title my-28">Your Cart</h2>
      <div className="container">

        {cart.length > 0 ? (<table className="border-2 w-full h-full">
          <thead>
            <tr className="border h-11">
              <td>Remove</td>
              <td>Product</td>
              <td>Name</td>
              <td>Price</td>
              <td>Amount</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          {cart.map((item, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>
                    <CiCircleRemove
                      size={30}
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-main-darker hover:text-red-500 duration-300"
                      style={{
                        marginBottom: "4%",
                        marginLeft: "40%",
                        cursor: "pointer",
                      }}
                    />
                  </td>
                  <td className="flex justify-center">
                    <img
                      className="md:h-20 rounded shadow-md my-3"
                      src={item.img}
                      alt={item.name}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price} EGP</td>
                  <td>
                    <span className="text-xl md:text-2xl">
                      {item.amount}
                    </span>
                  </td>
                  <td>{item.totalPrice}</td>
                </tr>
              </tbody>
            )
          })}
        </table>) :
          (<div className="w-[50%] mx-auto p-4 bg-main text-white text-center rounded-full text-3xl">
            Your Cart Is Empty
          </div>)
        }

        <div className="flex justify-center">
          <div className="w-13 px-0 sm:px-20 md:px-24 lg:px-20 md:pr-0 md:w-1/2 border-2 mt-10 mx-8 container flex justify-center flex-col">
            <h3 className="text-center  text-2xl mx-auto my-5 font-bold text-main"><span>{user.firstName}</span> - Cart</h3>
            <table className="table md:my-7 mx-0 ">
              <tbody>
                <tr>
                  <th className="border-solid border-collapse border w-8 text-center p-4">
                    Cart Subtotal
                  </th>
                  <td className="border-2 w-36 p-4">{totalPrice} EGP</td>
                </tr>
                <tr className="border-y-2">
                  <th className="border-solid border-collapse border w-8 px-8 text-center p-4">
                    Shipping
                  </th>
                  <td className="border-2 p-4">{shipping}EGP</td>
                </tr>
                <tr className="border-y-2 p-4">
                  <th className="border-solid border-collapse border w-8 px-8 text-center p-4">
                    Total
                  </th>
                  <td className="border-2 p-4">{totalPrice + shipping}</td>
                </tr>
              </tbody>
            </table>
            <button
              type="button"
              className="lg:w-52 md:w-52 h-12 rounded-xl text-white bg-main text-center font-bold md:mb-3 mx-auto"
              style={{ cursor: "pointer" }}
            > Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
