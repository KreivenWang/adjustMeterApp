<template>
  <div>
    <yd-list theme="4">
      <div :class="[{'selecteditem':item.selected}]" :key="index" v-for="(item, index) in meterList">
        <yd-list-item @click.native="itemClicked(item)">
          <img slot="img" v-show="!item.selected" :src="item.img">
          <img slot="img" v-show="item.selected" :src="require('../assets/logo.png')">
          <span slot="title">{{item.name}}</span>
          <yd-list-other slot="other">
            <yd-flexbox direction="vertical">
              <yd-flexbox-item style="padding:.1rem 0">表号：
                <span class="list-price">
                  {{item.code}}
                </span>
              </yd-flexbox-item>
              <div ></div>
              <yd-icon name="checkoff" size=".6rem" color="#FF685D" v-if="item.selected" class="selectedbg"></yd-icon>
              <yd-button type="primary" v-if="item.selected">进入</yd-button>
              <yd-flexbox-item>位于：&nbsp;{{item.address}}</yd-flexbox-item>
              <yd-flexbox-item>坐标&nbsp;{{item.longtitude}},{{item.latitude}}</yd-flexbox-item>
            </yd-flexbox>
          </yd-list-other>
        </yd-list-item>
      </div>
    </yd-list>
  </div>
</template>
<script>
import * as meterApi from '../api/meter';
// import meterFilter from '../components/meterFilter';
// import baiduMap from '../components/baiduMap';
export default {
  // components: {
  //   meterFilter,
  //   baiduMap
  // },
  data() {
    return {
      x: 'meterList',
      searchText: ''
    };
  },
  computed: {
    meterList() {
      return this.$store.getters.getMeters;
    }
  },
  methods: {
    getAllMeters() {
      this.$dialog.loading.open('加载中...');
      let userId = this.$store.getters.getUserId;
      meterApi.getAllMeters(userId)
        .then(meters => {
          meters.forEach(meter => {
            meter.img = require('../assets/img/ic_launcher.png');
            meter.selected = false;
          }, this);
          this.setMeters(meters);
          this.meterList[0].selected = true;
          this.$dialog.loading.close();
        })
        .catch(err => {
          this.$dialog.loading.close();
          console.log(err);
        });
    },
    setMeters(meters) {
      this.$store.commit('metersLoader', meters);
    },
    itemClicked(item) {
      this.meterList.forEach((meter) => {
        meter.selected = meter === item;
      }, this);
    }
  },
  mounted() {
    if (this.$store.getters.getTitle !== this.$l.adjustMeter) {
      this.$store.commit('titleModification', this.$l.adjustMeter);
    }
    this.setMeters([
      { img: require('../assets/img/ic_launcher.png'), name: '无设备', address: '', code: '', longtitude: '', latitude: '', selected: true }
    ]);
    this.getAllMeters();
  }
};
</script>

<style lang='scss' scoped>
.selecteditem {
  position: relative; // background: red;
}

.selectedbg {
  position: absolute;
  right: .25rem;
  top: .25rem; // width: 75%;
  // height: 100%;
  // width: .5rem;
  // height: .5rem;
  // background: blue;
}
</style>
