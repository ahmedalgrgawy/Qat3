import { UserProfile } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

const UserProfilePage = () => {

    const { user } = useUser();

    return (
        <div>
            <h2 data-aos="fade-up" className='font-bold text-[40px] w-fit mx-auto mt-24 mb-[50px] relative'>Hello, <span className="text-main">{user.firstName}</span></h2>
            <div data-aos="fade-up" className=" mt-10 flex justify-center items-center">
                <UserProfile path="/user-profile" />
            </div>
        </div>
    )
};

export default UserProfilePage;