<template>
  <div class="row border-1 p-2">
    <div class="col-1 text-left">{{ index + 1 }}</div>
    <div class="col-3">{{ product.title }}</div>
    <div class="col-2">
      <strong class="text-danger">{{ product.price }} $</strong>
    </div>
    <div class="col-3">
        <span class="badge badge-info">{{ product.user.name }}</span>
    </div>
    <div class="col-2">
      <router-link
        :to="{ name: 'ProductEdit', params: { id: product.id } }"
        class="btn btn-primary"
        >Edit</router-link
      >
      <button class="btn btn-danger ml-2" @click="deleteProductModal">Delete</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "ProductDetail",
  props: {
    product: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
};
</script>
