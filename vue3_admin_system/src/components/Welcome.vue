<script>
import { defineProps } from "vue";
export default {
  name: "Welcome",
  props: ['message'],
  setup() {
    defineProps({
      message: String,
    });
  },
};
</script>

<template>
  <h3>Welcome Page - {{ message }}</h3>
  <!-- <el-button>Go to Login Page</el-button> -->
  <router-link to="/login">Go to Login Page</router-link>
</template>

<style scoped>
</style>
