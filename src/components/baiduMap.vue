<template>
  <div id="mapContainer" class="mapContainer" v-my-css="{'height': height}">
  </div>
</template>
<script>
export default {
  props: {
    height: {
      type: String,
      default: '4rem'
    }
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {

  },
  mounted() {
    /* eslint-disable no-undef */
    var mp = new BMap.Map('mapContainer');
    mp.centerAndZoom(new BMap.Point(121.491, 31.233), 11);
  }
};
</script>
<style lang='scss' scoped>
.mapContainer {
  width: 100%;
  // height: 4rem;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
}
</style>