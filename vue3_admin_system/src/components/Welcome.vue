<script>
import { useRouter } from 'vue-router';
export default {
  name: "Welcome",
  props: ["message"],
  setup() {
    const router = useRouter()
    const goTest = () => {
      router.push('/test')
    }

    return {
      goTest
    }
  },
};
</script>

<template>
  <div class="welcome">
    <h3>Welcome Page - {{ message }}</h3>
    <router-link to="/login">Go to Login Page</router-link>
    <br>
    <br>
    <el-button @click="goTest" type="primary">Go To Test Page</el-button>
  </div>
</template>

<style scoped>
.welcome{
  background-color: white;
  height: 100%;
}
</style>
