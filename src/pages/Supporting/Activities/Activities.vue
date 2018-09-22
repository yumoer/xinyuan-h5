<template>
  <div id="container_wrap">
    <header class="header">
      <img @click="jsFinish" src="../../../assets/img/btnback.png" alt="">
      <span>{{allmessagebyidapp.businessName}}</span>
    </header>
    <div class="content">
      <img :src="allmessagebyidapp.businessImage" alt="">
      <div class="text_info">
        <span class="text_name">{{allmessagebyidapp.businessName}}</span>
        <ul class="text_bq">
          <li class="text_border" v-if="allmessagebyidapp.keyWord.split(',')[0]">
            <span class="text_black">{{allmessagebyidapp.keyWord.split(',')[0]}}</span>
          </li>
          <li class="text_border" v-if="allmessagebyidapp.keyWord.split(',')[1]">
            <span class="text_black">{{allmessagebyidapp.keyWord.split(',')[1]}}</span>
          </li>
          <li class="text_border" v-if="allmessagebyidapp.keyWord.split(',')[2]">
            <span class="text_black">{{allmessagebyidapp.keyWord.split(',')[2]}}</span>
          </li>
        </ul>
        <div class="text_circleone">
          <p>营业时间 : {{allmessagebyidapp.businessHours}}</p>
        </div>
        <div class="text_circletwo">
          <p>联系电话 : {{allmessagebyidapp.telephone}}</p>
        </div>
        <div class="text_circletwo">
          <p class="text_left" style="float: left">地理位置 : {{allmessagebyidapp.businessAddress}}</p>
        </div>
      </div>
      <!--<div class="info_bottom">-->
        <!--<ul class="bottom_wrap">-->
          <!--<li class="wrap_list" v-if="allmessagebyidapp.freeService.split(',')[0]">-->
            <!--<img src="../../../assets/wifi.png" alt="">-->
            <!--<span>提供wifi</span>-->
          <!--</li>-->
          <!--<li class="wrap_list" v-if="allmessagebyidapp.freeService.split(',')[1]">-->
            <!--<img src="../../../assets/stop.png" alt="">-->
            <!--<span>停车场</span>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
    </div>

    <div class="line_bg"></div>
    <div class="bottom">
      <div class="shop_name">
        <span>活动详情</span>
      </div>
      <ul class="shop_detail">
        <li class="shop_info" v-for="(allmessage,index) in allmessagebyidapp.salesPromotionList" :key="index">
          <div class="shop_image Type_one" v-show="allmessage.sellerType===1">
            <span>领</span>
          </div>
          <div class="shop_image Type_two" v-show="allmessage.sellerType===2">
            <span>惠</span>
          </div>
          <div class="shop_image Type_three" v-show="allmessage.sellerType===3">
            <span class="Typethree">体</span>
          </div>
          <div class="shop_text">
            <div class="text_name">
              <span>{{allmessage.couponForm}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import axios from 'axios'
  export default {
    data(){
      return{

      }
    },
    methods: {
      jsFinish(){
        if(window.webkit){
          window.webkit.messageHandlers.popVC.postMessage({name:'popVC'})
        }else{
          interaction.h5_finish();
        }
      },
    },
    computed:{
      ...mapState(['allmessagebyidapp'])
    },
    mounted(){
      axios.defaults.headers.common['X-AUTH-TOKEN'] = location.href.split("&token=")[1] //实例化Vue
      this.$store.dispatch('getAllmessageByIdApp',{id:location.href.split("?id=")[1].split('&')[0]})
    }
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
      img
        display inline-block
        width 10pt
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
        margin 28pt 10pt 40pt 10pt
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
          .text_border
            width 70pt
            height 24pt
            float left
            border-radius 20px
            position relative
            border 1px solid #ddd
            margin-left 5pt
            overflow hidden
            &.text_border:first-child
              margin-left 0
            span
              width 65pt
              display block
              font-size 10pt
              text-align center
              text-align-all center
              position absolute
              left 50%
              top 50%
              transform translate(-50%,-50%)
              color #999
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
        .text_circleone
          margin-top 15pt
          p
            font-size 11pt
            color #333333
            font-family "Microsoft YaHei"
            text-align left
        .text_circletwo
          margin-top 5pt
          /*.text_left
            float left
          .text_right
            float right*/
          p
            font-size 11pt
            color #333333
            font-family "Microsoft YaHei"
            text-align left
      .info_bottom
        width 100%
        top-border-1px(#ddd)
        height 70pt
        .bottom_wrap
          padding-top 30pt
          transform translateY(-50%)
          /*margin-top 30px*/
          .wrap_list
            float left
            margin-left 10pt
            img
              width 18pt
              height 18pt
              margin 0 auto
            span
              font-size 10pt
              color #333
              display block
              margin-top 5pt
    .line_bg
      width 100%
      height 10pt
      background #f2f2f2
    .bottom
      top-border-1px(#ddd)
      .shop_name
        padding 10pt 0 10pt 10pt
        bottom-border-1px(#ddd)
        span
          font-size 13pt
          color #333333
          font-family "Microsoft YaHei"
          text-align left

    .shop_detail
      width 100%
      height auto
      padding 15pt 10pt
      margin-bottom 0
      .shop_info
        width 100%
        height 25pt
        .shop_image
          width 14pt
          height 14pt
          float left
          &.Type_one
            background-color #FD635A
          &.Type_two
            background-color #FD6996
          &.Type_three
            background-color #FFA334
          span
            color #fff
            font-size 10pt
            margin auto
            line-height 16pt
            display block
            text-align center
        .shop_text
          margin-left 5pt
          display inline-block
          float left
          width 91%
          .text_name
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            span
              font-family "Microsoft YaHei"
              font-size 11pt
              color #333333
              text-align left
</style>