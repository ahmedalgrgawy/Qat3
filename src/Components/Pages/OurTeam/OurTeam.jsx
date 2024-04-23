import { FaCodeCommit } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { PiIntersectThreeBold } from "react-icons/pi";

import ahmed from "../../../assets/Team/Ahmed.jfif"
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function OurTeam() {
    return (
        <div className="container">
            <h2 className="main-title mb-14">Our Team</h2>
            <div className="team-members flex justify-between items-center flex-wrap">
                <div className="member w-[30%] border-2 rounded-3xl border-main-darker p-[20px] flex flex-col justify-center items-center bg-[#eee]">
                    <div className="py-3 px-6 text-center border-b-2 border-opacity-60 border-main-darker flex flex-col justify-center items-center">
                        <img className="w-[100px] border border-main rounded-[50%] my-[10px]" src={ahmed} alt="" />
                        <h2 className="text-[20px] font-bold">Ahmed Algrgawy</h2 >
                        <h3 className="text-[15px] font-[400]">Front-End Web </h3>
                    </div>

                    <div className="py-3 px-6 border-b-2 border-opacity-60  border-main-darker flex flex-col justify-center items-start">
                        <div className="row flex">
                            <i className="pr-4 text-main-darker">{<PiIntersectThreeBold />}</i>
                            <span className="text-[18px]">Cs</span>
                        </div>
                        <div className="row flex">
                            <i className="pr-4 text-main-darker">{<FaCode />}</i>
                            <span className="text-[18px]">JavaScript</span>
                        </div>
                        <div className="row flex">
                            <i className="pr-4 text-main-darker">{<FaCodeCommit />}</i>
                            <span className="text-[18px]">React</span>
                        </div>
                    </div>

                    <div className="py-3 px-6 flex flex-col justify-center items-center">
                        <a href="#"><i>{BsGithub}</i>Github</a>
                        <a href="#"><i>{BsLinkedin}</i>Linkedin</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
