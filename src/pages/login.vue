<template>
  <div class="back">
    <yd-cell-group class="center">
      <yd-cell-item>
        <span slot="left">用户名：</span>
        <yd-input slot="right" required v-model="username" max="20" placeholder="请输入用户名"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">密码：</span>
        <yd-input slot="right" type="password" v-model="password" placeholder="请输入密码"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      x: 'login',
      username: '',
      password: ''
    };
  }
};
</script>

<style lang='scss' scoped>
.back {
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url('../assets/logo.png');
  background-size: cover;
}

.center {
  margin: 5rem auto 0 auto;
}
</style>
