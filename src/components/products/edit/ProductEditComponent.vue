<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h6>Edit Product</h6>
      </div>
      <div class="card-body">
        <Form @submit="onSubmit" :validation-schema="schema">
          <div v-if="isLoading">
            <div class="text-center">
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <br />
              Loading Product Details
            </div>
          </div>
          <div v-if="product !== null && !isLoading">
            <div class="form-group row">
              <div class="col-6">
                <label>Product Name:</label>
                <Field
                  id="title"
                  name="title"
                  type="text"
                  class="form-control"
                  :value="product.title"
                  @input="updateProductInputAction"
                />
                <ErrorMessage name="title" class="text-danger" />
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
                <ErrorMessage name="price" class="text-danger" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-12">
                <label>Product Details:</label>
                <Field
                  name="description"
                  as="textarea"
                  class="form-control"
                  :value="product.description"
                  @input="updateProductInputAction"
                />
                <ErrorMessage name="description" class="text-danger" />
              </div>
            </div>
            <div class="form-group">
              <router-link to="/products" class="btn btn-secondary mr-2"
                >Cancel</router-link
              >
              <input
                type="submit"
                class="btn btn-primary"
                value="Save Update"
                v-if="!isUpdating"
              />
              <button class="btn btn-primary" type="button" disabled v-if="isUpdating">
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Saving...
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  data() {
    return {
      id: null,
    };
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },

  created: function () {
    this.id = this.$route.params.id;
    this.fetchDetailProduct(this.id);
  },

  computed: { ...mapGetters(["isUpdating", "updatedData", "product", "isLoading"]) },

  methods: {
    ...mapActions(["updateProduct", "updateProductInput", "fetchDetailProduct"]),
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
    updateProductInputAction (e) {
      this.updateProductInput(e)
    },
  },

  watch: {
    updatedData: function () {
      if (this.updatedData !== null && !this.isUpdating) {
        this.$swal.fire({
          text: "Success, Product has been updated successfully !",
          icon: "success",
        });

        this.$router.push({ name: "Products" });
      }
    },
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
};
</script>
