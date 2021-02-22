
import { createStore, createLogger } from 'vuex';
import product from './modules/Product';
import auth from './modules/Auth';

const debug = process.env.NODE_ENV !== 'production'

const Store = createStore({
  modules: {
    auth,
    product
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default Store;