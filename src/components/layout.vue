<template>
  <router-view>
  </router-view>
</template>
<script>
import * as platUrlApi from '../api/platUrl';
export default {
  methods: {
  },
  mounted() {
    console.log('layout mounted');
  },
  created() {
    console.log('layout created');
    platUrlApi.setDefaultUrl();
  }
};
</script>

<style lang='scss'>
// @import '../assets/css/common.scss';
@import '../assets/css/consts.scss';
// body {
//   font-size: 22px;
//   font-family: Helvetica, sans-serif;
// }
</style>
