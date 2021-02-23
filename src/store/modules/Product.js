// import { GET_ALL_PRODUCTS } from "./Types";
import axios from 'axios';

// initial state
const state = () => ({
  products: [],
  product: null,
  isLoading: false,
  isCreating: false,
  createdData: null,
  isUpdating: false,
  updatedData: null
})

// getters
const getters = { 
  productList: state => state.products,
  product: state => state.product,
  isLoading: state => state.isLoading,
  isCreating: state => state.isCreating,
  isUpdating: state => state.isUpdating,
  createdData: state => state.createdData,
  updatedData: state => state.updatedData,
};

// actions
const actions = {
  async fetchAllProducts ({ commit }) {
    commit('setProductIsLoading', true);
    await axios.get("http://127.0.0.1:8000/api/products/view/all")
      .then(res => {
        commit('setProducts', res.data.data.data);
        commit('setProductIsLoading', false);
      }).catch(err => {
        console.log('error', err);
        commit('setProductIsLoading', false);
      });
  },

  async fetchDetailProduct ({ commit }, id) {
    commit('setProductIsLoading', true);
    await axios.get(`http://127.0.0.1:8000/api/products/${id}`)
      .then(res => {
        commit('setProductDetail', res.data.data);
        commit('setProductIsLoading', false);
      }).catch(err => {
        console.log('error', err);
        commit('setProductIsLoading', false);
      });
  },

  async storeProduct ({ commit }, product) {
    commit('setProductIsCreating', true);
    await axios.post("http://127.0.0.1:8000/api/products", product)
      .then(res => {
        commit('saveNewProducts', res.data.data);
        commit('setProductIsCreating', false);
      }).catch(err => {
        console.log('error', err);
        commit('setProductIsCreating', false);
      });
  },

  async updateProduct ( { commit }, product) {
    commit('setProductIsUpdating', true);
    commit('setProductIsUpdating', true);
    await axios.post(`http://127.0.0.1:8000/api/products/${product.id}?_method=PUT`, product)
      .then(res => {
        commit('saveUpdatedProduct', res.data.data);
        commit('setProductIsUpdating', false);
      }).catch(err => {
        console.log('error', err);
        commit('setProductIsUpdating', false);
      });
  },

  updateProductInput({commit}, e){
    commit('setProductDetailInput', e);
  }
}

// mutations
const mutations = {
  setProducts: (state, products) => {
    state.products = products
  },

  setProductDetail: (state, product) => {
    state.product = product
  },

  setProductDetailInput: (state, e) => {
    let product = state.product;
    product[e.target.name] = e.target.value;
    state.product = product
  },

  saveNewProducts: (state, product) => {
    state.products.unshift(product)
    state.createdData = product;
  },

  saveUpdatedProduct: (state, product) => {
    state.products.unshift(product)
    state.updatedData = product;
  },

  setProductIsLoading (state, isLoading) {
    state.isLoading = isLoading
  },

  setProductIsCreating (state, isCreating) {
    state.isCreating = isCreating
  },

  setProductIsUpdating (state, isUpdating) {
    state.isUpdating = isUpdating
  },

}

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}