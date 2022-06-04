<script>
import { getCurrentInstance } from '@vue/runtime-core'
  export default {
    name: 'app',
    mounted(){
      const internalInstance = getCurrentInstance()
      const storage = internalInstance.appContext.config.globalProperties.$storage
      // console.log('storage', storage);
      storage.setItem("userInfo", {age: 50, name: 'asd'})
      console.log('user => ', storage.getItem('userInfo'));
    }
  }
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
@import './assets/style/reset.css';
@import './assets/style/index.scss';
</style>
