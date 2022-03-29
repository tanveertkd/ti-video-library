import { createContext, useContext, useEffect, useReducer } from 'react';
import { getVidoes } from '../services';

import { videoListReducer } from '../reducers';

const VideoListingContext = createContext();

const VideoProvider = ({ children }) => {
    const [videoListState, videoListDispatch] = useReducer(videoListReducer, {
        data: [],
    });

    useEffect(
        () =>
            (async () => {
                try {
                    const {
                        data: { videos },
                        status,
                    } = await getVidoes();
                    if (status === 200) videoListDispatch({ type: 'LOAD_VIDEOS', payload: videos });
                    else throw new Error('Falied with code: ', status);
                } catch {
                    throw new Error('Error fetching data.');
                }
            })(),
        [videoListDispatch],
    );

    return (
        <VideoListingContext.Provider value={{ videoListState, videoListDispatch }}>
            {children}
        </VideoListingContext.Provider>
    );
};

const useVideoProvider = () => {
    const context = useContext(VideoListingContext);
    if (context === undefined) throw new Error('Context must be defined first.');
    return context;
};

export { VideoProvider, useVideoProvider };
