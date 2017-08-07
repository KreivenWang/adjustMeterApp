<template>
  <yd-accordion>
      <yd-accordion-item>
        <span slot="title">水表筛选：</span>
        <yd-cell-group>
          <yd-cell-item>
            <span slot="left">地区：</span>
            <yd-input slot="right" v-model="condition.meterAddr" ref="condition.meterAddr" placeholder="请输入搜索条件"></yd-input>
          </yd-cell-item>
          <yd-cell-item>
            <span slot="left">地址：</span>
            <yd-input slot="right" v-model="condition.meterAddr" ref="condition.meterAddr" placeholder="请输入搜索条件"></yd-input>
          </yd-cell-item>
          <yd-cell-item>
            <span slot="left">表号：</span>
            <yd-input slot="right" v-model="condition.meterCode" ref="condition.meterCode" placeholder="请输入搜索条件"></yd-input>
          </yd-cell-item>
          <yd-button-group>
            <yd-button size="large" type="primary">筛选</yd-button>
          </yd-button-group>
          <br>
        </yd-cell-group>
      </yd-accordion-item>
    </yd-accordion>
</template>
<script>
export default {
  data() {
    return {
      condition: {
        meterAddr: '',
        meterCode: '',
        meterArea: ''
      }
    };
  },
  methods: {

  },
  mounted() {
    /* eslint-disable no-undef */
    // var mp = new BMap.Map('mapContainer');
    // mp.centerAndZoom(new BMap.Point(121.491, 31.233), 11);
  }
};
</script>
<style lang='scss' scoped>
.mapContainer {
  width: 100%;
  height: 4rem;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
}
</style>