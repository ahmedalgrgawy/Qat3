export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col text-center items-center justify-center border border-secondary py-10 px-20 bg-[#fff] rounded-3xl">
        <div className="mb-10">
          <h1 className="text-main text-5xl mb-3 font-bold">Sign Up</h1>
          <p className="text-secondary text-xs font-semibold">Create an Account to shop your favorite products</p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-left pl-3 font-semibold text-main" htmlFor="name">Name</label>
          <input className="pr-40 pl-10 py-4 rounded-full border border-secondary " id="name" type="email" name="Name" placeholder="Your Name" />

          <label className="text-left pl-3 font-semibold text-main" htmlFor="email">E-Mail</label>
          <input className="pr-40 pl-10 py-4 rounded-full border border-secondary " id="email" type="email" name="E-Mail" placeholder="Your E-mail" />

          <label className="text-left pl-3 font-semibold text-main" htmlFor="phone">Phone Number</label>
          <input className="pr-40 pl-10 py-4 rounded-full border border-secondary " id="phone" type="text" name="Phone" placeholder="Your Phone" />

          <label className="text-left pl-3 font-semibold text-main mt-3" htmlFor="password">Password</label>
          <input className="pr-40 pl-10 py-4 rounded-full border border-secondary " id="password" type="password" name="Password" placeholder="Your Password" />

          <div>
            <button className="main-btn mt-3" type="submit">Sign Up</button>
          </div>
          <div>
            <p className="text-secondary mt-3">Already Have an account? <a className="text-main pl-2 font-bold underline" href="#">Login</a></p>
          </div>
        </div>
      </div>
    </div >
  );
}
