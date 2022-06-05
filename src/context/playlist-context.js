import { createContext, useContext, useEffect, useReducer } from 'react';
import {
    addToPlaylistService,
    createPlaylistService,
    deletePlaylist,
    deleteVideoFromPlaylist,
    getPlaylistByIdService,
    getPlaylistsService,
} from '../services';
import { useAuth } from './auth-context';
import { playlistReducer } from '../reducers';
import toast from 'react-hot-toast';

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
    const AUTH_TOKEN = localStorage.getItem('TI_VID_AUTH_TOKEN');
    const { auth } = useAuth();

    const getPlaylistsHandler = async () => {
        if (auth) {
            const response = await getPlaylistsService(AUTH_TOKEN);
            playlistDispatcher({ type: 'FETCH_PLAYLISTS', payload: response.data.playlists });
        }
    };

    const getPlaylistById = async (playlistId) => {
        if (auth) {
            const response = await getPlaylistByIdService(AUTH_TOKEN, playlistId);
            playlistDispatcher({ type: 'FETCH_PLAYLISTS_BY_ID', payload: response.data.playlist });
        }
    };

    const handleNewPlaylist = async (playlist) => {
        if (auth) {
            const response = await createPlaylistService(AUTH_TOKEN, playlist);
            playlistDispatcher({ type: 'CREATE_PLAYLIST', payload: response.data.playlists });
            toast.success('Playlist created.');
        }
    };

    const addToPlaylistHandler = async (playlistId, video) => {
        if (auth) {
            const response = await addToPlaylistService(AUTH_TOKEN, playlistId, video);
            playlistDispatcher({
                type: 'ADD_VIDEO_TO_PLAYLIST',
                payload: { response: response.data.playlist, exists: response.exists },
            });
            toast.success('Video added to playlist');
        }
    };

    const deletePlaylistHandler = async (playlistId) => {
        if (auth) {
            const response = await deletePlaylist(AUTH_TOKEN, playlistId);
            playlistDispatcher({ type: 'AFTER_DELETE', payload: response.data.playlists });
        }
    };

    const deleteFromPlaylistHandler = async (playlistId, videoId) => {
        if (auth) {
            const response = await deleteVideoFromPlaylist(AUTH_TOKEN, playlistId, videoId);
            playlistDispatcher({ type: 'DELETE_FROM_PLAYLIST', payload: response.data.playlist });
            toast.success('Video deleated from playlist');
        }
    };

    const [playlistState, playlistDispatcher] = useReducer(playlistReducer, {
        playlist: [],
        playlistsById: [],
    });

    useEffect(
        () =>
            (async () => {
                if (auth) {
                    const response = await getPlaylistsService(AUTH_TOKEN);
                    playlistDispatcher({
                        type: 'FETCH_PLAYLISTS',
                        payload: response.data.playlists,
                    });
                }
            })(),
        [AUTH_TOKEN, auth],
    );

    return (
        <PlaylistContext.Provider
            value={{
                playlistState,
                playlistDispatcher,
                getPlaylistsHandler,
                getPlaylistById,
                handleNewPlaylist,
                addToPlaylistHandler,
                deletePlaylistHandler,
                deleteFromPlaylistHandler,
            }}
        >
            {children}
        </PlaylistContext.Provider>
    );
};

const usePlaylist = () => {
    const context = useContext(PlaylistContext);
    if (context === undefined) throw new Error('Playlist context must be defined.');
    return context;
};

export { PlaylistProvider, usePlaylist };
