import { Link } from 'react-router-dom'
import introPageImg from '../../../assets/landing-image.png'


function IntroPage() {
    return (
        <div className='h-screen grid grid-cols-2 gap-10 grid-rows-1'>
            <div className="flex justify-start items-center flex-col">
                <div className='mt-36 text-center'>
                    <h1 className='text-5xl text-main mb-5 font-bold'>Welcome To Qat3</h1>
                    <p className='text-sm mb-14 text-secondary font-semibold'>Local Products E-Commerce Platform</p>
                    <img className='w-[450px]' src={introPageImg} alt="Intro" />
                </div>
            </div>
            <div className="flex justify-start items-center flex-col">
                <div className='mt-36 text-center border-2 border-secondary bg-white p-16 rounded-3xl'>
                    <h1 className='text-3xl text-main-darker mb-3 font-bold'>Start Shopping Now!</h1>
                    <p className='text-sm mb-20 text-secondary font-semibold'>Shop Thousand of local products</p>
                    <div className="flex flex-col gap-10">
                        <Link to={"/register"}>
                            <button className="main-btn px-36 ">I Am New Here</button>
                        </Link>
                        <Link to={"/login"}>
                            <button className="second-btn px-36">Log in</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroPage