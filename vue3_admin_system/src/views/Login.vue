<script>
import { getCurrentInstance, onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import Welcome from "../views/Welcome.vue";

export default {
  name: "Login",
  components: {
    Welcome,
  },
  setup() {
    const router = useRouter();
    const internalInstance = getCurrentInstance();
    const request =
      internalInstance.appContext.config.globalProperties.$request;

    const goHome = () => {
      router.push("/welcome");
    };

    onMounted(() => {
      request
        .get("/login", { name: "michael" }, { mock: true, loading: true })
        .then((res) => {
          console.log("res", res);
        });
    });

    return {
      goHome,
    };
  },
};
</script>

<template>
  <div class="login-wrapper">
    <div class="modal">
      <el-form>
        <div class="title">Log In</div>
        <el-form-item>
          <el-input type="text" prefix-icon="el-icon-user" />
        </el-form-item>
        <el-form-item>
          <el-input type="password" prefix-icon="el-icon-view" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" >Login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss">
.login-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fcff;
  width: 100vw;
  height: 100vh;
  .modal{
    width: 500px;
    padding: 50px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 0 10px 3px #c7c9cb4d;
    .title{
      font-size: 50px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }
  }
}
</style>