import { NavLink } from 'react-router-dom'
import introPageImg from '../../../assets/imgs/intro.png'


function IntroPage() {
    return (
        <div className='h-screen grid md:grid-cols-2 grid-cols-1 gap-10'>
            <div data-aos="zoom-in" data-aos-duration='2000' data-aos-easing="ease-in-out" className="flex justify-start items-center flex-col mx-4 ">
                <div className='mt-36 text-center'>
                    <h1 className='text-5xl text-main mb-5 font-bold'>Welcome To Qat3</h1>
                    <p className='text-sm mb-14 text-secondary font-semibold'>Local Products E-Commerce Platform</p>
                    <img className='w-[450px]' src={introPageImg} alt="Intro" />
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration='2000' data-aos-easing="ease-in-out" className="flex justify-start items-center flex-col ">
                <div className='mt-36 text-center border-2 border-secondary bg-white md:p-16 p-10 rounded-3xl mb-14 md:mb-0 mx-4 '>
                    <h1 className='text-3xl text-main-darker mb-3 font-bold'>Start Shopping Now!</h1>
                    <p className='text-sm mb-20 text-secondary font-semibold'>Shop Thousand of local products</p>
                    <div className="flex flex-col gap-10">
                        <NavLink to={"/sign-up"}>
                            <button className="main-btn px-12 lg:px-36 ">I Am New Here</button>
                        </NavLink>
                        <NavLink to={"/sign-in"}>
                            <button className="second-btn px-12 lg:px-36">Log in</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroPage