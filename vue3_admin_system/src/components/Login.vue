<script>
    import { useRouter } from 'vue-router'
  export default {
    name: 'Login',
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
  <h1>Login Page</h1>
  <el-button @click="goHome">Go Back to Home Page</el-button>
</template>

<style scoped>

</style>