<template>
  <div>
    <div id="this.mapContainer" class="this.mapContainer" v-my-css="{'height': height}">
    </div>
    <p>{{geoLocResult}}</p>
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
      map: null,
      geoLocResult: ''
    };
  },
  computed: {
  },
  methods: {
    initMap() {
      /* eslint-disable no-undef */
      this.map = new BMap.Map('this.mapContainer');
      this.map.centerAndZoom(new BMap.Point(121.491, 31.233), 11);

      // 添加缩放控件
      let opts = {
        type: BMAP_NAVIGATION_CONTROL_SMALL
      };
      this.map.addControl(new BMap.NavigationControl(opts));

      // 添加定位控件
      var geolocationControl = new BMap.GeolocationControl();
      geolocationControl.addEventListener('locationSuccess', (e) => {
        // 定位成功事件
        var address = '';
        address += e.addressComponent.province;
        address += e.addressComponent.city;
        address += e.addressComponent.district;
        address += e.addressComponent.street;
        address += e.addressComponent.streetNumber;
        console.log(address);
        // alert('当前定位地址为：' + address);
        this.drawMeters();
      });
      geolocationControl.addEventListener('locationError', (e) => {
        // 定位失败事件
        alert(e.message);
      });
      this.map.addControl(geolocationControl);
      this.locate();
      this.drawMeters();
    },
    locate() {
      //定位
      this.geoLocResult = '正在定位...';
      let geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition((result) => {
        this.addGeoLocMarker(result.point);
        this.map.panTo(result.point);
        this.geoLocResult = '定位成功，' + result.point.lng + ' ' + result.point.lat;
      }, (err) => {
        this.geoLocResult = err.mf;
        console.log(err);
      });
    },
    //定位点
    addGeoLocMarker(point) {
      /* eslint-disable no-undef */
      let marker = new BMap.Marker(point);
      this.map.addOverlay(marker);
    },
    //水表点
    addMeterMarker(point) {
      let vectorMarker = new BMap.Marker(new BMap.Point(point.lng, point.lat - 0.03), {
        // 指定Marker的icon属性为Symbol
        icon: new BMap.Symbol(BMap_Symbol_SHAPE_POINT, {
          scale: 1, //图标缩放大小
          fillColor: 'orange', //填充颜色
          fillOpacity: 0.9 //填充透明度
        })
      });
      this.map.addOverlay(vectorMarker);
      // vectorMarker.show();
    },
    drawMeters() {
      let meters = this.$store.getters.getMeters;
      meters.forEach((meter) => {
        this.addMeterMarker({
          lng: meter.longtitude,
          lat: meter.latitude
        });
      }, this);
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>
<style lang='scss' scoped>
.this.mapContainer {
  width: 100%; // height: 4rem;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
}
</style>