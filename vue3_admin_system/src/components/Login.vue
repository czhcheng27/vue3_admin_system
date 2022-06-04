<script>
import { getCurrentInstance, onMounted } from '@vue/runtime-core'
    import { useRouter } from 'vue-router'
    import Welcome from './Welcome.vue'
import AppVue from '../App.vue'

  export default {
    name: 'Login',
    components: {
        Welcome
    },
    setup(){
        const router = useRouter()
        const internalInstance = getCurrentInstance()
        const request = internalInstance.appContext.config.globalProperties.$request

        const goHome = () => {
            router.push('/welcome')
        }

        onMounted(() => {
          request.get("/login", {name: 'michael'}, {mock: true, loading: true}).then((res) => {
            console.log('res', res);
          })
        })

        return {
            goHome,
        }
    }
  }
</script>

<template>
  <h3>Login Page</h3>
  <el-button @click="goHome">Go Back to Home Page</el-button>
</template>

<style scoped>

</style>