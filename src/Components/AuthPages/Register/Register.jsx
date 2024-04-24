import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {


  return (
    <div data-aos='flip-right' data-delay='500' data-aos-offset='100' className="h-screen  flex justify-center items-center">
      <SignUp path="/sign-up" />
    </div>
  )
}

export default SignUpPage;