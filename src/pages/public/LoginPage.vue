<script setup>
import router from "@/router";
</script>

<template>
  <div class="body">
    <div class="login-form">
      <form @submit.prevent="router.push('/admin')">
        <div class="login-title">
          <h1>欢迎使用盘古项目管理系统</h1>
        </div>
        <div class="login-input">
          <div class="input">
            <input type="text" placeholder="请输入用户名"/>
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码"/>
          </div>
          <div class="input">
            <button>登录</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="less">
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;

  .login-form {
    width: 400px;
    height: 400px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px #ccc;

    form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .login-title {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
          font-size: 20px;
          color: #333;
        }
      }

      .login-input {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .input {
          width: 80%;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;

          input {
            width: 100%;
            height: 100%;
            border: 1px solid #ccc;
            border-radius: 4px;
            outline: none;
            padding: 0 10px;
            transition: all .3s;
            cursor: pointer;

            &:focus {
              border-color: #1890ff;
              /*底栏线*/
            }
          }

          button {
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 5px;
            background-color: #1890ff;
            color: #fff;
            cursor: pointer;
            outline: none;
            transition: all .3s;

            &:hover {
              background-color: #40a9ff;
              box-shadow: 0 0 10px rgba(0, 0, 0, .1);
            }
          }
        }

      }
    }
  }
}
</style>
