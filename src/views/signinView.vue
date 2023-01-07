<template>
  <div class="login">
    <login/>
  </div>
</template>

<script>
// @ is an alias to /src
import login from '@/components/signinComponent.vue'
export default {
  name: 'signinCom',
  components: {
    login
  }
}
</script>
