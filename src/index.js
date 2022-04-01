import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';

import { BrowserRouter } from 'react-router-dom';
import { VideoProvider } from './context/video-listing-context';
import { AuthProvider, LikeProvider, HistoryProvider } from './context';
import { WatchLaterProvider } from './context/watch-later-context';

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <VideoProvider>
                    <HistoryProvider>
                        <WatchLaterProvider>
                            <LikeProvider>
                                <App />
                            </LikeProvider>
                        </WatchLaterProvider>
                    </HistoryProvider>
                </VideoProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
