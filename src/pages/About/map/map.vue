<template>
  <div id="allmap"></div>
</template>

<script>
  import BMap from 'BMap';
  export default {
    data(){
      return{
      }
    },
    mounted(){
      this.ready()
    },
    methods: {
      ready:function () {
        // 百度地图API功能
        let map = new BMap.Map("allmap");
        let point = new BMap.Point(116.51158,39.765579);
        map.centerAndZoom(point,18);
        map.addOverlay(new BMap.Marker(point));

        let stCtrl = new BMap.PanoramaControl(); //构造全景控件
        stCtrl.setOffset(new BMap.Size(0, 0));
        map.addControl(stCtrl);//添加全景控件
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #allmap {
    width 1100px
    height: 400px;
    overflow: hidden;
    margin:0;
    font-family:"微软雅黑";
    margin-bottom 30px
    float left
    left 50%
    margin-left -550px
    margin-top 20px
  }
</style>