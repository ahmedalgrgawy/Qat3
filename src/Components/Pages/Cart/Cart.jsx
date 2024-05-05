import { CiCircleRemove } from "react-icons/ci";
import { useUser } from "@clerk/clerk-react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../../features/cart/cartSlice";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const { user } = useUser();

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const shippingPrice = 50;

  const discount = "10 %";

  return (
    <div>
      <h2 className="main-title my-28">Your Cart</h2>
      <div className="container">
        {cart.length > 0 ? (
          <table className="border-2 w-full h-full">
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
                        onClick={() => dispatch(removeFromCart(item))}
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
                        className="h-16 rounded shadow-md my-3"
                        src={item.img}
                        alt={item.name}
                      />
                    </td>
                    <td className="text-xs sm:text-base md:text-base">
                      {item.name}
                    </td>
                    <td className="text-xs sm:text-base md:text-base">
                      {item.price} EGP
                    </td>
                    <td>
                      <span className="text-xs sm:text-base md:text-base">
                        {item.amount}
                      </span>
                    </td>
                    <td className="text-xs sm:text-base md:text-base">
                      {item.totalPrice}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        ) : (
          <div className="w-[100%] md:w-[50%] mx-auto p-4 bg-main text-center md:rounded-full flex justify-center items-center flex-col ">
            <span className="text-white text-2xl">Your Cart Is Empty </span>
            <NavLink
              className={
                "text-green-500 p-3 bg-main-darker my-3 text-xl  rounded-full hover:bg-secondary hover:text-main-darker duration-300"
              }
              to={"/shop"}
            >
              Go Shopping
            </NavLink>
          </div>
        )}

        <div className="flex justify-center">
          <div className="w-13 px-2 sm:px-18 md:px-18 lg:px-18 md:pr-0 md:w-1/2 border-2 mt-10 mx-6 container flex justify-center flex-col">
            <h3 className="text-center text-2xl mx-auto my-5 font-bold text-main">
              <span>{user.firstName}</span> - Cart
            </h3>
            <table className=" my-10 mx-7 lg:mr-7">
              <tbody>
                <tr>
                  <th className="border-solid border-collapse border w-8 text-center p-4">
                    Total Amount
                  </th>
                  <td className="border-2 w-36 p-4">{totalAmount}</td>
                </tr>
                <tr>
                  <th className="border-solid border-collapse border w-8 text-center p-4">
                    Cart Subtotal
                  </th>
                  <td className="border-2 w-36 p-4">
                    {Math.floor(totalPrice)} EGP
                  </td>
                </tr>
                <tr className="border-y-2">
                  <th className="border-solid border-collapse border w-8 px-8 text-center p-4">
                    Shipping
                  </th>
                  <td className="border-2 p-4">{shippingPrice} EGP</td>
                </tr>
                <tr className="border-y-2">
                  <th className="border-solid border-collapse border w-8 px-8 text-center p-4">
                    Discount
                  </th>
                  <td className="border-2 p-4">{discount}</td>
                </tr>
                <tr className="border-y-2 p-4">
                  <th className="border-solid border-collapse border w-8 px-8 text-center p-4">
                    Total
                  </th>
                  <td className="border-2 p-4">
                    {Math.floor((totalPrice + shippingPrice) * 0.9)} EGP
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              type="button"
              className="w-56 h-12 rounded-xl text-white bg-main text-center font-bold mx-auto"
              style={{ cursor: "pointer" }}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
