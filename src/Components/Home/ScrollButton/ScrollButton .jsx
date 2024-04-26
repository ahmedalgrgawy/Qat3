import { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 120) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <FaArrowCircleUp className='fixed w-full left-[700px] bottom-[35px] h-12 text-[48px] z-10 cursor-pointer text-main-darker' onClick={scrollToTop}
            style={{ display: visible ? 'inline' : 'none' }} />
    );
}
export default ScrollButton