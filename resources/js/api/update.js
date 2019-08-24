
import { ADV_CONFIG } from '../../config.js';

export default {
    /*
        GET     /api/updates/{id}
    */
    fetchSingle(id) 
    {
        return axios.get(`${ADV_CONFIG.API_URL}/updates/${id}`)
    },
    /*
        GET     /api/updates
    */
    fetchAll() 
    {
        return axios.get(`${ADV_CONFIG.API_URL}/updates`)
    },
    /*
        POST     /api/updates/store
    */
    store(title, body)
    {
        return axios.post(`${ADV_CONFIG.API_URL}/updates/store`,
        {
            title, body
        })
    },
    /*
        POST     /api/updates/{id}/update
    */
    update(title, body) 
    {
        return axios.post(`${ADV_CONFIG.API_URL}/updates/update`,
        {
            title, body
        })
    },
    /*
        POST     /api/updates/destroy
    */
    destroy(id)
    {
        return axios.post(`/updates/${id}/destroy`)
    }
}