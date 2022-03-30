import { Routes, Route } from "react-router-dom";

// From pages
import { Home } from "../pages/Home/Home";

// From Components
import { SignIn } from "../components/Authentication/Signin";
import { SignUp } from "../components/Authentication/Signup";

const NavigationRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
        </Routes>
    );
};

export { NavigationRoutes }