<template>
  <div>
    <div>
      hello {{x}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      x: 'test'
    };
  },
  mounted() {
    // if (this.$store.getters.getTitle !== this.$l.userCenter) {
    //   this.$store.commit('titleModification', this.$l.userCenter);
    // }
  }
};
</script>

<style lang='scss' scoped>

</style>
