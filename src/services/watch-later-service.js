import axios from 'axios';

const getWatchLaterVideos = async (encodedToken) => {
    try {
        const response = await axios.get('/api/user/watchlater', {
            headers: {
                authorization: encodedToken,
            },
        });
        if (response.status === 200) return response;
    } catch (error) {
        console.log("Couldn't get liked videos: ", error.response.status);
    }
};

const addToWatchLater = async (video, encodedToken) => {
    try {
        const response = await axios.post(
            '/api/user/watchlater',
            { video },
            {
                headers: {
                    authorization: encodedToken,
                },
            },
        );
        if (response.status === 201) 
            return {...response, doesExist: false};
    } catch (error) {
        if(error.response.status === 409){
            return {...error.response, doesExist: true};
        }
    }
};

const removeFromWatchLater = async (videoId, encodedToken) => {
    try{
        const response = await axios.delete(`/api/user/watchlater/${videoId}`, {
            headers: {
                authorization: encodedToken,
            }
        })
        if(response.status === 200)
            return response;
    }catch(error){
        console.log("Failed to remove from watch later.", error.response.status);
    }
}

export { getWatchLaterVideos, addToWatchLater, removeFromWatchLater };
