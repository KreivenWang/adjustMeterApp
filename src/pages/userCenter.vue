<template>
  <div>
    <yd-cell-group>
      <yd-cell-item type="label">
        <span slot="left">{{greet}}！{{currentUser}}。</span>
      </yd-cell-item>
    </yd-cell-group>
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
  computed: {
    currentUser() {
      return this.$store.getters.getUser;
    },
    greet() {
      let now = new Date();
      let hour = now.getHours();
      if (hour < 9) {
        return '早上好';
      }
      if (hour < 12) {
        return '上午好';
      }
      if (hour < 18) {
        return '下午好';
      }
      return '晚上好';
    }
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
