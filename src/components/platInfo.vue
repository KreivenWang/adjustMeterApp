<template>
  <yd-cell-group>
    <yd-cell-item>
      <span slot="left">平台地址：</span>
      <yd-input slot="right" required v-model="platAddress" ref="platAddress" placeholder="请输入平台地址"></yd-input>
    </yd-cell-item>
    <yd-cell-item>
      <span slot="left">端口号：</span>
      <yd-input slot="right" required v-model="platPort" ref="platPort" placeholder="请输入平台端口号"></yd-input>
    </yd-cell-item>
    <div v-if="showErrorTips" class="error-tips">{{errorTips}}</div>
  </yd-cell-group>
</template>
<script>
export default {
  props: {
    showErrors: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      platAddress: '',
      platPort: 0,
      errorTips: ''
    };
  },
  computed: {
    showErrorTips() {
      return this.errorTips !== '' && this.showErrors;
    }
  },
  watch: {
    platAddress(val, oldVal) {
      setTimeout(() => {
        this.tryUpdatePlatInfo();
      }, 10);
    },
    platPort(val, oldVal) {
      setTimeout(() => {
        this.tryUpdatePlatInfo();
      }, 10);
    }
  },
  methods: {
    validate() {
      let addrCheck = this.$refs.platAddress;
      let portCheck = this.$refs.platPort;
      this.errorTips = '';
      if (!addrCheck.valid) {
        this.errorTips = '平台地址' + addrCheck.errorMsg;
        return false;
      }
      if (!portCheck.valid) {
        this.errorTips = '平台端口号' + portCheck.errorMsg;
        return false;
      }
      return true;
    },
    commitPlatInfo() {
      let platInfo = {
        address: this.platAddress,
        port: this.platPort
      };
      this.$store.commit('platUrlModification', platInfo);
      console.log('commitPlatInfo: ' + this.$store.getters.getPlatUrl);
    },
    loadPlatInfo() {
      this.platAddress = localStorage.getItem('platAddr');
      this.platPort = localStorage.getItem('platPort');
      this.commitPlatInfo();
    },
    updatePlatInfo() {
      localStorage.setItem('platAddr', this.platAddress);
      localStorage.setItem('platPort', this.platPort);
      this.commitPlatInfo();
    },
    tryUpdatePlatInfo() {
      console.log('tryUpdatePlatInfo');
      if (!this.validate()) {
        return false;
      }
      this.updatePlatInfo();
      return true;
    }
  },
  beforeMount() {
    this.loadPlatInfo();
  },
  mounted() {
    console.log('platInfo mounted');
  },
  created() {
    console.log('platInfo created');
  }
};
</script>
<style lang='scss' scoped>
@import '../assets/css/errortips.scss';
</style>