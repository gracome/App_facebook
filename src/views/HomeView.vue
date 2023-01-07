<template>
  <div class="home">
    <chat-tab/>
  </div>
</template>

<script>
// @ is an alias to /src
import chatTab from '@/components/chatContentComponents.vue'

export default {
  name: 'HomeView',
  components: {
    chatTab
  },

 created(){
    if(localStorage.getItem('token') === null || localStorage.getItem('token') === "undefined")
      this.$router.push({name: 'login'});
  }
  }
</script>
