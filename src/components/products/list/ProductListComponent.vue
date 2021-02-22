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
            <tr v-for="(item, index) in productList" :key="item.id">
              <td>{{ index + 1 }}</td>
              <td>{{ item.title }}</td>
              <td><strong class="text-danger">{{ item.price }} $</strong></td>
              <td>
                <router-link
                  :to="{ name: 'ProductEdit', params: { id: item.id } }"
                  class="btn btn-primary"
                  >Edit</router-link
                >
                <button class="btn btn-danger ml-2" @click="deleteProductModal">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: { ...mapGetters(["productList"])},

  methods: {
    ...mapActions(["fetchAllProducts"]),

    deleteProductModal() {
      this.$swal.fire({
        // title: "Error!",
        text: "Are you sure to delete the product ?",
        icon: "error",
        cancelButtonText: "Cancel",
        confirmButtonText: "Yes, Confirm Delete",
        showCancelButton: true,
      });
    },
  },

  created() {
    this.fetchAllProducts();
  },

  mounted() {},
};
</script>
