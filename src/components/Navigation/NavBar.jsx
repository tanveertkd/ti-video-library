import { useState } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const Navbar = () => {
    const [navHamburger, setNavHamburger] = useState('nav-main-right-mobile-inactive');

    const toggleHamburger = () =>
        setNavHamburger(() =>
            navHamburger === 'nav-main-right-mobile-inactive'
                ? 'nav-main-right-mobile'
                : 'nav-main-right-mobile-inactive',
        );

    return (
        <div>
            <nav className="nav-main">
                {/*  Nav left */}
                <ul className="nav-main-left nav-main-ul">
                    <li className="nav-main-li nav-section-one">
                        <Link to="/" className="nav-main-item nav-item-home">
                            TI
                        </Link>
                        <i
                            className="far fa-bars hamburger-menu"
                            onClick={() => toggleHamburger()}
                        ></i>
                    </li>
                </ul>

                {/* {Nav middle} */}
                <ul className="nav-main-middle nav-main-ul">
                    <li className="nav-main-li">
                        <label for="nav-main-search" className="nav-item-search">
                            <input
                                className="nav-item-search-input"
                                type="text"
                                placeholder="Looking for something?"
                                name="nav-search"
                            />
                            <i className="far fa-search nav-main-middle-icn"></i>
                        </label>
                    </li>
                </ul>

                {/* Nav right */}
                <ul className="nav-main-right nav-main-ul">
                    <li className="nav-main-li">
                        <Link to="/products" className="nav-main-item nav-btn-login">
                            Explore
                        </Link>
                    </li>
                    <li className="nav-main-li">
                        <Link to="/login" className="nav-main-item nav-btn-login">
                            Login
                        </Link>
                    </li>
                </ul>

                {/* {Nav middle mobile} */}
                <ul className="nav-main-ul nav-main-mobile">
                    <li className="nav-main-li">
                        <label for="nav-main-search" className="nav-item-search">
                            <input
                                className="nav-item-search-input"
                                type="text"
                                placeholder="Looking for something?"
                                name="nav-search"
                            />
                            <i className="far fa-search nav-main-middle-icn"></i>
                        </label>
                    </li>
                </ul>

                {/* Nav right Mobile*/}
                <ul className={`${navHamburger} nav-main-ul`}>
                    <li className="nav-main-li-res">
                        <Link to="/login" className="nav-right-btn">
                            Login
                        </Link>
                    </li>
                    <li className="nav-main-li-res">
                        <Link to="/products" className="nav-right-btn">
                            Explore
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export { Navbar };
