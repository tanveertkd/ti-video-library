import axios from 'axios';

const getLikedVideos = async (encodedToken) => {
    try {
        const response = await axios.get('/api/user/likes', {
            headers: {
                authorization: encodedToken,
            },
        });

        if (response.status === 200) return response;
    } catch (error) {
        console.log("Falied to fetch liked videos: ",error.response.status);
    }
};

const setLikedVideosService = async (video, encodedToken) => {
    try {
        const response = await axios.post(
            '/api/user/likes',
            {
                video,
            },
            {
                headers: {
                    authorization: encodedToken,
                },
            },
        );
        if (response.status === 201) 
            return {...response, doesExist: false};
    } catch (error) {
        if(error.response.status === 409)
            return {...error.response, doesExist: true}
    }
};

const removeLikedVideo = async (videoID, encodedToken) => {
    try {
        const response = await axios.delete(`/api/user/likes/${videoID}`, {
            headers: {
                authorization: encodedToken
            }
        })

        if(response.status === 200){
            return response;
        }
    }catch(error){
        console.log(error.response.status)
    }
}

export { getLikedVideos, setLikedVideosService, removeLikedVideo };
