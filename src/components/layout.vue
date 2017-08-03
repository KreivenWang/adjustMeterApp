<template>
  <router-view>
  </router-view>
</template>
<script>
export default {
  methods: {
    setDefaultLocalStorage() {
      let key = 'platAddr';
      if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, 'qsq.astropulsion.com');
      }
      key = 'platPort';
      if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, 91);
      }
    }
  },
  mounted() {
    console.log('layout mounted');
  },
  created() {
    console.log('layout created');
    this.setDefaultLocalStorage();
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
