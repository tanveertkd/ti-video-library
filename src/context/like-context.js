import { createContext, useContext, useEffect, useState } from 'react';
import { getLikedVideos, removeLikedVideo, setLikedVideosService } from '../services';
import { useAuth } from './auth-context';

import toast from 'react-hot-toast';

const LikeContext = createContext();

const LikeProvider = ({ children }) => {
    const AUTH_TOKEN = localStorage.getItem('TI_VID_AUTH_TOKEN');
    const { auth } = useAuth();

    // Handle Likes
    const likeVideoHandler = async (video) => {
        const response = await setLikedVideosService(video, AUTH_TOKEN);
        if(!response.doesExist){
            setLikedVideos((existingVideos) => ({
                ...existingVideos,
                data: response.data.likes,
            }));
            toast.success("Added to liked videos!");
        }else{
            toast.error("Couldn't add to liked videos!");
            console.log(response.data.errors);
        }
    };

    // Handle unlike
    const removeFromLikes = async (id) => {
        const response = await removeLikedVideo(id, AUTH_TOKEN);
        setLikedVideos((existingVideos) => ({
            ...existingVideos,
            data: response.data.likes,
        }));
        toast.success("Removed from liked videos!");
    }
    
    const [likedVideos, setLikedVideos] = useState({
        data: [],
    });

    useEffect(
        () => 
            (async () => {
                if(auth){
                    try {
                        const response = await getLikedVideos(AUTH_TOKEN);
                        setLikedVideos((existingVideos) => ({
                            ...existingVideos,
                            data: response.data.likes,
                        }));
                    } catch (error) {
                        console.log('Error fetching liked videos', error);
                    }
                }else{
                    console.log("Needs authentication")
                }
            })(),
        [AUTH_TOKEN, setLikedVideos, auth],
    );

    return (
        <LikeContext.Provider value={{ likedVideos, setLikedVideos, likeVideoHandler, removeFromLikes }}>
            {children}
        </LikeContext.Provider>
    );
};

const useLike = () => {
    const context = useContext(LikeContext);
    if (context === undefined) throw new Error('Context must be defined for like');
    return context;
};

export { LikeProvider, useLike };
