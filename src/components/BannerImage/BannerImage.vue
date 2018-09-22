<template>
  <el-carousel class='wrap_container container-fluid' :interval="5000" arrow="hover" trigger="click" height="373px">
    <el-carousel-item class="wrap_content" v-for="(banner,index) in toJson(homebanner[0].topImages)" :key="index">
      <a href="javascript:;" target="_blank" v-if="toJson(banner).id" @click="goto('/'+toJson(banner).typeNavigation+'/'+toJson(banner).typeModel+'details?id='+toJson(banner).id)" >
        <img style="width: 1500px;height: 373px;overflow: hidden" :src="toJson(banner).image">
      </a>
      <a href="javascript:;" target="_blank" v-else @click="goto('/'+toJson(banner).typeNavigation+'/'+toJson(banner).typeModel+'')">
        <img style="width: 1500px;height: 373px;overflow: hidden" :src="toJson(banner).image">
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        banner:[],
      }
    },
    created(){
      const banner = JSON.parse(this.homebanner[0].topImages)
      // console.log(JSON.parse(this.homebanner[0].topImages)
      this.getbanner(banner)
    },
    methods: {
      goto(path) {
        const { href } = this.$router.resolve(path)
        window.open(href, '_blank')
      },
      toJson:function(str){
        const _str =JSON.parse(str);
        // console.log(_str);
        return _str;
      },

      getbanner(banner){
        this.banner = banner
      }
    },
    computed: {
      ...mapState(['homebanner']),
    },
    mounted() {
      this.$store.dispatch('getHomeBanner')
      console.log(this.homebanner[0].topImages)
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap_container{
    height 373px
    max-width 1500px
  }
  /*@media screen and (orientation:portrait){
    .wrap_container{
      height 200px
      el-carousel-item{
        height 200px
        img{
          height 200px
        }
      }
    }
  }*/
</style>