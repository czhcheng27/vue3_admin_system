<script>
import { getCurrentInstance, reactive, ref } from "@vue/runtime-core";
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

    const userFormRef = ref(null);

    const user = reactive({
      userName: "",
      userPwd: "",
    });

    const rules = reactive({
      userName: [
            { required: true, message: 'Please type in you username', trigger: 'blur' },
            { min: 3, max: 15, message: 'Length should be 3 to 15', trigger: 'blur' },
      ],
      userPwd: [
        {
          required: true,
          message: "Please type your password",
          trigger: "blur",
        },
      ],
    });

    const login = async (formEl) => {
      if(!formEl) return
      await formEl.validate((valid, field) => {
        if(valid) {
          console.log('submit', formEl);
        } else {
          console.log('error submit', field);
        }
      })
    };

    return {
      userFormRef,

      user,
      rules,

      login,
    };
  },
};
</script>

<template>
  <div class="login-wrapper">
    <div class="modal">
      <!-- :model 表单公共的作用域（user这个对象），v-model绑定每一个表单的对象 -->
      <el-form
        ref="userFormRef"
        :model="user"
        status-icon
        :rules="rules"
      >
        <div class="title">Log In</div>
        <el-form-item prop="userName">
          <el-input
            type="text"
            v-model="user.userName"
          />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input
            type="password"
            v-model="user.userPwd"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="login(userFormRef)" >Login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss">
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fcff;
  width: 100vw;
  height: 100vh;
  .modal {
    width: 500px;
    padding: 50px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 0 10px 3px #c7c9cb4d;
    .title {
      font-size: 50px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }
    .btn-login{
      width: 100%;
    }
  }
}
</style>