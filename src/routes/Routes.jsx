import { Routes, Route } from "react-router-dom";

// From pages
import { Home } from "../pages/Home/Home";

// From Components
import { SignIn } from "../components/Authentication/Signin";
import { SignUp } from "../components/Authentication/Signup";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { LikedVideos } from "../pages/LikedVideos/LikedVideos";

const NavigationRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            {/* Protected Routes */}
            <Route path="/" element={<ProtectedRoutes />}>
                <Route path="/liked" element={<LikedVideos />}/>
            </Route>
        </Routes>
    );
};

export { NavigationRoutes }