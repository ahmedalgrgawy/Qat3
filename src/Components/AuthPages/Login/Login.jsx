import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => (
    <div className="h-screen flex justify-center items-center">
        <SignIn path="/sign-in" />
    </div>
);

export default SignInPage;