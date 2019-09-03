import { ADV_CONFIG } from '../../config.js';

export default {
    /*
        GET     /api/marketplace/{id}/search
    */
    search(id) 
    {
        return axios.get(`${ADV_CONFIG.API_URL}/marketplace/${id}/search`)
    },
    /*
        GET     /api/marketplace/top
    */
    fetchTop() 
    {
        return axios.get(`${ADV_CONFIG.API_URL}/marketplace/top`)
    },
}