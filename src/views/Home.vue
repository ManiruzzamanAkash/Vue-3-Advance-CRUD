<template>
  <div class="home">
    <div class="p-4">
      <div class="row">
        <div class="col-md-2">
          <router-link to="/products" class="btn btn-primary p-4 dashboard-widget">
            All Products
            <span class="badge badge-success">
              20
            </span>
          </router-link>
        </div>
        <div class="col-md-2">
          <router-link to="/products/create" class="btn btn-primary p-4 dashboard-widget">
            Create New Product
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  }
}
</script>
