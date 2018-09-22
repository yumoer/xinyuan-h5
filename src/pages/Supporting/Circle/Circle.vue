<template>
  <div id="container_wrap" >
    <header class="header">
      <img @click="jsFinish" src="../../../assets/img/btnback.png" alt="">
      <span>{{circlebyidapp.brandName}}</span>
    </header>
    <div class="content">
      <img :src="circlebyidapp.brandImage" alt="">
      <div class="text_info">
        <span class="text_name">{{circlebyidapp.brandName}}</span>
        <ul class="text_bq">
          <li class="text_border orange" v-if="circlebyidapp.keyWord.split(',')[0]">
            <span class="text_orange">{{circlebyidapp.keyWord.split(',')[0]}}</span>
          </li>
          <li class="text_border pink" v-if="circlebyidapp.keyWord.split(',')[1]">
            <span class="text_pink">{{circlebyidapp.keyWord.split(',')[1]}}</span>
          </li>
        </ul>
        <div class="text_circleone">
          <p>{{circlebyidapp.introduceDetail}}</p>
        </div>
        <!--<div class="text_circletwo">
          <p>{{circlebyidapp.introduceDetail}}</p>
        </div>-->
      </div>
    </div>
    <div class="line_bg"></div>
    <div class="bottom">
      <div class="shop_name">
        <span>品牌商家</span>
      </div>
      <ul class="shop_detail">
        <li class="shop_info" v-for="(circle,index) in circlebyidapp.businessManager" :key="index" @click="goto('/valueadded?id='+circle.id+'&token='+token)">
          <div class="shop_image" >
            <img :src="circle.businessImage" alt="">
          </div>
          <div class="shop_text" >
            <div class="text_name">
              <span>{{circle.businessName}}</span>
            </div>
            <div class="text_bq">
              <span>{{circle.keyWord.split(',').join(' | ')}}</span>
            </div>
            <div class="text_time">
              <span>{{circle.businessHours}}</span>
              <span>{{circle.telephone}}</span>
            </div>
            <div class="text_address">
              <span>{{circle.businessAddress}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapState} from 'vuex'
  // import {reqManagerById} from '../../../api'
  export default {
    inject:['reload'],
    data(){
      return{
        token:'',
        managerbyid:[]
      }
    },
    activated: function() {
      this.getCase()
    },
    methods: {
      jsFinish(){
        if(window.webkit){
          window.webkit.messageHandlers.popVC.postMessage({name:'popVC'})
        }else{
          interaction.h5_finish();
        }
      },
      async goto(path,i,page,limit,brandId,projectTypeId) {
        this.flag = i;
        this.$router.push(path)
        this.$store.dispatch('getCircleByIdApp',{id:location.href.split("?id=")[1].split('&')[0]})
        // window.location.reload()
      },
    },
    computed:{
      ...mapState(['circlebyidapp']),
      // ...mapState(['managerbyid']),

    },
    created(){
      const token = location.href.split("&token=")[1]
      this.token = token
    },
    async mounted(){
      axios.defaults.headers.common['X-AUTH-TOKEN'] = location.href.split("&token=")[1] //实例化Vue
      this.$store.dispatch('getCircleByIdApp',{id:location.href.split("?id=")[1].split('&')[0]})
      /*const result = await reqManagerById(page,limit,brandId,projectTypeId)
      const managerbyid = result.data
      this.managerbyid = managerbyid*/

      // this.$store.dispatch('getManagerById')


    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/stylus/mixins.styl"
  #container_wrap
    width 100%
    .header
      width 100%
      height 48pt
      background rgba(0,0,0,.3)
      position fixed
      z-index 1
      img
        display inline-block
        width 8pt
        height 14pt
        margin-left 10pt
        position absolute
        top 23pt
      span
        width 300px
        display block
        text-align center
        font-family "Microsoft YaHei"
        font-size 13pt
        color #fff
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        line-height 56pt
        margin 0 auto
    .content
      width 100%
      img
        width 100%
        height 175pt
      .text_info
        margin 28pt 10pt 25pt 10pt
        .text_name
          font-size 13pt
          color #333
          display block
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        .text_bq
          margin-top 15pt
          margin-bottom 0
          display inline-block
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          .text_border
            width 70pt
            height 25pt
            float left
            border-radius 20px
            position relative
            &.orange
              border 1px solid #fe8f02
            &.pink
              border 1px solid #fa677b
              margin-left 4pt
            span
              display block
              font-size 10pt
              text-align center
              text-align-all center
              position absolute
              left 50%
              top 50%
              transform translate(-50%,-50%)
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              width 65pt
              &.text_orange
                color #fe8f02
              &.text_pink
                color #fa677b

      .text_circleone
        margin-top 15pt
        p
          font-size 12pt
          color #333333
          font-family "Microsoft YaHei"
          text-align left
      .text_circletwo
        margin-top 20pt
        p
          font-size 12pt
          color #333333
          font-family "Microsoft YaHei"
          text-align left
    .line_bg
      width 100%
      height 10pt
      background #f2f2f2
    .bottom
      top-border-1px(#ddd)
      .shop_name
        padding 10pt
        span
          font-size 13pt
          color #333333
          font-family "Microsoft YaHei"
          text-align left

    .shop_detail
      width 100%
      height auto
      .shop_info
        width 100%
        height 100pt
        padding 15pt 10pt
        top-border-1px(#ddd)
        .shop_image
          width 30%
          height 70pt
          float left
          img
            width 100%
            height 100%
        .shop_text
          margin-left 5pt
          display inline-block
          float left
          width 68%
          .text_name
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            span
              font-family "Microsoft YaHei"
              font-size 12pt
              color #333333
              text-align left
          .text_bq
            margin-top 3pt
            span
              font-family "Microsoft YaHei"
              font-size 10pt
              color #333333
              text-align left
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              width 100%
              display block
          .text_time
            margin-top 3pt
            span
              font-family "Microsoft YaHei"
              font-size 10pt
              color #333333
              text-align left
          .text_address
            margin-top 3pt
            span
              font-family "Microsoft YaHei"
              font-size 10pt
              color #333333
              text-align left

</style>