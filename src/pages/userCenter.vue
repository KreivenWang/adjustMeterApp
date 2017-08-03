<template>
  <div>
    <plat-info ref="ref_plat_info"></plat-info>
    <yd-button-group>
      <yd-button type="danger" size="large" @click.native="logout()">退出登录</yd-button>
    </yd-button-group>
  </div>
</template>
<script>
import platInfo from '../components/platInfo';
export default {
  components: {
    platInfo
  },
  data() {
    return {
      platAddress: '192.168.0.62',
      platPort: 9025,
      canModifyPlatInfo: ''
    };
  },
  methods: {
    logout() {
      console.log('logout clicked');
      this.$router.replace('/login');
    }
  },
  mounted() {
    if (this.$store.getters.getTitle !== this.$l.userCenter) {
      this.$store.commit('titleModification', this.$l.userCenter);
    }
  }
};
</script>

<style lang='scss' scoped>

</style>
