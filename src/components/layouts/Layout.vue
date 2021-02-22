<template>
  <div id="layout">
    <Header />
    <div class="container mt-3">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './footer/Footer';
import Header from './header/Header';
export default {
  name: 'Layout',
  props: {
    msg: String
  },
  components: {
    Header,
    Footer
  }
}
</script>