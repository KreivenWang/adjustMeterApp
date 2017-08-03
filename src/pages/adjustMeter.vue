<template>
  <div>
    <yd-list theme="4">
      <yd-list-item :key="index" v-for="(item, index) in list">
        <img slot="img" :src="item.img">
        <span slot="title">{{item.name}}</span>
        <yd-list-other slot="other">
          <yd-flexbox direction="vertical">
            <yd-flexbox-item style="padding:.1rem 0">表号：
              <span class="list-price">
                {{item.code}}
              </span>
            </yd-flexbox-item>
            <yd-flexbox-item>{{item.addr}}</yd-flexbox-item>
          </yd-flexbox>
        </yd-list-other>
      </yd-list-item>
    </yd-list>
  </div>
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
      x: 'adjustMeter',
      searchText: '',
      list: [
        { img: require('../assets/img/ic_launcher.png'), name: '蒙城测试1', addr: '安徽蒙城测试地址1', code: '00000003001' },
        { img: require('../assets/img/ic_launcher.png'), name: '蒙城测试2', addr: '安徽蒙城测试地址1', code: '00000003001' },
        { img: require('../assets/img/ic_launcher.png'), name: '蒙城测试3', addr: '安徽蒙城测试地址1', code: '00000003001' },
        { img: require('../assets/img/ic_launcher.png'), name: '蒙城测试4', addr: '安徽蒙城测试地址1', code: '00000003001' },
        { img: require('../assets/img/ic_launcher.png'), name: '蒙城测试5', addr: '安徽蒙城测试地址1', code: '00000003001' },
        { img: require('../assets/img/ic_launcher.png'), name: '蒙城测试1', addr: '安徽蒙城测试地址1', code: '00000003001' }
      ]
    };
  },
  mounted() {
    if (this.$store.getters.getTitle !== this.$l.adjustMeter) {
      this.$store.commit('titleModification', this.$l.adjustMeter);
    }
  }
};
</script>

<style lang='scss' scoped>

</style>
