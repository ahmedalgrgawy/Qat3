import aboutImg from '../../assets/landing-image.png'

export default function About() {
    return (
        <div className='px-40 py-10 flex items-center'>
            <img className='w-1/2 h-auto' src={aboutImg} alt="" />
            <div className='pl-10'>
                <h2 className='text-[46px] leading-[54px] mb-5 font-medium'>Who We Are?</h2>

                <p className='leading-7 mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Minima, provident. Aliquid commodi repudiandae recusandae
                    quam at voluptatum nobis distinctio. Ipsa qui doloribus
                    officiis natus aliquam, reiciendis nulla totam sapiente
                    aperiam molestias, sed facere, iure perspiciatis sunt autem
                    earum neque possimus. Incidunt nostrum laboriosam saepe
                    doloremque unde et quisquam minus maxime officiis pariatur
                    quo alias nemo iste corporis, autem sint, quod facilis,
                    dolorum rerum! Possimus quidem, accusantium quibusdam itaque
                    laudantium a sunt dicta, soluta tenetur at eius,
                    reprehenderit neque dolorum id.
                </p>

                <button className='second-btn px-8 border-secondary'>Contact Us</button>
            </div>
        </div>
    )
}
