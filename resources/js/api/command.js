import { ADV_CONFIG } from '../../config.js';

export default {
    /*
        GET     /api/v1/commands
    */
    fetchAll() 
    {
        return axios.get(`${ADV_CONFIG.API_URL}/commands`)
    },
}