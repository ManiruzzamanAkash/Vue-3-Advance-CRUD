<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h6>Edit Product</h6>
      </div>
      <div class="card-body">
        <VeeForm
          :validation-schema="schema"
          @submit="onSubmit"
        >
          <div v-if="isLoading">
            <div class="text-center">
              <div
                class="spinner-border text-primary"
                role="status"
              >
                <span class="sr-only">Loading...</span>
              </div>
              <br>
              Loading Product Details
            </div>
          </div>
          <div v-if="product !== null && !isLoading">
            <div class="form-group row">
              <div class="col-6 my-1">
                <label>Product Name:</label>
                <Field
                  id="title"
                  name="title"
                  type="text"
                  class="form-control"
                  :value="product.title"
                  @input="updateProductInputAction"
                />
                <ErrorMessage
                  name="title"
                  class="text-capitalize text-danger"
                />
              </div>
              <div class="col-6">
                <label>Product Price:</label>
                <Field
                  name="price"
                  type="number"
                  class="form-control"
                  :value="product.price"
                  @input="updateProductInputAction"
                />
                <ErrorMessage
                  name="price"
                  class="text-capitalize text-danger"
                />
              </div>
            </div>
            <div class="form-group row my-1">
              <div class="col-12">
                <label>Product Details:</label>
                <Field
                  name="description"
                  as="textarea"
                  class="form-control"
                  :value="product.description"
                  @input="updateProductInputAction"
                />
                <ErrorMessage
                  name="description"
                  class="text-capitalize text-danger"
                />
              </div>
            </div>
            <div class="form-group my-3">
              <router-link
                to="/products"
                class="btn btn-secondary mr-2"
              >
                Cancel
              </router-link>
              <input
                v-if="!isUpdating"
                type="submit"
                class="btn btn-primary mx-2"
                value="Save Update"
              >
              <button
                v-if="isUpdating"
                class="btn btn-primary"
                type="button"
                disabled
              >
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />
                Saving...
              </button>
            </div>
          </div>
        </VeeForm>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Field, Form as VeeForm, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  components: {
    Field,
    VeeForm,
    ErrorMessage,
  },
  setup() {
    // Define a validation schema
    const schema = yup.object({
      title: yup.string().required().min(5),
      price: yup.string().required(),
      description: yup.string().required().min(5),
    });

    return {
      schema,
    };
  },

  data() {
    return {
      id: null,
    };
  },

  computed: {
    ...mapGetters(["isUpdating", "updatedData", "product", "isLoading"]),
  },

  watch: {
    updatedData: function () {
      if (this.updatedData !== null && !this.isUpdating) {
        this.$swal.fire({
          text: "Success, Product has been updated successfully !",
          icon: "success",
          position: "top-end",
          timer: 1000,
        });

        this.$router.push({ name: "Products" });
      }
    },
  },

  created: function () {
    this.id = this.$route.params.id;
    this.fetchDetailProduct(this.id);
  },

  methods: {
    ...mapActions([
      "updateProduct",
      "updateProductInput",
      "fetchDetailProduct",
    ]),
    onSubmit() {
      const { title, price, description } = this.product;
      // return false;
      this.updateProduct({
        id: this.id,
        title: title,
        price: price,
        image: null,
        description: description,
        user_id: 1,
      });
    },
    updateProductInputAction(e) {
      this.updateProductInput(e);
    },
  },
};
</script>
