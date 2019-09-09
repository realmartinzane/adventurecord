import ProductAPI from '../api/product';
import VueRouter from 'vue-router';

export const products =
{
    state:
    {
        products: [],
        productsLoad: 0,

        product: {},
        productLoad: 0,
    },

    mutations:
    {
        setProducts(state, data) {
            state.products = data
        },

        setProductsLoad(state, status) {
            state.productsLoad = status
        },

        setProduct(state, data) {
            state.product = data
        },

        setProductLoad(state, status) {
            state.productLoad = status
        },

    },

    actions:
    {
        fetchProducts({ commit }) {
            commit('setProductsLoad', 1)
            ProductAPI.fetchAll()
                .then(response => {
                    commit('setProducts', response.data)
                    commit('setProductsLoad', 2)
                })
                .catch(() => {
                    commit('setProducts', [])
                    commit('setProductsLoad', 3)
                })
        },

        fetchProduct({ commit }, data) {
            commit('setProductLoad', 1)
            ProductAPI.fetchSingle(data.id)
                .then(response => {
                    commit('setProduct', response.data)
                    commit('setProductLoad', 2)
                })
                .catch(() => {
                    commit('setProduct', [])
                    commit('setProductLoad', 3)
                })
        },
    },

    getters:
    {
        getProducts(state) {
            return state.products
        },

        getProductsLoad(state) {
            return state.productsLoad
        },

        getProduct(state) {
            return state.product
        },

        getProductLoad(state) {
            return state.productLoad
        }
    }
}