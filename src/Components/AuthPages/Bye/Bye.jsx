import { Link } from "react-router-dom"

const Bye = () => {
    return (
        <div className='h-screen flex justify-center items-center flex-col'>
            <div className="text-red-600 text-6xl mb-10">Visit Us Again!</div>
            <div>
                <Link className="main-btn" to={"/sign-in"}>
                    Login again
                </Link>
            </div>
        </div>
    )
}

export default Bye