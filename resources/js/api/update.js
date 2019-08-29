
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
        return axios.get(`${ADV_CONFIG.API_URL}/updates/all`)
    },
    /*
        POST     /api/updates/store
    */
    store(data)
    {
        return axios.post(`${ADV_CONFIG.API_URL}/updates/store`,
        {
            title: data.title,
            body: data.body
        })
    },
    /*
        POST     /api/updates/{id}/update
    */
    update(id, data)
    {
        console.log(id, data)
        return axios.put(`${ADV_CONFIG.API_URL}/updates/${id}/update`,
        {
            title: data.title,
            body: data.body
        })
    },
    /*
        POST     /api/updates/destroy
    */
    destroy(id)
    {
        return axios.delete(`${ADV_CONFIG.API_URL}/updates/${id}/destroy`)
    },

    /*
        POST     /api/updates/{id}/like
    */
    like(id)
    {
        return axios.post(`${ADV_CONFIG.API_URL}/updates/${id}/like`)
    },

    /*
        DELETE     /api/updates/{id}/unlike
    */
    unlike(id) 
    {
        return axios.delete(`${ADV_CONFIG.API_URL}/updates/${id}/unlike`)
    }
}