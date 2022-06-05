import { createContext, useContext, useEffect, useReducer } from 'react';
import { getVidoes, getVideoById } from '../services';

import { videoListReducer } from '../reducers';

const VideoListingContext = createContext();

const VideoProvider = ({ children }) => {
    
    const getVideoByIdHandler = async (videoId) => {
        const response = await getVideoById(videoId);
        if(response.status === 200) {
            videoListDispatch({type: 'SINGLE_VIDEO', payload: response.data.video});
        }
    }

    const [videoListState, videoListDispatch] = useReducer(videoListReducer, {
        data: [],
        singleVideo: [],
        searchedVideo: ''
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
                } catch(error) {
                    console.log('Error fetching data.');
                }
            })(),
        [videoListDispatch],
    );

    return (
        <VideoListingContext.Provider value={{ videoListState, videoListDispatch, getVideoByIdHandler }}>
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
