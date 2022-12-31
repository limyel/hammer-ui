<template>
  <div class="login-body">
    <div class="login-container">
      <div class="head">
        <div class="name">
          <div class="title">Hammer</div>
        </div>
      </div>
      <el-form label-position="top" :rules="loginRules" :model="loginForm" ref="loginFormRef" class="login-form">
        <el-form-item label="用户名" style="color: #000" prop="username">
          <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="submitForm"></el-button>
          <el-checkbox v-model="checked" @change="!checked">下次自动登录</el-checkbox>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const loginForm = ref({
  username: '',
  password: ''
})
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名不能为空'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      message: '密码不能为空'
    }
  ]
})


const loginFormRef = ref(null)


const checked = ref(true);

</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: $bg;
  height: 100%;

  .login-container {
    width: 420px;
    height: 500px;

    .head {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px 0 20px 0;
      color: #fff;
      font-size: 28px;
      font-weight: bold;
    }

    .login-form {
      width: 70%;
      margin: 0 auto;

      .el-form--label-top {
        .el-form__label {
          padding: 0;
        }
      }
    }
  }

}

</style>