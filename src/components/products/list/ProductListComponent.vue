<template>
  <div class="container">
    <h4 class="text-left mb-2">All Products</h4>
    <div class="">
      <div class="" v-if="!isLoading">
        <table class="table table-hover">
          <thead>
            <tr>
              <td>Sl</td>
              <td>Product Name</td>
              <td>Product Price</td>
              <td>Uploaded By</td>
              <td>Actions</td>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item, index) in productList" :key="item.id">
              <product-detail :index="index" :product="item" />
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="isLoading" class="text-center mt-5 mb-5">
        Loading Products...
        <div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductDetail from "../list/ProductDetail";

export default {
  components: {
    ProductDetail,
  },
  computed: { ...mapGetters(["productList", "isLoading"]) },

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
