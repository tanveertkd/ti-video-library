import { Routes, Route } from "react-router-dom";

// From pages
import { Home } from "../pages/Home/Home";

// From Components
import { SignIn } from "../components/Authentication/Signin";
import { SignUp } from "../components/Authentication/Signup";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { LikedVideos } from "../pages/LikedVideos/LikedVideos";
import { Watchlater } from "../pages/WatchLater/WatchLater";
import { WatchVideo } from "../pages/WatchVideo/WatchVideo";
import { History } from "../pages/History/History";
import { Playlist } from "../pages/Playlists/Playlist";
import { SinglePlaylist } from "../pages/Playlists/SinglePlaylist/SinglePlaylist";

const NavigationRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="watch/:videoId" element={<WatchVideo />} />
            {/* Protected Routes */}
            <Route path="/" element={<ProtectedRoutes />}>
                <Route path="/liked" element={<LikedVideos />}/>
                <Route path="/watchlater" element={<Watchlater />}/>
                <Route path="/history" element={<History />} />
                <Route path="/playlists" element={<Playlist />} />
                <Route path="playlists/:playlistId" element={<SinglePlaylist />} />
            </Route>
        </Routes>
    );
};

export { NavigationRoutes }