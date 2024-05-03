import { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { scrollToTop } from '../../../features/main/mainSlice';

const ScrollButton = () => {

    const dispatch = useDispatch()

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

    window.addEventListener('scroll', toggleVisible);

    return (
        <FaArrowCircleUp className='fixed w-full left-[700px] bottom-[35px] h-12 text-[48px] z-10 cursor-pointer text-main-darker' onClick={() => dispatch(scrollToTop())}
            style={{ display: visible ? 'inline' : 'none' }} />
    );
}
export default ScrollButton