<template>
  <div class="container">
    <h4 class="text-left mb-2">All Products</h4>
    <div class="">
      <div class="" v-if="!isLoading">
        <div class="row border-bottom border-top p-2 bg-light">
          <div class="col-1">Sl</div>
          <div class="col-3">Product Name</div>
          <div class="col-2">Product Price</div>
          <div class="col-3">Uploaded By</div>
          <div class="col-2">Actions</div>
        </div>

        <div v-for="(item, index) in productsPaginatedData.data" :key="item.id">
          <product-detail :index="index" :product="item" />
        </div>
      </div>

      <div v-if="isLoading" class="text-center mt-5 mb-5">
        Loading Products...
        <div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>

    <!-- Insert Pagination Part -->
    <div v-if="productsPaginatedData !== null" class="vertical-center mt-2 mb-5">
      <v-pagination
        v-model="page"
        :pages="productsPaginatedData.pagination.total_pages"
        :range-size="2"
        active-color="#DCEDFF"
        @update:modelValue="getResults"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductDetail from "../list/ProductDetail";
import VPagination from "vue3-pagination";

export default {
  components: {
    ProductDetail,
    VPagination,
  },
  computed: { ...mapGetters(["productList", "productsPaginatedData", "isLoading"]) },

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
    getResults(page = 1) {
      console.log('page', page);
      this.fetchAllProducts(page);
    },
  },

  created() {
    this.fetchAllProducts(1);
  }
};
</script>
