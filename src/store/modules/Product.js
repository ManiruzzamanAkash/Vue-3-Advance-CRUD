// import { GET_ALL_PRODUCTS } from "./Types";
import axios from 'axios';

// initial state
const state = () => ({
  products: [],
  isLoading: false
})

// getters
const getters = { 
  productList: state => state.products,
  isLoading: state => state.isLoading
};

// actions
const actions = {
  async fetchAllProducts ({ commit }) {
    commit('setProductIsLoading', true);
    const res = await axios.get("http://127.0.0.1:8000/api/products/view/all")
      // .then(res => {
      //   commit('setProducts', res.data.data.data);
      // }).catch(err => {
      //   console.log('error', err);
      // })
    commit('setProducts', res.data.data.data);
    commit('setProductIsLoading', false);
  }
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.products = products
  },
  setProductIsLoading (state, isLoading) {
    state.isLoading = isLoading
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