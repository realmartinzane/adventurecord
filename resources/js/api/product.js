import { ADV_CONFIG } from '../../config.js';

export default {
    /*
        GET     /api/v1/shop/products/{id}
    */
    fetchAll() {
        return axios.get(`${ADV_CONFIG.API_URL}/shop/products`)
    },
    /*
        GET     /api/v1/shop/products/{id}
    */
    fetchSingle(id) {
        return axios.get(`${ADV_CONFIG.API_URL}/shop/products/${id}`)
    },
}