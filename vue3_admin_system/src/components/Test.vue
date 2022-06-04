<template>
  <div>
    <h2>I'm Test Page</h2>
    <el-button @click="handleCreate">New</el-button>

    <el-dialog title="用户新增" v-model="showModal">
      <el-form
        ref="dialogForm"
        :model="userForm"
        label-width="100px"
        :rules="rules"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="userForm.userName" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="userForm.email" placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="userForm.mobile" placeholder="请输入手机号" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="userForm.status">
            <el-option :value="1" label="在职"></el-option>
            <el-option :value="2" label="离职"></el-option>
            <el-option :value="3" label="试用期"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleCancel">Cancel</el-button>
          <el-button type="primary" @click="handleSubmit">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { reactive, ref, toRaw } from "@vue/reactivity";
import { ElMessage } from 'element-plus'
export default {
  name: "Test",
  setup() {
    //弹框显示对象
    const showModal = ref(false);
    const dialogForm = ref(null)
    const userForm = ref({
        status: 3,
        userName: '',
        email: '',
        mobile: '',
    });

    const rules = reactive({
        userName: [
            {
                required: true,
                message: '请输入用户名',
                trigger: 'blur'
            }
        ],
        email: [
            {
                required: true,
                message: '请输入邮箱',
                trigger: 'blur'
            }
        ],
        mobile: [
            {
                pattern: /1\d{10}/,
                message: '请输入正确的手机号格式',
                trigger: 'blur'
            }
        ]
    })

    const handleCreate = () => {
      showModal.value = true;
    };

    const handleCancel = () => {
        dialogForm.value.resetFields()
        showModal.value = false
    }

    const handleSubmit = () => {
        dialogForm.value.validate((valid) => {
            if(valid){
                // let params = toRaw(userForm)
                const params = JSON.parse(JSON.stringify(userForm.value))
                console.log('submit', params);
                handleCancel()
                ElMessage.success('提交成功')
            }
        })

    }

    return {
      handleCreate,
      handleCancel,
      handleSubmit,
      showModal,
      userForm,
      rules,
      dialogForm,
    };
  },
};
</script>

<style>
</style>