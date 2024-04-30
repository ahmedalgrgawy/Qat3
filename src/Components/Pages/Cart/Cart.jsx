import { CiCircleRemove } from "react-icons/ci";
import image1 from "../../../assets/c-img/image1.jpg";
import image2 from "../../../assets/c-img/image2.jpg";
import image3 from "../../../assets/c-img/image3.jpg";
import { useState } from "react";
import "./Cart.css";
import { LuPlus, LuMinus } from "react-icons/lu";

export default function Cart() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [amount3, setAmount3] = useState(1);

  const handleIncrease1 = () => {
    setAmount1((prevAmount) => prevAmount + 1);
  };

  const handleDecrease1 = () => {
    if (amount1 > 1) {
      setAmount1((prevAmount) => prevAmount - 1);
    }
  };
  const handleIncrease2 = () => {
    setAmount2((prevAmount) => prevAmount + 1);
  };

  const handleDecrease2 = () => {
    if (amount2 > 1) {
      setAmount2((prevAmount) => prevAmount - 1);
    }
  };
  const handleIncrease3 = () => {
    setAmount3((prevAmount) => prevAmount + 1);
  };

  const handleDecrease3 = () => {
    if (amount3 > 1) {
      setAmount3((prevAmount) => prevAmount - 1);
    }
  };

  let SubTotal1 = (amount1 * 120.55).toFixed(2);

  let SubTotal2 = (amount2 * 66.0).toFixed(2);

  let SubTotal3 = (amount3 * 150.3).toFixed(2);

  let CartSubTotal = parseFloat(SubTotal1) + parseFloat(SubTotal2) + parseFloat(SubTotal3);


  return (
    <div>
      <h2 className="main-title my-28">Your Cart</h2>
      <div className="container">
        <table className="border-2 w-full h-full">
          <thead>
            <tr className="border h-11">
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Amount</td>
              <td>Sub Total</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <CiCircleRemove
                  className="text-main"
                  style={{
                    marginBottom: "4%",
                    marginLeft: "40%",
                    cursor: "pointer",
                  }}
                />
              </td>
              <td className="flex justify-center">
                <img
                  className="md:h-20 w-28 rounded shadow-md my-3"
                  src={image1}
                  alt=""
                />
              </td>
              <td>Men&apos;s Fashion T-Shirt</td>
              <td>$120.55</td>
              <td>
                <button onClick={handleDecrease1}>
                  <LuMinus className="text-main" />
                </button>
                <span className="text-xl md:text-2xl">
                  &nbsp;{amount1}&nbsp;
                </span>
                <button onClick={handleIncrease1}>
                  <LuPlus className="text-main" />
                </button>
              </td>
              <td>${SubTotal1}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-row">
          <div className="w-1/2">
            <p className="font-bold mt-11">Apply Coupon</p>
            <input
              type="search"
              name="Enter Your Coupon"
              id="Enter Your Coupon"
              placeholder="Enter Your Coupon"
              className=" md:w-30 h-10 mt-4 text-sm sm:w-30 lg:w-90 xl:w-96 2xl:w-96 bg-gray-100 border-none focus:outline-none rounded-lg pl-4"
            />
            <input
              type="button"
              className="text-white w-20 h-10 rounded ml-2 bg-main "
              value="Apply"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="w-13 px-0 sm:px-20 md:px-24 lg:px-20 md:pr-0 md:w-1/2 border-2 mt-10 mx-8 container">
            <table className="table md:my-7 mx-0 ">
              <thead>
                <th className="float-left">Cart Totals</th>
              </thead>
              <tbody>
                <tr>
                  <th className="border-solid border-collapse border w-8 text-center">
                    Cart Subtotal
                  </th>
                  <td className="border-2 w-36">${CartSubTotal.toFixed(2)}</td>
                </tr>
                <tr className="border-y-2">
                  <th className="border-solid border-collapse border w-8 px-8 text-center">
                    Shipping
                  </th>
                  <td className="border-2">Free</td>
                </tr>
                <tr className="border-y-2">
                  <th className="border-solid border-collapse border w-8 px-8 text-center">
                    Total
                  </th>
                  <td className="border-2">${CartSubTotal.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
            <input
              type="button"
              className="lg:w-52 md:w-52 h-12 rounded-xl text-white bg-main text-center font-bold md:mb-3"
              style={{ cursor: "pointer" }}
              value="Proceed To Checkout"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
