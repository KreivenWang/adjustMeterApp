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
import * as platUrlApi from '../api/platUrl';
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
      // console.log('new: ' + val + ' old: ' + oldVal);
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
    loadPlatInfo() {
      this.platAddress = platUrlApi.getPlatAddress();
      this.platPort = platUrlApi.getPlatPort();
    },
    updatePlatInfo() {
      platUrlApi.setPlatUrl(this.platAddress, this.platPort);
    },
    tryUpdatePlatInfo() {
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