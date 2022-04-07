import axios from 'axios';

const getPlaylistsService = async (encodedToken) => {
    try {
        const response = await axios.get('/api/user/playlists', {
            headers: {
                authorization: encodedToken,
            },
        });
        if (response.status === 200) {
            return response;
        }
    } catch (error) {
        console.log("Couldn't get playlists.", error.response);
    }
};

const getPlaylistByIdService = async (encodedToken, playlistId) => {
    try {
        const response = await axios.get(`/api/user/playlists/${playlistId}`, {
            headers: {
                authorization: encodedToken,
            },
        });
        if (response.status === 200) {
            return response;
        }
    } catch (error) {
        console.log("Couldn't get playlist details", error.response);
    }
};

const createPlaylistService = async (encodedToken, playlist) => {
    try {
        const response = await axios.post(
            '/api/user/playlists',
            {
                playlist: {
                    title: playlist.title,
                    description: playlist.description,
                },
            },
            {
                headers: {
                    authorization: encodedToken,
                },
            },
        );
        if (response.status === 201) {
            return response;
        }
    } catch (error) {
        console.log('Error creating playlist.', error.response);
    }
};

const addToPlaylistService = async (encodedToken, playlistId, video) => {
    try {
        const response = await axios.post(
            `/api/user/playlists/${playlistId}`,
            { video },
            {
                headers: {
                    authorization: encodedToken,
                },
            },
        );
        if (response.status === 200 || response.status === 201) {
            return {...response, exists: true};
        }
    } catch (error) {
        console.log('Error adding video to playlist.', error.response);
    }
};

const deletePlaylist = async (encodedToken, playlistId) => {
    try{
        const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
            headers: {
                authorization: encodedToken
            }
        })
        if(response.status === 200) {
            return response
        }
    }catch(error) {
        console.log("Couldn't delete playlist", error.response)
    }
}

const deleteVideoFromPlaylist = async (encodedToken, playlistId, videoId) => {
    try {
        const response = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
            headers: {
                authorization: encodedToken,
            },
        });
        if (response.status === 200 || response.status === 201) {
            return {...response, exists: false};
        }
    } catch (error) {
        console.log('Error deleting video from playlist.', error.response);
    }
};

export {
    getPlaylistsService,
    createPlaylistService,
    addToPlaylistService,
    deletePlaylist,
    deleteVideoFromPlaylist,
    getPlaylistByIdService,
};
