import pic1 from "../../../assets/landing-image.png"


export default function About() {
    return (
        <div>
            <h2 className="main-title my-28">
                About Us
            </h2>
            <div className="container grid grid-cols-2 gap-4 flex items-center mb-20">
                <div className="">
                <img src={pic1} alt="" />

                </div>
                <div className=" p-10">
                    <h2 className="text-5xl font-bold mb-5">Who We Are ?</h2>

                    <p className="text-gray-600 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, provident. Aliquid commodi repudiandae recusandae quam at voluptatum nobis distinctio. Ipsa qui doloribus officiis natus aliquam, reiciendis nulla totam sapiente aperiam molestias, sed facere, iure perspiciatis sunt autem earum neque possimus. Incidunt nostrum laboriosam saepe doloremque unde et quisquam minus maxime officiis pariatur quo alias nemo iste corporis, autem sint, quod facilis, dolorum rerum! Possimus quidem, accusantium quibusdam itaque laudantium a sunt dicta, soluta tenetur at eius, reprehenderit neque dolorum id.</p>
                
                <p className="text-gray-400 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae id dicta officia et magni. Consequuntur, earum sint. Reiciendis, possimus quis.</p>
                
                <marquee className="bg-gray-400" behavior="smoath" direction="left">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae id dicta officia et magni. Consequuntur, earum sint. Reiciendis, possimus quis. "</marquee>
                </div>

            </div>

                <div className="container grid grid-cols-1 gap-4 flex items-center my-10 text-center" >
<h1 className="text-6xl font-bold">Download Our <a className="cursor-pointer underline decoration-5 text-sky-800">App</a></h1>

    <img src={pic1} alt="" className="w-3/5 m-auto" />

                </div>
        </div>
    )
}
