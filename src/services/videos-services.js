import axios from "axios";

const getVidoes = async () => {
    try{
        return await axios.get('/api/videos');
    }catch{
        console.log('Couldn\'t get vidoes.');
    }
}

export { getVidoes };