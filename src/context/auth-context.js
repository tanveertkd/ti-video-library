import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInService, signOutService, signUpService } from '../services';

import toast from 'react-hot-toast';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const getInitalAuthState = () => (localStorage.getItem('TI_VID_AUTH_TOKEN') ? true : false);

    //Handler for signing in
    const signInHandler = async (event, userInput) => {
        event.preventDefault();

        const { email, password } = userInput;
        const {
            data: { encodedToken },
        } = await signInService(email, password);
        localStorage.setItem('TI_VID_AUTH_TOKEN', encodedToken);
        setAuth(() => true);
        toast.success("Successfully logged in!");
        navigate('/');
    };

    // Handler for signups
    const signUpHandler = async (event, userInput) => {
        event.preventDefault();

        const {data:{encodedToken}} = await signUpService(userInput);
        localStorage.setItem('TI_VID_AUTH_TOKEN', encodedToken);
        setAuth(() => true);
        toast.success("Successfully signed in!");
        navigate('/')
    } 

    // Handler for signouts
    const signOutHandler = () => {
        signOutService('TI_VID_AUTH_TOKEN');
        setAuth(()=>false);
        toast.success("Successfully logged out!");
    }; 

    const [auth, setAuth] = useState(getInitalAuthState);

    return (
        <AuthContext.Provider value={{ auth, setAuth, signInHandler, signUpHandler, signOutHandler }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) throw new Error('Auth context needs to be defined');
    return context;
};

export { AuthProvider, useAuth };
