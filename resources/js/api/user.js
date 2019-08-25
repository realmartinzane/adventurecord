
import { ADV_CONFIG } from '../../config.js';

export default {
    /*
        GET   /api/v1/user
    */
    fetchAuth()
    {
        return axios.get(ADV_CONFIG.API_URL + '/user');
    },
}