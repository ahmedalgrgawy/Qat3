import { useState } from 'react';
import './Navbar.css';
import logoNav from '../../../assets/logo3.png';
import { FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { PiSignOutBold } from "react-icons/pi";
import { useAuth, UserButton } from '@clerk/clerk-react';

const Navbar = () => {

    const { signOut } = useAuth();



    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleClose = () => {
        setMenuOpen(false);
    };

    const handleSearchToggle = () => {
        setSearchOpen(!isSearchOpen);
    };

    const handleSearchClose = () => {
        setSearchOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    return (
        <div className="header fixed top-0 left-0 w-full bg-white" id="header">
            <nav className="nav-container h-14 flex justify-between items-center px-[20px] py-[30px]">
                <NavLink to={"/"} onClick={scrollToTop} >
                    <img src={logoNav} className="nav-logo h-14" alt="Logo" />
                </NavLink>

                <div
                    className={`nav-menu ${isMenuOpen ? 'show-menu top-0 ' : ''}`}
                    id="nav-menu"
                >
                    <ul className="nav-list flex gap-x-6 text-center">
                        <li className="nav-item ">
                            <NavLink onClick={scrollToTop} to={"/"} className={({ isActive }) => isActive ? "active nav-link text-main" : "nav-link text-main"}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={scrollToTop} to={'/about'} className={({ isActive }) => isActive ? "active nav-link text-main" : "nav-link text-main"}>
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={scrollToTop} to={'/shop'} className={({ isActive }) => isActive ? "active nav-link text-main" : "nav-link text-main"}>
                                Shop
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={scrollToTop} to={'/reviews'} className={({ isActive }) => isActive ? "active nav-link text-main" : "nav-link text-main"}>
                                Reviews
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={scrollToTop} to={'/contact'} className={({ isActive }) => isActive ? "active nav-link text-main" : "nav-link text-main"}>
                                Contact
                            </NavLink>
                        </li>

                    </ul>
                    <div
                        className="nav-close absolute top-5 right-6 "
                        id="nav-close"
                        onClick={handleClose}
                    >
                        <AiOutlineClose />
                    </div>
                </div>
                <div className="nav-action flex justify-center items-center gap-x-6 ">
                    <FaSearch
                        className="nav-search"
                        id="search-btn"
                        onClick={handleSearchToggle}
                    />
                    <NavLink onClick={scrollToTop} to={"/cart"}>
                        <FaShoppingCart className="cart" id="cart" />
                    </NavLink>

                    <NavLink className="user" id="user">
                        <UserButton afterSignOutUrl='https://qat3.vercel.app/bye' />
                    </NavLink>

                    <NavLink to={"/bye"} onClick={() => signOut()} className="sign-out hover:text-red-800 text-red-600" id="sign-out">
                        {<PiSignOutBold />}
                    </NavLink>

                    <div id="nav-toggle" onClick={handleToggle}>
                        <FaBars className="nav-toggle" />
                    </div>
                </div>
            </nav>
            <div
                className={`search fixed left-0 top-0 w-full h-full ${isSearchOpen ? 'show-search' : ''
                    }`}
                id="search"
            >
                <form
                    action=""
                    className="search-form flex items-center gap-x-2 p-4 rounded-lg"
                >
                    <FaSearch className="search-icon text-sm text-main" />
                    <input
                        type="search"
                        placeholder="What are you looking for?"
                        className="search-input w-full p-4"
                    />
                </form>
                <AiOutlineClose
                    className="search-close absolute top-8 right-8 text-2xl"
                    id="search-close"
                    onClick={handleSearchClose}
                />
            </div>
        </div>
    );
};

export default Navbar;