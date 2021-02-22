<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container">
        <router-link to="/" class="navbar-brand"># Advance Vue CRUD </router-link>
        <div class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/products" class="nav-link">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products/create" class="nav-link">Add</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/help" class="nav-link">Help</router-link>
          </li>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>