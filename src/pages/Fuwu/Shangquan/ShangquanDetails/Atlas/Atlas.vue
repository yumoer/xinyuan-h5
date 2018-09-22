<template>
  <el-carousel id="atlas" :interval="5000" type="card" trigger="click" indicator-position="none" height="260px" v-if="circlebyid.justPlain.length>3">
    <el-carousel-item v-if="circlebyid.justPlain.split(',')[0]">
      <!--<img src="../../../../../assets/atlas2.png" alt="">-->
      <img :src="circlebyid.justPlain.split(',')[0]" alt="">
    </el-carousel-item>
    <el-carousel-item v-if="circlebyid.justPlain.split(',')[1]">
      <!--<img src="../../../../../assets/atlas2.png" alt="">-->
      <img :src="circlebyid.justPlain.split(',')[1]" alt="">
    </el-carousel-item>
    <el-carousel-item v-if="circlebyid.justPlain.split(',')[2]">
      <!--<img src="../../../../../assets/atlas2.png" alt="">-->
      <img :src="circlebyid.justPlain.split(',')[2]" alt="">
    </el-carousel-item>
    <el-carousel-item v-if="circlebyid.justPlain.split(',')[3]">
      <!--<img src="../../../../../assets/atlas2.png" alt="">-->
      <img :src="circlebyid.justPlain.split(',')[3]" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    methods: {},
    computed:{
      ...mapState(['circlebyid'])
    },
    mounted(){
      this.$store.dispatch('getCircleById',{id:location.href.split("?")[1]})
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .el-carousel{
    width 100%
    margin-top 20px
    .el-carousel__item img {
      margin: 0;
      width 550px
      height 260px
    }
  }

  @media screen and (min-width: 320px) and (max-width: 420px) {
    .el-carousel{
      margin-top 20px
    }
  }
</style>