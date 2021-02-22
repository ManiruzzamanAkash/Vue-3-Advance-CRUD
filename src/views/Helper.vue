<template>
  <div class="home">
    <VueHelper />
    {{ authorName }}
  </div>
</template>

<script>
// @ is an alias to /src
import VueHelper from '@/components/VueHelper.vue'

export default {
  name: 'Home',
  components: {
    VueHelper
  },
  data(){
        return{
            authorName: this.$store.state.authorName
        }
    }
}
</script>