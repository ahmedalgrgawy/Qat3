export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-bg-color ">
            <div className="flex flex-col text-center items-center justify-center border border-secondary p-20 bg-[#fff]">
                <div className="mb-16">
                    <h1 className="text-main text-5xl mb-2 font-bold">Welcome Back</h1>
                    <p className="text-secondary text-xs">Sign in to Your Account</p>
                </div>
                <div className="flex flex-col gap-4">
                    <input className="" type="email" name="E-Mail" placeholder="Your E-mail" />
                    <input className="" type="password" name="Password" placeholder="Your Password" />
                    <div>
                        <button type="submit">Login</button>
                    </div>
                    <div>
                        <p>Forgot Password</p>
                        <p>Do not Have an Account <a href="#">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div >
    )
}
