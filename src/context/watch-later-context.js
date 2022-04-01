import { createContext, useContext, useEffect, useReducer } from 'react';
import { getWatchLaterVideos, addToWatchLater, removeFromWatchLater } from '../services';
import { watchLaterReducer } from '../reducers';
import { useAuth } from './auth-context';

import toast from 'react-hot-toast';

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
    const AUTH_TOKEN = localStorage.getItem('TI_VID_AUTH_TOKEN');
    const { auth } = useAuth();

    const addToWatchLaterHandler = async (video) => {
        const response = await addToWatchLater(video, AUTH_TOKEN);
        if (response.status === 201) {
            watchLaterDispatch({ type: 'ADD_TO_WATCH_LATER', payload: response.data.watchlater });
            toast.success("Added to watch later!");
        } else if (response.status === 409) {
            watchLaterDispatch({ type: 'ALREADY_EXISTS' });
            toast.error("Already added to watch later!");
        }
    };

    const removeFromWatchLaterHandler = async (id) => {
        const response = await removeFromWatchLater(id, AUTH_TOKEN);
        if (response.status === 200){
            watchLaterDispatch({ type: 'LOAD_AFTER_DELETE', payload: response.data.watchlater });
            toast.success("Removed From watch later!");
        }
    };

    const [watchLaterState, watchLaterDispatch] = useReducer(watchLaterReducer, {
        data: [],
    });

    useEffect(
        () =>
            (async () => {
                try {
                    if (auth) {
                        const response = await getWatchLaterVideos(AUTH_TOKEN);
                        if (response.status === 200) {
                            watchLaterDispatch({
                                type: 'LOAD_WATCH_LATER',
                                payload: response.data.watchlater,
                            });
                        }
                    } else {
                        console.log('Watch later: Error fetching videos');
                    }
                } catch (error) {
                    console.log("Couldn't fetch videos.", error.response.status);
                }
            })(),
        [AUTH_TOKEN, watchLaterDispatch, auth],
    );

    return (
        <WatchLaterContext.Provider
            value={{
                watchLaterState,
                watchLaterDispatch,
                addToWatchLaterHandler,
                removeFromWatchLaterHandler,
            }}
        >
            {children}
        </WatchLaterContext.Provider>
    );
};

const useWatchLater = () => {
    const context = useContext(WatchLaterContext);
    if (context === undefined) throw new Error('Watch later context not defined.');
    return context;
};

export { WatchLaterProvider, useWatchLater };
