<template>
  <div class="home">
    <VueHelper />
    <hr>
    <h3>Author:</h3>
    {{ authorName }}
  </div>
</template>

<script>
// @ is an alias to /src
import VueHelper from "@/components/VueHelper.vue";

export default {
  name: "Home",
  components: {
    VueHelper,
  },

  data() {
    return {
      authorName: this.$store.state.auth.authorName,
    };
  },
};
</script>