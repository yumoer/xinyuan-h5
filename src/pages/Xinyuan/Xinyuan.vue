<template>
  <div class="contentInfo container-fluid">
    <div class="info_image container-fluid">
      <img src="../../assets/zoujinxinyuan.png" alt="">
    </div>
    <InfoFenlei/>
    <router-view></router-view>
    <!--<Jieshao v-if="JieshaoShow"/>
    <Linian v-else/>-->
  </div>
</template>

<script>
  import InfoFenlei from './InfoFenlei/InfoFenlei'
  import Jieshao from './Jieshao/Jieshao'
  import Linian from './Linian/Linian'
  export default {
    created () {
      this.resetTop()
    },
    data(){
      return{
        JieshaoShow:true,
      }
    },
    components: {
      InfoFenlei,
      Jieshao,
      Linian
    },
    methods: {
      resetTop () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .contentInfo{
    min-width 1200px
    height auto
    margin-top 72px
    .info_image{
      max-width 1500px
      height 76px
      img{
        width 100%
        height 100%
      }
      @media screen and (orientation:portrait){
        img{
          height 76px
        }
      }
    }
  }
</style>