<template>
  <div id="layout">
    <HeaderPartial />
    <div class="main-content">
      <div class="container mt-3">
        <router-view />
      </div>
    </div>
    <FooterPartial />
  </div>
</template>

<script>
import FooterPartial from "./footer/FooterPartial";
import HeaderPartial from "./header/HeaderPartial";

export default {
  name: "Layout",

  components: {
    HeaderPartial,
    FooterPartial,
  },
};
</script>
