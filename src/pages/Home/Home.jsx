import { useState } from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Videos } from '../VideoListing/VideoListing';

import './Home.css';

const Home = () => {
    const [sidebar, setSidebar] = useState('sidebar-container');
    const [button, setButton] = useState('sidebar-bottom-up');
    const [buttonText, setButtonText] = useState('Menu');
    
    const toggleSideBar = () => {

        setButton(() => button === 'sidebar-bottom-up' ? 'sidebar-bottom-up-active' : 'sidebar-bottom-up')

        setButtonText(() => (buttonText === 'Menu' ? 'Close' : 'Menu'));

        setSidebar(() =>
            sidebar === 'sidebar-container' ? 'sidebar-active' : 'sidebar-container',
        );
    };

    return (
        <div className="home-parent">
            <div className={sidebar}>
                <Sidebar />
            </div>
            <Videos />
            <button className={button} onClick={() => toggleSideBar()}>
                <i class={buttonText === 'Menu' ? 'far fa-bars' : 'far fa-times'}></i> {buttonText}
            </button>
        </div>
    );
};

export { Home };
