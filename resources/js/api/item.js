import { ADV_CONFIG } from '../../config.js';

export default {
    /*
        GET     /api/items/{id}
    */
    fetchSingle(id) 
    {
        return axios.get(`${ADV_CONFIG.API_URL}/items/${id}`)
    },
}