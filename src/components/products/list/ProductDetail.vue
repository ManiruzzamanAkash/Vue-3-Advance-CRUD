<template>
  <div>
    <td>{{ index + 1 }}</td>
    <td>{{ product.title }}</td>
    <td>
      <strong class="text-danger">{{ product.price }} $</strong>
    </td>
    <td>
        <span class="badge badge-info">{{ product.user.name }}</span>
    </td>
    <td>
      <router-link
        :to="{ name: 'ProductEdit', params: { id: product.id } }"
        class="btn btn-primary"
        >Edit</router-link
      >
      <button class="btn btn-danger ml-2" @click="deleteProductModal">Delete</button>
    </td>
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
