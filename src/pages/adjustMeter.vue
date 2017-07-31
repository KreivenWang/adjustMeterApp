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
      x: 'adjustMeter'
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
