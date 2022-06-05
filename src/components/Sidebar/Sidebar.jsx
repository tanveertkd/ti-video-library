import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const active = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    textUnderlineOffset: '0.4rem',
};

const Sidebar = () => {
    return (
        <div className="nav-sidebar-container">
            <ul className="nav-sidebar-ul">
                <li className="sidebar-item">
                    <label for="sidebar-item-link">
                        <NavLink
                            to="/"
                            className="sidebar-item-link"
                            style={({ isActive }) => (isActive ? active : undefined)}
                        >
                            <i className="far fa-home-lg-alt sidebar-icn"></i>
                            Home
                        </NavLink>
                    </label>
                </li>

                {/* <li className="sidebar-item">
                    <label for="sidebar-item-link">
                        <Link to="/" className="sidebar-item-link">
                            <i class="far fa-compass sidebar-icn"></i>
                            Explore
                        </Link>
                    </label>
                </li> */}

                <li className="sidebar-item">
                    <label for="sidebar-item-link">
                        <NavLink
                            to="/playlists"
                            className="sidebar-item-link"
                            style={({ isActive }) => (isActive ? active : undefined)}
                        >
                            <i class="far fa-list sidebar-icn"></i>
                            Playlists
                        </NavLink>
                    </label>
                </li>

                <li className="sidebar-item">
                    <label for="sidebar-item-link">
                        <NavLink
                            to="/liked"
                            className="sidebar-item-link"
                            style={({ isActive }) => (isActive ? active : undefined)}
                        >
                            <i class="far fa-thumbs-up sidebar-icn"></i>
                            Liked Videos
                        </NavLink>
                    </label>
                </li>

                <li className="sidebar-item">
                    <label for="sidebar-item-link">
                        <NavLink
                            to="./watchlater"
                            className="sidebar-item-link"
                            style={({ isActive }) => (isActive ? active : undefined)}
                        >
                            <i class="far fa-clock sidebar-icn"></i>
                            Watch Later
                        </NavLink>
                    </label>
                </li>

                <li className="sidebar-item">
                    <label for="sidebar-item-link">
                        <NavLink
                            to="./history"
                            className="sidebar-item-link"
                            style={({ isActive }) => (isActive ? active : undefined)}
                        >
                            <i class="far fa-history sidebar-icn"></i>
                            History
                        </NavLink>
                    </label>
                </li>
            </ul>

            {/* <!-- Nav Sidebar Ends --> */}
        </div>
    );
};

export { Sidebar };
