<script setup>
import {useRouter} from "vue-router";
import {onMounted} from "vue";

const router = useRouter()
const goWebSite = () => {
  window.open('https://www.beacon-fire.com')
}
onMounted(() => {
  const content = document.querySelector('.content')
  const headerHeight = document.querySelector('.header').offsetHeight
  const footerHeight = document.querySelector('.footer').offsetHeight
  content.style.height = `calc(100vh - ${headerHeight + footerHeight}px)`
})


</script>

<template>
  <div class="header">
    <div class="title">
      <h1>PanGu-Project</h1>
    </div>
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="logo" @click="goWebSite"/>
    </div>
    <div class="menu">
      <ul>
        <li>首页</li>
        <li>使用文档</li>
        <li>更新日志</li>
      </ul>
    </div>
  </div>
  <div class="content">
    <div class="login">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="login-form">
              <div class="login-title">
                <h1>Yo！</h1>
              </div>
              <div class="login-input">
                <div class="input">
                  <button @click="router.push('/login')">登录</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="left">
      <p>项目归Beacon-fire所有</p>
    </div>
    <div class="center">
      <p>联系我们</p>
    </div>
    <div class="right">
      <p>友情提示：本系统仅作演示使用</p>
    </div>
  </div>

</template>

<style scoped lang="less">

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #fff;
  padding: 0 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);

  .logo {
    height: 70%;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .title {
    font-size: 15px;
    font-weight: bold;
  }

  .menu {
    ul {
      display: flex;

      li {
        margin: 0 10px;
        cursor: pointer;

        &:hover {
          color: #1890ff;
        }
      }
    }
  }
}

.content {
  background-image: url("@/assets/images/background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-form {
      width: 400px;
      height: 400px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, .1);

      .login-title {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
          font-size: 20px;
          font-weight: bold;
        }
      }

      .login-input {
        width: 100%;
        height: 340px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        .input {
          width: 80%;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;

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

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #fff;
  padding: 0 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);

  .left {
    p {
      font-size: 12px;
      color: #999;
    }
  }

  .center {
    p {
      font-size: 12px;
      color: #999;
    }
  }

  .right {
    p {
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
