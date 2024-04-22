import "./Features.css";
import f1 from "../../../assets/img/f1.png";
import f2 from "../../../assets/img/f2.png";
import f3 from "../../../assets/img/f3.png";
import f4 from "../../../assets/img/f4.png";
import f5 from "../../../assets/img/f5.png";
import f6 from "../../../assets/img/f6.png";

const Features = () => {
  return (
    <div className="nav flex item-center justify-between flex-wrap py-px">
      <div className="box rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-300 duration-300 ">
        <img src={`${f1}`} alt="" />
        <h6 className="border-2 bg-cyan-500 rounded-full w-15 text-center mt-5">
          Online Order
        </h6>
      </div>
      <div className="box rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-300 duration-300">
        <img src={`${f2}`} alt="" />
        <h6 className="border-2 bg-red-500 rounded-full w-15 text-center mt-5">
          Save Time
        </h6>
      </div>
      <div className="box rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-300 duration-300">
        <img src={`${f3}`} alt="" />
        <h6 className="border-2 bg-green-500 rounded-full w-15 text-center mt-5">
          Save Money
        </h6>
      </div>
      <div className="box rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-300">
        <img src={`${f4}`} alt="" />
        <h6 className="border-2 bg-blue-500 rounded-full w-15 text-center mt-5">
          Promotions
        </h6>
      </div>
      <div className="box rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-300 duration-300">
        <img src={`${f5}`} alt="" />
        <h6 className="border-2 bg-purple-500 rounded-full w-15 text-center mt-5">
          Happy Sell
        </h6>
      </div>
      <div className="box rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-300 duration-300">
        <img src={`${f6}`} alt="" />
        <h6 className="border-2 bg-orange-500 rounded-full w-15 text-center mt-5">
          Customer Service
        </h6>
      </div>
    </div>
  );
};

export default Features;
