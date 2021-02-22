// import { GET_ALL_PRODUCTS } from "./Types";
import axios from 'axios';

// initial state
const state = () => ({
  products: []
})

// getters
const getters = { 
  productList: state => state.products
};

// actions
const actions = {
  async fetchAllProducts ({ commit }) {
    await axios.get("http://127.0.0.1:8000/api/products/view/all")
      .then(res => {
        console.log('res.data.data', res.data.data);
        
        commit('setProducts', res.data.data.data);
      }).catch(err => {
        console.log('error', err);
        
      })
  }
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.products = products
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