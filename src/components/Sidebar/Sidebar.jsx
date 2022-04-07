import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="nav-sidebar-container">
            <ul className="nav-sidebar-ul">
                <li className="sidebar-item">
                    <label for="sidebar-item-link">
                        <Link to="/" className="sidebar-item-link">
                            <i className="far fa-home-lg-alt sidebar-icn"></i>
                            Home
                        </Link>
                    </label>
                </li>

                <li className="sidebar-item">
                    <label for="sidebar-item-link">
                        <Link to="/" className="sidebar-item-link">
                            <i class="far fa-compass sidebar-icn"></i>
                            Explore
                        </Link>
                    </label>
                </li>

                <li className="sidebar-item">
                    <label for="sidebar-item-link">
                        <Link to="/playlists" className="sidebar-item-link">
                            <i class="far fa-list sidebar-icn"></i>
                            Playlists
                        </Link>
                    </label>
                </li>

                <li className="sidebar-item">
                    <label for="sidebar-item-link">
                        <Link to="/liked" className="sidebar-item-link">
                            <i class="far fa-thumbs-up sidebar-icn"></i>
                            Liked Videos
                        </Link>
                    </label>
                </li>

                <li className="sidebar-item">
                    <label for="sidebar-item-link">
                        <Link to="./watchlater" className="sidebar-item-link">
                            <i class="far fa-clock sidebar-icn"></i>
                            Watch Later
                        </Link>
                    </label>
                </li>

                <li className="sidebar-item">
                    <label for="sidebar-item-link">
                        <Link to="./history" className="sidebar-item-link">
                            <i class="far fa-history sidebar-icn"></i>
                            History
                        </Link>
                    </label>
                </li>
            </ul>

            {/* <!-- Nav Sidebar Ends --> */}
        </div>
    );
};

export { Sidebar };
