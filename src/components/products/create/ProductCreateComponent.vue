<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h6>Add Product</h6>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="onSaveProduct">
          <div class="form-group row">
            <div class="col-6">
              <label>Product Name:</label>
              <input type="text" class="form-control" v-model="product.title" />
            </div>
            <div class="col-6">
              <label>Product Price:</label>
              <input type="number" class="form-control" v-model="product.price" />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-12">
              <label>Product Details:</label>
              <textarea class="form-control" v-model="product.description"></textarea>
            </div>
          </div>
          <div class="form-group">
            <router-link to="/products" class="btn btn-secondary mr-2"
              >Cancel</router-link
            >
            <input
              type="submit"
              class="btn btn-primary"
              value="Add Product"
              v-if="!isCreating"
            />
            <button class="btn btn-primary" type="button" disabled v-if="isCreating">
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Saving...
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      product: {},
    };
  },

  computed: { ...mapGetters(["isCreating", "createdData"]) },

  methods: {
    ...mapActions(["storeProduct"]),
    onSaveProduct() {
      const { title, price, description } = this.product;
      this.storeProduct({
        title: title,
        price: price,
        image: null,
        description: description,
        user_id: 1,
      });
    },
  },

  watch: {
    createdData: function () {
      if (this.createdData !== null && !this.isCreating) {
        this.$swal.fire({
          text: "Success, Product has been added.",
          icon: "success",
        });

        this.$router.push({ name: "Products" });
      }
    },
  },
};
</script>
