export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col text-center items-center justify-center border border-secondary p-20 bg-[#fff] rounded-3xl">
                <div className="mb-16">
                    <h1 className="text-main text-5xl mb-2 font-bold">Welcome Back</h1>
                    <p className="text-secondary text-xs">Sign in to Your Account</p>
                </div>
                <div className="flex flex-col gap-4">
                    <label className="text-left pl-3 font-semibold text-main" htmlFor="email">E-Mail</label>
                    <input className="pr-40 pl-10 py-4 rounded-full border border-secondary " id="email" type="email" name="E-Mail" placeholder="Your E-mail" />
                    <label className="text-left pl-3 font-semibold text-main mt-3" htmlFor="password">Password</label>
                    <input className="pr-40 pl-10 py-4 rounded-full border border-secondary " id="password" type="password" name="Password" placeholder="Your Password" />
                    <div>
                        <button className="main-btn mt-3" type="submit">Login</button>
                    </div>
                    <div>
                        <p className="text-secondary mt-3">Forgot Password?</p>
                        <p className="text-secondary mt-3">Do not Have an Account <a className="text-main pl-2 font-bold underline" href="#">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div >
    )
}
