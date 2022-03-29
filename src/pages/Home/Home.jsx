import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Videos } from "../VideoListing/VideoListing";

import "./Home.css"

const Home = () => {
    return(
        <div className="home-parent">
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <Videos />
        </div>
    );
};

export { Home }