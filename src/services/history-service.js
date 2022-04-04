import axios from 'axios';

const getHistoryService = async (encodedToken) => {
    try {
        const response = await axios.get('/api/user/history', {
            headers: {
                authorization: encodedToken,
            },
        });
        return response;
    } catch (error) {
        console.log('Error while fetching history', error.response);
    }
};

const setHistoryService = async (video, encodedToken) => {
    try {
        const response = await axios.post(
            '/api/user/history',
            {
                video,
            },
            {
                headers: {
                    authorization: encodedToken,
                },
            },
        );
        return response;
    } catch (error) {
        console.log('Error while adding to history', error.response);
    }
};

const removeFromHistoryService = async (videoId, encodedToken) => {
    try {
        const response = await axios.delete(`/api/user/history/${videoId}`, {
            headers: {
                authorization: encodedToken,
            },
        });
        return response;
    } catch (error) {
        console.log('Error while deleting from history', error.response);
    }
};

const clearHistoryService = (encodedToken) => {
    try {
        const response = axios.delete('/api/user/history/all', {
            headers: {
                authorization: encodedToken,
            }
        })
        return response;
    } catch (error) {
        console.log('Error while clearing history', error.response);
    }
}

export { getHistoryService, setHistoryService, removeFromHistoryService, clearHistoryService };
