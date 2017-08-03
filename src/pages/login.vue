<template>
  <div class="bg">
    <img class="bgimg" src="../assets/img/bg1.jpg" width="100%" height="100%" alt="">
    <div class="title">
      <img class="brand" src="../assets/img/wspLogo.png">校表应用</div>
    <yd-cell-group class="center">
      <yd-cell-item>
        <span slot="left" class="fix-width">用户名：</span>
        <yd-input slot="right" required v-model="username" ref="username" max="20" placeholder="请输入用户名"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left" class="fix-width">密码：</span>
        <yd-input slot="right" type="password" required v-model="password" ref="password" placeholder="请输入密码"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <yd-accordion>
      <yd-accordion-item v-my-css="{'padding-right': '6px'}">
        <span slot="title" v-my-css="{'padding-left': '6px'}" class="fix-width">高级选项</span>
        <plat-info ref="ref_plat_info" :show-errors="false"></plat-info>
      </yd-accordion-item>
    </yd-accordion>
    <div v-if="showErrorTips" class="error-tips">{{errorTips}}</div>
    <yd-button-group>
      <yd-button size="large" bgcolor="#18f" color="#FFF" @click.native="login()">登 录</yd-button>
    </yd-button-group>
  </div>
</template>
<script>
import platInfo from '../components/platInfo';
import * as userApi from '../api/user';
export default {
  components: {
    platInfo
  },
  data() {
    return {
      username: '',
      password: '',
      errorTips: ''
    };
  },
  computed: {
    showErrorTips() {
      return this.errorTips !== '';
    }
  },
  methods: {
    login() {
      if (!this.$refs.ref_plat_info.validate()) {
        this.errorTips = this.$refs.ref_plat_info.errorTips;
        return;
      }

      let usrCheck = this.$refs.username;
      let pwdCheck = this.$refs.password;
      this.errorTips = '';
      if (!usrCheck.valid) {
        this.errorTips = '用户名' + usrCheck.errorMsg;
        return;
      }
      if (!pwdCheck.valid) {
        this.errorTips = '密码' + pwdCheck.errorMsg;
        return;
      }

      this.doLogin();
    },
    doLogin() {
      this.$dialog.loading.open('登录中...');
      setTimeout(() => {
        userApi.login(this.username, this.password)
          .then(loginResult => {
            this.$dialog.loading.close();
            if (loginResult.Result === '1000') {
              userApi.setRememberedUser(this.username);
              this.$store.commit('currentUser', this.username);
              this.$router.replace('/');
            } else {
              this.$dialog.toast({
                mes: '登录失败：' + loginResult.Message,
                timeout: 2000
              });
            }
          })
          .catch(() => {
            this.$dialog.loading.close();
            this.$dialog.toast({
              mes: '网络连接错误',
              timeout: 2000
            });
          });
      }, 300);
    },
    setRememberedUser() {
      let rememberedUser = userApi.getRememberedUser();
      if (rememberedUser !== null) {
        this.username = rememberedUser;
      }
    }
  },
  mounted() {
    console.log('login mounted');
    this.setRememberedUser();
    this.password = '654321';
  },
  created() {
    console.log('login created');
  }
};
</script>

<style lang='scss' scoped>
@import '../assets/css/errortips.scss';

.bg {
  height: 100%;
  width: 100%;
  position: absolute;
}

.bgimg {
  z-index: -999;
  position: absolute;
}

.brand {
  margin: 0 0 15px -10px;
}

.title {
  margin: 3rem 20px 0 0;
  text-align: right;
  font-size: 28px;
  font-family: 'Microsoft YaHei';
  letter-spacing: 1px;
  font-weight: bold;
  color: #f3f3f3;
}

.center {
  margin: 20px auto 0 auto;
}

.fix-width {
  width: 1.5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .25s ease-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
