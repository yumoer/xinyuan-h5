<template>
  <div id="container_wrap">
    <header class="header">
      <img @click="jsFinish" src="../../../assets/img/btnback.png" alt="">
      <span>{{managerbyidapp.businessName}}</span>
    </header>
    <div class="content">
      <img :src="managerbyidapp.businessImage.split(',')[0]" alt="">
      <div class="text_info">
        <span class="text_name">{{managerbyidapp.businessName}}</span>
        <ul class="text_bq">
          <li class="text_border orange">
            <span class="text_orange">{{managerbyidapp.keyWord.split(',')[0]}}</span>
          </li>
          <li class="text_border pink">
            <span class="text_pink">{{managerbyidapp.keyWord.split(',')[1]}}</span>
          </li>
        </ul>
        <div class="text_circleone">
          <p>开业时间 : {{managerbyidapp.openInTime.split('T')[0]}}</p>
        </div>
        <div class="text_circletwo">
          <p>地理位置 : {{managerbyidapp.businessAddress}}</p>
        </div>
      </div>
    </div>
    <div class="line_bg"></div>
    <div class="bottom">
      <p>{{managerbyidapp.businessContent}}</p>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import axios from 'axios'
  export default {
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
      ...mapState(['managerbyidapp'])
    },
    mounted(){
      axios.defaults.headers.common['X-AUTH-TOKEN'] = location.href.split("&token=")[1] //实例化Vue
      this.$store.dispatch('getManagerByIdApp',{id:location.href.split("?id=")[1].split('&')[0]})
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
        margin 28pt 10pt 20pt 10pt
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
          color #666
          font-family "Microsoft YaHei"
          text-align left
      .text_circletwo
        margin-top 5pt
        p
          font-size 12pt
          color #333333
          font-family "Microsoft YaHei"
          text-align left
    .line_bg
      top-border-1px(#ddd)
    .bottom
      margin 40pt 10pt 30pt 10pt
      p
        font-size 11pt
        color #333333
        font-family "Microsoft YaHei"
        text-align left
        &.text_bottom
          margin-top 20pt
      img
        margin-top 20pt
        width 100%
        height 205pt
</style>