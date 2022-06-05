import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context';
import { useVideoProvider } from '../../context/video-listing-context';
import { debounceUtil } from '../../utils';

import './NavBar.css';

const Navbar = () => {
    const { auth, signOutHandler } = useAuth();
    const { videoListDispatch } = useVideoProvider();
    const navigate = useNavigate();

    const [navHamburger, setNavHamburger] = useState('nav-main-right-mobile-inactive');
    const [search, setSearch] = useState('');

    const toggleHamburger = () =>
        setNavHamburger(() =>
            navHamburger === 'nav-main-right-mobile-inactive'
                ? 'nav-main-right-mobile'
                : 'nav-main-right-mobile-inactive',
        );

    const handleSearch = () => {
        videoListDispatch({
            type: 'SEARCHED_VIDEO',
            payload: search,
        });
        navigate('/');
    };

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
                                onChange={debounceUtil((e) => {
                                    videoListDispatch({
                                        type: 'SEARCHED_VIDEO',
                                        payload: e.target.value,
                                    });
                                    setSearch(e.target.value);
                                }, 400)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSearch(e);
                                    }
                                }}
                            />
                            <i
                                className="far fa-search nav-main-middle-icn"
                                onClick={handleSearch}
                            ></i>
                        </label>
                    </li>
                </ul>

                {/* Nav right */}
                <ul className="nav-main-right nav-main-ul">
                    <li className="nav-main-li">
                        <Link to="/" className="nav-main-item nav-btn-login">
                            Explore
                        </Link>
                    </li>
                    <li className="nav-main-li">
                        {!auth ? (
                            <Link to="/login" className="nav-main-item nav-btn-login">
                                Login
                            </Link>
                        ) : (
                            <div className="nav-main-item nav-btn-login" onClick={signOutHandler}>
                                Logout
                            </div>
                        )}
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
                                onChange={debounceUtil((e) => {
                                    videoListDispatch({
                                        type: 'SEARCHED_VIDEO',
                                        payload: e.target.value,
                                    });
                                    setSearch(e.target.value);
                                }, 400)}
                            />
                            <i
                                className="far fa-search nav-main-middle-icn"
                                onClick={handleSearch}
                            ></i>
                        </label>
                    </li>
                </ul>

                {/* Nav right Mobile*/}
                <ul className={`${navHamburger} nav-main-ul`}>
                    <li className="nav-main-li-res">
                        {!auth ? (
                            <Link
                                to="/login"
                                className="nav-main-item nav-btn-login"
                                onClick={toggleHamburger}
                            >
                                Login
                            </Link>
                        ) : (
                            <div
                                className="nav-main-item nav-btn-login"
                                onClick={() => {
                                    toggleHamburger();
                                    signOutHandler();
                                }}
                            >
                                Logout
                            </div>
                        )}
                    </li>
                    <li className="nav-main-li-res">
                        <Link to="/" className="nav-right-btn" onClick={toggleHamburger}>
                            Explore
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export { Navbar };
