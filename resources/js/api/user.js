
import { ADV_CONFIG } from '../../config.js';

export default {
    /*
        GET   /api/v1/user
    */
    fetchAuth()
    {
        return axios.get(ADV_CONFIG.API_URL + '/user');
    },
    /*
        GET   /api/v1/users/{id}
    */
    fetchSingle(id) 
    {
        return axios.get(`${ADV_CONFIG.API_URL}/users/${id}`);
    },
    /*
        GET   /api/v1/profiles/{id}
    */
    fetchProfile(id)
    {
        return axios.get(`${ADV_CONFIG.API_URL}/profiles/${id}`);
    },
    /*
        POST   /api/v1/users/search
    */
    search(id) 
    {
        return axios.post(`${ADV_CONFIG.API_URL}/users/search`, {id});
    }
}