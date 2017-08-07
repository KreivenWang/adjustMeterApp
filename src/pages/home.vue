<template>
  <div>
    <yd-rollnotice autoplay="5000" style="font-size:16px;">
      <yd-rollnotice-item>
        <span style="color:#F00;">&nbsp;最新动态&nbsp;&nbsp;</span>上海地区5台设备需要校表！</yd-rollnotice-item>
      <yd-rollnotice-item>
        <span style="color:#F00;">&nbsp;最新动态&nbsp;&nbsp;</span>今日已完成校表3台。</yd-rollnotice-item>
      <yd-rollnotice-item>
        <span style="color:#F00;">&nbsp;最新动态&nbsp;&nbsp;</span>盘锦地区3台设备需要校表！</yd-rollnotice-item>
    </yd-rollnotice>
    <yd-grids-group :rows="2">
      <yd-grids-item link="/home/meterList">
        <!-- <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png"> -->
        <yd-icon slot="icon" name="home-outline" color="#43aaff"></yd-icon>
        <span slot="text">{{$l.adjustMeter}}</span>
      </yd-grids-item>
      <yd-grids-item @click.native="ToastNoAccess()">
        <yd-icon slot="icon" name="location" color="#43aaff"></yd-icon>
        <span slot="text">{{$l.location}}</span>
      </yd-grids-item>
      <yd-grids-item link="/home/userCenter">
        <yd-icon slot="icon" name="ucenter-outline" color="#43aaff"></yd-icon>
        <span slot="text">{{$l.userCenter}}</span>
      </yd-grids-item>
      <yd-grids-item link="/login">
        <yd-icon slot="icon" name="ucenter-outline" color="#43aaff"></yd-icon>
        <span slot="text">登录测试</span>
      </yd-grids-item>
    </yd-grids-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      x: 'home'
    };
  },
  methods: {
    ToastNoAccess() {
      this.$dialog.toast({
        mes: '暂未开放',
        timeout: 1000,
        icon: 'error'
        // callback: () => {
        //   this.$dialog.alert({ mes: '给你一次重来的机会！' });
        // }
      });
    }
  },
  mounted() {
    if (this.$store.getters.getTitle !== this.$l.appFull) {
      this.$store.commit('titleModification', this.$l.appFull);
    }
  }
};
</script>

<style lang='scss' scoped>

</style>
