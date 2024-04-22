import "./Newsletters.css"

export const Newsletters = () => {
    return (
        <div>
            <div className="mt-[40px] mx-0 py-[60px] px-[80px] flex justify-between flex-wrap items-center bg-[#222]" id="newsletter">
                <div>
                    <h4 className="text-[22px] font-[700] text-white">Sign Up For Newsletters</h4>
                    <p className="text-[14px] font-[600] text-secondary">Get E-mail Updates About Our<span className="text-main"> Latest Shop & Special
                        Offers</span></p>
                </div>
                <div className="flex w-[40%]">
                    <input className="h-[50px] py-0 px-[20px] text-[14px] w-full outline-none"
                        type="text" placeholder="Your Email Address" />
                    <button className="bg-main text-white whitespace-nowrap px-4">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletters;
