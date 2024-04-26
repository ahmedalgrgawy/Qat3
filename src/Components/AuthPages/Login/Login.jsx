import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {


    return (
        <div data-aos='flip-left' data-delay='500' data-aos-offset='100' className="h-screen flex justify-center items-center">
            <SignIn path="/sign-in" />
        </div>
    )
}

export default SignInPage;