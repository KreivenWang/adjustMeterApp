<template>
  <yd-layout>
    <div slot="navbar" class="header">
      <yd-navbar :title="title">
        <router-link to="" slot="left" @click.native="goHistory()" v-show="!isHomeView">
          <yd-navbar-back-icon>{{$l.back}}</yd-navbar-back-icon>
        </router-link>
      </yd-navbar>
    </div>
    <router-view slot="top" name="top"></router-view>
    <router-view></router-view>
    <router-view slot="bottom" name="bottom"></router-view>
    <div slot="tabbar" class="footer">
      <yd-tabbar activeColor="#43aaff">
        <yd-tabbar-item :title="$l.home" link="/" :active="curRouteName==='home'">
          <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item :title="$l.adjustMeter" link="/home/adjustMeter" :active="curRouteName==='adjustMeter'">
          <yd-icon name="feedback" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item :title="$l.userCenter" link="/home/userCenter" :active="curRouteName==='userCenter'">
          <yd-icon name="ucenter" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
      </yd-tabbar>
    </div>
  
  </yd-layout>
</template>
<script>
import meterFilter from '../components/meterFilter';
import baiduMap from '../components/baiduMap';
export default {
  components: {
    meterFilter,
    baiduMap
  },
  data() {
    return {
      // curView: ''
    };
  },
  computed: {
    curRouteName() {
      console.log('curRouteName: ' + this.$route.name);
      return this.$route.name;
    },
    isHomeView() {
      return this.curRouteName === 'home';
    },
    title() {
      return this.$store.getters.getTitle;
    }
  },
  watch: {
    // curTab(val, oldVal) {
    //   console.log('curTab:' + val + ' ' + oldVal);
    // }
  },
  methods: {
    clickclick() {
      console.log('div clicked!');
    },
    goHistory() {
      window.history.go(-1);
      console.log('gohistory');
    }
  },
  mounted() {
    console.log(this.$route.name);
  }
};
</script>

<style lang='scss' scoped>
.header {
  .header__title {
    font-weight: bold;
  }
}

.test {
  width: 100px;
  height: 100px;
  background: red;
}
</style>
