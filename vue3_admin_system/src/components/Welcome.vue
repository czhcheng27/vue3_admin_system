<script>
export default {
  name: "Welcome",
  props: ["message"],
  setup() {
    
  },
};
</script>

<template>
  <div class="welcome">
    <h3>Welcome Page - {{ message }}</h3>
    <router-link to="/login">Go to Login Page</router-link>
  </div>
</template>

<style scoped>
.welcome{
  background-color: white;
  height: 100%;
}
</style>
