import "./Features.css";
import f1 from "../../../assets/img/f1.png";
import f2 from "../../../assets/img/f2.png";
import f3 from "../../../assets/img/f3.png";
import f4 from "../../../assets/img/f4.png";
import f5 from "../../../assets/img/f5.png";
import f6 from "../../../assets/img/f6.png";

const Features = () => {
  return (
    <div>
      <h2 className="main-title mb-10">Our Features</h2>
      <div className="container nav flex items-center md:justify-around justify-center flex-col md:flex-row flex-wrap p-30 md:p-40 bg-white">
        <div className="box lg:w-[30%] md:w-[45%] md:mx-2 w-[250px] rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-200 duration-300 flex justify-center flex-col items-center">
          <img src={`${f1}`} alt="" />
          <h6 className=" bg-cyan-500 rounded-full w-15 text-center mt-5 p-[8px]">
            Online Order
          </h6>
        </div>
        <div className="box lg:w-[30%] md:w-[45%] md:mx-2 w-[250px] rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-200 duration-300 flex justify-center flex-col items-center">
          <img src={`${f2}`} alt="" />
          <h6 className=" bg-red-500 rounded-full w-15 text-center mt-5 p-[8px]">
            Save Time
          </h6>
        </div>
        <div className="box lg:w-[30%] md:w-[45%] md:mx-2 w-[250px] rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-200 duration-300 flex justify-center flex-col items-center">
          <img src={`${f3}`} alt="" />
          <h6 className=" bg-green-500 rounded-full w-15 text-center mt-5 p-[8px]">
            Save Money
          </h6>
        </div>
        <div className="box lg:w-[30%] md:w-[45%] md:mx-2 w-[250px] rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-200  duration-300 flex justify-center flex-col items-center">
          <img src={`${f4}`} alt="" />
          <h6 className=" bg-blue-500 rounded-full w-15 text-center mt-5 p-[8px]">
            Promotions
          </h6>
        </div>
        <div className="box lg:w-[30%] md:w-[45%] md:mx-2 w-[250px] rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-200 duration-300 flex justify-center flex-col items-center">
          <img src={`${f5}`} alt="" />
          <h6 className=" bg-purple-500 rounded-full w-15 text-center mt-5 p-[8px]">
            Happy Sell
          </h6>
        </div>
        <div className="box lg:w-[30%] md:w-[45%] md:mx-2 w-[250px] rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-200 duration-300 flex justify-center flex-col items-center">
          <img src={`${f6}`} alt="" />
          <h6 className=" bg-orange-500 rounded-full w-15 text-center mt-5 p-[8px]">
            Customer Service
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Features;
