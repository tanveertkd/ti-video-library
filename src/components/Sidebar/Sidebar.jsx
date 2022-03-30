import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="nav-sidebar-container">
            <ul className="nav-sidebar-ul">
                <li className="sidebar-item">
                    <i className="far fa-home-lg-alt sidebar-icn"></i>
                    Home
                </li>

                <li className="sidebar-item">
                    <i class="far fa-compass sidebar-icn"></i>
                    Explore
                </li>

                <li className="sidebar-item">
                    <i class="far fa-list sidebar-icn"></i>
                    Playlists
                </li>

                <li className="sidebar-item">
                    <i class="far fa-thumbs-up sidebar-icn"></i>
                    Liked Videos
                </li>

                <li className="sidebar-item">
                    <i class="far fa-clock sidebar-icn"></i>
                    Watch Later
                </li>

                <li className="sidebar-item">
                    <i class="far fa-history sidebar-icn"></i>
                    History
                </li>
            </ul>

            {/* <!-- Nav Sidebar Ends --> */}
        </div>
    );
};

export { Sidebar };
