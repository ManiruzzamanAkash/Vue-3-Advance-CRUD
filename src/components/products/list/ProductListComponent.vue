<template>
  <div class="container">
    <h4 class="text-left mb-2">All Products</h4>
    <div class="">
      <div class="">
        <table class="table table-hover">
          <thead>
            <tr>
              <td>Sl</td>
              <td>Item Name</td>
              <td>Item Price</td>
              <td>Actions</td>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in products" :key="item._id">
              <td>{{ item._id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>
                <router-link :to="{ name: 'ProductEdit', params: { id: item._id } }"
                  class="btn btn-primary"
                  >Edit</router-link
                >
                <button class="btn btn-danger ml-2">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      products: [
        {
          _id: 1,
          name: "Smasung Gallaxy J10",
          price: 100,
        },
      ],
    };
  },

  methods: {
    getAllProducts() {
      // let uri = "http://localhost:4000/products/list";
      // axios.get(uri, this.product).then((response) => {
      //   console.log(response.data);
      // });
    },
  },
};
</script>
