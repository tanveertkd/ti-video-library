import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/"

const ProtectedRoutes = () => {
    const { auth } = useAuth();
    return auth ? <Outlet /> : <Navigate to="login" />
}

export {ProtectedRoutes}