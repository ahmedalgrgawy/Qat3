import logoImg from "../../../assets/logo3.png"
import appStore from "../../../assets/app.jpg"
import playStore from "../../../assets/play.jpg"
import payImg from "../../../assets/pay.png"
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="px-[40px] pt-[60px] pb-[20px] bg-main text-white flex justify-between flex-wrap">
      <div className="col">
        <img src={logoImg} className="logo w-[100px] rounded-full mb-8" alt="" />
        <p className="text-[14px] mb-6"><strong>Address: </strong> 25 Alex Road, Street 20, Cairo</p>
        <p className="text-[14px] mb-6"><strong>Phone: </strong> +045 3333333 || 01067748430</p>
        <p className="text-[14px] mb-6"><strong>Hours: </strong> 10:00 - 18:00, Mon - Sat</p>
        <div className="social mt-[20px]">
          <h4 className="text-[16px] pb-4 font-bold tracking-wide">Follow Us</h4>
          <div className="social-icons flex">
            <i className="text-white pr-[15px] cursor-pointer hover:text-main-darker duration-150 text-[18px]">{<BsFacebook />}</i>
            <i className="text-white pr-[15px] cursor-pointer hover:text-main-darker duration-150 text-[18px]">{<BsTwitterX />}</i>
            <i className="text-white pr-[15px] cursor-pointer hover:text-main-darker duration-150 text-[18px]">{<BsInstagram />}</i>
          </div>
        </div>
      </div>

      <div className="col">
        <h4 className="text-[16px] pb-12 font-bold tracking-wide">About</h4>
        <a className="text-[14px] text-[#eee] mb-6 hover:text-main-darker duration-150" href="#">About Us</a>
        <a className="text-[14px] text-[#eee] mb-6 hover:text-main-darker duration-150" href="#">Delivery Information</a>
        <a className="text-[14px] text-[#eee] mb-6 hover:text-main-darker duration-150" href="#">Privacy Policy</a>
        <a className="text-[14px] text-[#eee] mb-6 hover:text-main-darker duration-150" href="#">Terms & Conditions</a>
        <a className="text-[14px] text-[#eee] mb-6 hover:text-main-darker duration-150" href="#">Contact Us</a>
      </div>



      <div className="col">
        <h4 className="text-[16px] pb-12 font-bold tracking-wide">My Account</h4>
        <Link className="text-[14px] text-[#eee] mb-6 hover:text-main-darker duration-150" to={"/sign-in"} href="#">Signs In</Link>
        <Link className="text-[14px] text-[#eee] mb-6 hover:text-main-darker duration-150" to={"/cart"} href="#">View Cart</Link>
        <Link className="text-[14px] text-[#eee] mb-6 hover:text-main-darker duration-150" to={"/shop"} href="#">Shop</Link>
        <Link className="text-[14px] text-[#eee] mb-6 hover:text-main-darker duration-150" to={"/sign-in"} href="#">Help</Link>
      </div>

      <div className="col">
        <h4 className="text-[16px] pb-12 font-bold tracking-wide">install App</h4>
        <p className="mb-3">From App Store || Google Play</p>
        <div className="row">
          <img className="mt-[10px] mb-[15px] border border-main rounded-md " src={appStore} alt="" />
          <img className="mt-[10px] mb-[15px] border border-main rounded-md" src={playStore} alt="" />
        </div>
        <p>Payments Methods</p>
        <img className="mt-[10px] mb-[15px]" src={payImg} alt="" />
      </div>

      <div className="copyright w-full text-center">
        <p>2024, Qat3 Team || All Copyrights Are Reserved</p>
      </div>

    </footer>
  )
}