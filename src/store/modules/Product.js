// import { GET_ALL_PRODUCTS } from "./Types";
import axios from 'axios';

// initial state
const state = () => ({
  products: [],
  isLoading: false,
  isCreating: false,
  createdData: null
})

// getters
const getters = { 
  productList: state => state.products,
  isLoading: state => state.isLoading,
  isCreating: state => state.isCreating,
  createdData: state => state.createdData,
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

  async fetchDetailProduct ({ commit }) {
    commit('setProductIsLoading', true);
    await axios.get("http://127.0.0.1:8000/api/products/view/all")
      .then(res => {
        commit('setProducts', res.data.data.data);
        // commit('setProductIsLoading', false);
      }).catch(err => {
        console.log('error', err);
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
}

// mutations
const mutations = {
  setProducts: (state, products) => {
    state.products = products
  },

  saveNewProducts: (state, product) => {
    state.products.unshift(product)
    state.createdData = product;
  },

  setProductIsLoading (state, isLoading) {
    state.isLoading = isLoading
  },
  setProductIsCreating (state, isCreating) {
    state.isCreating = isCreating
  },

  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}