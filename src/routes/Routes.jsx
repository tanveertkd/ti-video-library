import { Routes, Route } from "react-router-dom";

// Pages
import { Home } from "../pages/Home/Home";


//TEMP CHECK
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