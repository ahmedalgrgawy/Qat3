import { useState } from 'react';
import './Navbar.css';
import logoNav from '../../../assets/logo3.png';
import { FaSearch, FaShoppingCart, FaUserCircle, FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
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

    return (
        <div className="header fixed top-0 left-0 w-full bg-white" id="header">
            <nav className="nav-container h-14 flex justify-between items-center">
                <a href="#">
                    <img src={logoNav} className="nav-logo h-14" alt="Logo" />
                </a>

                <div
                    className={`nav-menu ${isMenuOpen ? 'show-menu top-0 ' : ''}`}
                    id="nav-menu"
                >
                    <ul className="nav-list flex gap-x-6 text-center">
                        <li className="nav-item ">
                            <Link to={"/"} className="nav-link text-main">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/about'} className="nav-link text-main">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/shop'} className="nav-link text-main">
                                Shop
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/reviews'} className="nav-link text-main">
                                Reviews
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/contact'} className="nav-link text-main">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div
                        className="nav-close absolute top-5 right-6  "
                        id="nav-close"
                        onClick={handleClose}
                    >
                        <AiOutlineClose />
                    </div>
                </div>
                <div className="nav-action flex align-center gap-x-4 ">
                    <FaSearch
                        className="nav-search"
                        id="search-btn"
                        onClick={handleSearchToggle}
                    />
                    <Link to={"/cart"}>
                        <FaShoppingCart className="cart" id="cart" />
                    </Link>
                    <FaUserCircle className="user" id="user" />
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
                        type="searc "
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
