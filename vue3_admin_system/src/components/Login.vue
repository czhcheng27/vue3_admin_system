<script>
    import { useRouter } from 'vue-router'
    import Welcome from './Welcome.vue'

  export default {
    name: 'Login',
    components: {
        Welcome
    },
    setup(){
        const router = useRouter()

        const goHome = () => {
            router.push('/welcome')
        }

        return {
            goHome,
        }
    }
  }
</script>

<template>
  <h3>Login Page</h3>
  <el-button @click="goHome">Go Back to Home Page</el-button>
  <br>
  <br>
  <Welcome message='michael' />
</template>

<style scoped>

</style>