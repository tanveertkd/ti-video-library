import axios from "axios";

const getVidoes = async () => {
    try{
        return await axios.get('/api/videos');
    }catch(error){
        console.log('Couldn\'t get vidoes.');
    }
}

const getVideoById = async (videoId) => {
    try{
        const response = await axios.get(`/api/video/${videoId}`);
        if(response.status === 200){
            return response;
        }
    } catch (error) {
        console.log("Couldn't load video.", error.response.status);
    }
}

export { getVidoes, getVideoById };