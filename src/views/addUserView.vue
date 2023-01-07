<template>
  <div class="login">
    <Signup/>
  </div>
</template>

<script>
// @ is an alias to /src
import Signup from '@/components/addUser.vue'
export default {
  name: 'addUser',
  components: {
    Signup
  }
}
</script>
