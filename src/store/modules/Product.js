// import { GET_ALL_PRODUCTS } from "./Types";
import axios from 'axios';

// initial state
const state = () => ({
  products: [],
  productsPaginatedData: null,
  product: null,
  isLoading: false,
  isCreating: false,
  createdData: null,
  isUpdating: false,
  updatedData: null,
  isDeleting: false,
  deletedData: null
})

// getters
const getters = {
  productList: state => state.products,
  productsPaginatedData: state => state.productsPaginatedData,
  product: state => state.product,
  isLoading: state => state.isLoading,
  isCreating: state => state.isCreating,
  isUpdating: state => state.isUpdating,
  createdData: state => state.createdData,
  updatedData: state => state.updatedData,

  isDeleting: state => state.isDeleting,
  deletedData: state => state.deletedData
};

// actions
const actions = {
  async fetchAllProducts({ commit }, page) {
    commit('setProductIsLoading', true);
    await axios.get(`http://127.0.0.1:8000/api/products?page=${page}`)
      .then(res => {
        const products = res.data.data.data;
        commit('setProducts', products);
        const pagination = {
          total: res.data.data.total,  // total number of elements or items
          per_page: res.data.data.per_page, // items per page
          current_page: res.data.data.current_page, // current page (it will be automatically updated when users clicks on some page number).
          total_pages: res.data.data.last_page // total pages in record
        }
        res.data.data.pagination = pagination;
        commit('setProductsPaginated', res.data.data);
        commit('setProductIsLoading', false);
      }).catch(err => {
        console.log('error', err);
        commit('setProductIsLoading', false);
      });
  },

  async fetchDetailProduct({ commit }, id) {
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

  async storeProduct({ commit }, product) {
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

  async updateProduct({ commit }, product) {
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

  
  async deleteProduct({ commit }, id) {
    commit('setProductIsDeleting', true);
    await axios.delete(`http://127.0.0.1:8000/api/products/${id}`)
      .then(res => {
        commit('setDeleteProduct', res.data.data.id);
        commit('setProductIsDeleting', false);
      }).catch(err => {
        console.log('error', err);
        commit('setProductIsDeleting', false);
      });
  },

  updateProductInput({ commit }, e) {
    commit('setProductDetailInput', e);
  }
}

// mutations
const mutations = {
  setProducts: (state, products) => {
    state.products = products
  },

  setProductsPaginated: (state, productsPaginatedData) => {
    state.productsPaginatedData = productsPaginatedData
  },

  setProductDetail: (state, product) => {
    state.product = product
  },

  setDeleteProduct: (state, id) => {
    state.productsPaginatedData.data.filter(x => x.id !== id);
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

  setProductIsLoading(state, isLoading) {
    state.isLoading = isLoading
  },

  setProductIsCreating(state, isCreating) {
    state.isCreating = isCreating
  },

  setProductIsUpdating(state, isUpdating) {
    state.isUpdating = isUpdating
  },

  setProductIsDeleting(state, isDeleting) {
    state.isDeleting = isDeleting
  },

}

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}