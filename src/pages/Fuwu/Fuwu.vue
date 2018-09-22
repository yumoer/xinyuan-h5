<template>
  <div class="contentInfo container-fluid">
    <div class="info_image container-fluid">
      <img src="../../assets/peitaofuwu.png" alt="">
    </div>
    <InfoFenlei/>
    <router-view></router-view>
  </div>
</template>

<script>
  import InfoFenlei from './InfoFenlei/InfoFenlei'
  export default {
    components: {
      InfoFenlei
    },
    methods: {
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
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
      .info_image{
        width 100%
        height 76px
        img{
          width 100%
          height 100%
        }
      }
    }
  }
</style>