import { NavLink } from "react-router-dom"
import { FaRegSadCry } from "react-icons/fa";

const Bye = () => {
    return (
        <div className='h-screen flex justify-center items-center flex-col'>
            <div className="text-main text-7xl mb-10">{<FaRegSadCry />}</div>
            <div className="text-main-darker text-3xl md:text-6xl mb-10">Come Back Again</div>
            <div className="flex flex-col justify-center gap-10">
                <NavLink className="main-btn" to={"/sign-in"}>
                    Login Again
                </NavLink>
                <NavLink className="second-btn" to={"/"}>
                    Get Back
                </NavLink>
            </div>
        </div>
    )
}

export default Bye