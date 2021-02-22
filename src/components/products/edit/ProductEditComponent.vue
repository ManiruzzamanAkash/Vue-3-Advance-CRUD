<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h6>Edit Product</h6>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="saveProduct">
          <div class="form-group row">
            <div class="col-6">
              <label>Product Name:</label>
              <input type="text" class="form-control" v-model="product.name" />
            </div>
            <div class="col-6">
              <label>Product Price:</label>
              <input type="number" class="form-control" v-model="product.price" />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-12">
              <label>Product Details:</label>
              <textarea
                type="number"
                class="form-control"
                v-model="product.description"
              ></textarea>
            </div>
          </div>
          <div class="form-group">
              <router-link to="/products" class="btn btn-secondary mr-2">Cancel</router-link>
            <input type="submit" class="btn btn-primary" value="Add Product" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      product: {},
    };
  },

  methods: {
    saveProduct() {
      let uri = "http://localhost:4000/products/add";
      axios.post(uri, this.product).then((response) => {
        console.log(response.data);
      });
    },
  },
};
</script>
