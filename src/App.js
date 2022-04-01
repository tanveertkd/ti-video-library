import './App.css';
import { useState } from 'react';
import { NavigationRoutes } from './routes/Routes';
import { Navbar } from './components/Navigation/NavBar';
import { Footer } from './components/Footer/Footer';

import { Sidebar } from './components/Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
    const [sidebar, setSidebar] = useState('sidebar-container');
    const [button, setButton] = useState('sidebar-bottom-up');
    const [buttonText, setButtonText] = useState('Menu');

    const toggleSideBar = () => {
        setButton(() =>
            button === 'sidebar-bottom-up' ? 'sidebar-bottom-up-active' : 'sidebar-bottom-up',
        );

        setButtonText(() => (buttonText === 'Menu' ? 'Close' : 'Menu'));

        setSidebar(() =>
            sidebar === 'sidebar-container' ? 'sidebar-active' : 'sidebar-container',
        );
    };

    const {pathname} = useLocation();

    return (
        <div className="App">
            <Toaster />
            <div className="section-one">
                <Navbar />
            </div>
            <div className="section-two">
                <div className="home-parent">
                    {/* Hides the sidebar in login and signup components */}
                    {pathname === '/login' || pathname === '/signup' ? null : (
                        <div className={sidebar}>
                            <Sidebar />
                        </div>
                    )}
                    
                    <NavigationRoutes />
                    
                    {/* Hides the sidebar button in login and signup components */}
                    {pathname === '/login' || pathname === '/signup' ? null : (
                        <button className={button} onClick={() => toggleSideBar()}>
                            <i class={buttonText === 'Menu' ? 'far fa-bars' : 'far fa-times'}></i>{' '}
                            {buttonText}
                        </button>
                    )}
                </div>
            </div>
            <div className="section-three">
                <Footer />
            </div>
        </div>
    );
}

export default App;
