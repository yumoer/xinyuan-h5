<template>
  <div class="contentInfo container-fluid">
    <div class="info_image container-fluid">
      <img src="../../assets/zhuzhaixiangmu.png" alt="">
    </div>
    <InfoFenlei/>
    <router-view></router-view>
  </div>
</template>

<script>
  import InfoFenlei from '../../pages/Zhuzhai/InfoFenlei/InfoFenlei'
  // import InfoFenlei from './InfoFenlei/InfoFenlei'
  export default {
    components:{
      InfoFenlei
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .contentInfo{
    min-width 1200px
    height auto
    .info_image{
      max-width 1500px
      height 76px
      margin-top 72px
      img{
        width 100%
        height 100%
      }
      /*@media screen and (orientation:portrait){
        img{
          height 76px
        }
      }*/
    }
  }
</style>