import { IoPersonSharp } from "react-icons/io5";
import { BiBuilding } from 'react-icons/bi'
import { FaCity } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import "./States.css"

const States = () => {
    return (
        <div className="stats relative bg-cover min-h-[300px] py-10">
            <h2 data-aos='fade-down' data-aos-delay='400' className='font-bold text-[40px] w-fit mx-auto mt-0 mb-[50px] relative'>
                Our States
            </h2>
            <div data-aos='fade-up' data-aos-delay='400' className='stats-container container relative grid gap-10 text-center'>
                <div className="box flex flex-col justify-center items-center bg-white py-[30px] px-[15px] text-center relative opacity-80 duration-300">
                    <i className="text-5xl">{<IoPersonSharp />}</i>
                    <span className="block text-[50px] font-bold my-3">10,000</span>
                    <span className="text-main-darker italic font-bold text-[20px]">Clients</span>
                </div>
                <div className="box flex flex-col justify-center items-center bg-white py-[30px] px-[15px] text-center relative opacity-80 duration-300">
                    <i className="text-5xl">{<BiBuilding />}</i>
                    <span className="block text-[50px] font-bold my-3">50</span>
                    <span className="text-main-darker italic font-bold text-[20px]">Branch</span>
                </div>
                <div className="box flex flex-col justify-center items-center bg-white py-[30px] px-[15px] text-center relative opacity-80 duration-300">
                    <i className="text-5xl">{<FaCity />}</i>
                    <span className="block text-[50px] font-bold my-3">25</span>
                    <span className="text-main-darker italic font-bold text-[20px]">Town</span>
                </div>
                <div className="box flex flex-col justify-center items-center bg-white py-[30px] px-[15px] text-center relative opacity-80 duration-300">
                    <i className="text-5xl">{<MdOutlineAttachMoney />}</i>
                    <span className="block text-[50px] font-bold my-3">100,000</span>
                    <span className="text-main-darker italic font-bold text-[20px]">Sales</span>
                </div>
            </div>
        </div>
    )
}

export default States