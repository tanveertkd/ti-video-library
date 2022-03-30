import { Routes, Route } from "react-router-dom";

// Pages
import { Home } from "../pages/Home/Home";

const NavigationRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export { NavigationRoutes }