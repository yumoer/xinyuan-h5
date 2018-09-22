<template>
  <div class="contentInfo container-fluid">
    <!--<HeaderRouter/>-->
    <div class="info_image container-fluid">
      <img src="../../assets/xinwenzhongxin.png" alt="">
    </div>
    <InfoFenlei/>
    <router-view></router-view>
  </div>
</template>

<script>
  import InfoFenlei from './InfoFenlei/InfoFenlei'
  import {mapState} from 'vuex'
  export default {
    created(){
      this.resetTop()
    },
    methods:{
      resetTop () {
        window.scrollTo(0, 0)
      }
    },
    components: {
      InfoFenlei
    },
    computed:{
      /*接入数据*/
      // ...mapState(['getNewsCenter'])
    },
    mounted(){
      /*发送请求*/
      // this.$store.dispatch('getNewsCenter')
      // ...mapMutations(['getNewsCenter'])
    }

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