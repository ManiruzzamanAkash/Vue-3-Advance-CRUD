<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h6>Add Product</h6>
      </div>
      <div class="card-body">
        <!-- <form v-on:submit.prevent="onSaveProduct" :validation-schema="schema"> -->
        <Form @submit="onSubmit" :validation-schema="schema">
          <!-- <Form @submit="onSaveProduct" :validation-schema="schema"> -->
          <div class="form-group row">
            <div class="col-6">
              <label>Product Name:</label>
              <Field
                id="title"
                name="title"
                type="text"
                class="form-control"
                v-model="product.title"
              />
              <ErrorMessage name="title" />
            </div>
            <div class="col-6">
              <label>Product Price:</label>
              <Field
                name="price"
                type="number"
                class="form-control"
                v-model="product.price"
              />
              <ErrorMessage name="price" />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-12">
              <label>Product Details:</label>
              <Field
                name="description"
                class="form-control"
                v-model="product.description"
              ></Field>
              <ErrorMessage name="description" />
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
      product: {}
    };
  },

  components: {
    Field,
    Form,
    ErrorMessage,
  },

  computed: { ...mapGetters(["isCreating", "createdData"]) },

  methods: {
    ...mapActions(["storeProduct"]),
    onSubmit() {
      const { title, price, description } = this.product;
      this.storeProduct({
        title: title,
        price: price,
        image: null,
        description: description,
        user_id: 1,
      });
    }
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

  setup() {
    // Define a validation schema
    const schema = yup.object({
      title: yup.string().required().min(5),
      price: yup.string().required(),
      description: yup.string().required().min(5),
    });

    // function onSubmit() {
    //   const { title, price, description } = this.product;
    //   this.storeProduct({
    //     title: title,
    //     price: price,
    //     image: null,
    //     description: description,
    //     user_id: 1,
    //   });
    // }

    return {
      schema,
      // onSubmit,
    };
  },
};
</script>
