<template>
  <nav class="navbar navbar-default navbar-fixed-top yumo_nav" v-show="$route.meta.showHeader">
      <div class="container yumo_container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header yumo_header">
          <button type="button" class="navbar-toggle collapsed yumo_button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="item_logo" href="#/home"><img src="../../assets/logo.png" alt=""></a>
        </div>

        <div class="collapse navbar-collapse yumoer_collapse" id="bs-example-navbar-collapse-1">
          <!--<a class="item_logo" style="display: inline-block;float: left;margin-top: 9px" href="#/home"><img src="../../assets/logo.png" alt=""></a>-->
          <ul class="nav navbar-nav yumo_navbar">
            <li class="list" @click="goto('/home')" >
              <a href="javascript:;" @mouseenter="addActive($event)" @mouseleave="removeActive($event)" :class="{active: out && isCurrent('/home')}">
                <span>首页</span>
                <span class="bg"></span>
              </a>
            </li>
            <li class="list" >
              <a href="javascript:;" @click="goto('/comeXY')" @mouseenter="addActive($event)" @mouseleave="removeActive($event)" :class="{active: out &&( isCurrent('/comeXY/introduction') || isCurrent('/comeXY/idea'))}"><!--:class="{active: isCurrent('/comeXY/introduction') || isCurrent('/comeXY/idea')}"-->
                <span>走进新元</span>
                <span class="bg"></span>
              </a>
              <div class="active_erji" @mouseenter="addActive($event)" @mouseleave="removeActive($event)">
                <div class="background_image" style="z-index: 4">
                  <ul class="erji_item" >
                    <li class="erji_list">
                      <a href="javascript:;" @click="goto('/comeXY/introduction')"><span>企业介绍</span></a>
                    </li>
                    <li class="erji_list">
                      <a href="javascript:;" @click="goto('/comeXY/idea')"><span>企业理念</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="list" >
              <a href="javascript:;" @mouseenter="addActive($event)" @mouseleave="removeActive($event)" @click="goto('/news_center')" :class="{active:  out &&(isCurrent('/news_center/company') || isCurrent('/news_center/companydetails') || isCurrent('/news_center/party') || isCurrent('/news_center/partydetails') || isCurrent('/news_center/security') || isCurrent('/news_center/securitydetails')) } ">
                <span>新闻中心</span>
                <span class="bg"></span>
              </a>
              <div class="active_erji" @mouseenter="addActive($event)" @mouseleave="removeActive($event)">
                <div class="background_image" style="z-index: 3">
                  <ul class="erji_item">
                    <li class="erji_list" >
                      <a href="javascript:;" @click="goto('/news_center/company')"><span>公司要闻</span></a>
                    </li>
                    <li class="erji_list" >
                      <a href="javascript:;" @click="goto('/news_center/party')"><span>党建园区</span></a>
                    </li>
                    <li class="erji_list" >
                      <a href="javascript:;" @click="goto('/news_center/security')"><span>安全园区</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="list" >
              <a href="javascript:;" @mouseenter="addActive($event)" @mouseleave="removeActive($event)" @click="goto('/residential')" :class="{active: out &&(isCurrent('/residential/operating') || isCurrent('/residential/operatingdetails') || isCurrent('/residential/underconstruction') || isCurrent('/residential/underconstructiondetails'))} ">
                <span>住宅项目</span>
                <span class="bg"></span>
              </a>
              <div class="active_erji" @mouseenter="addActive($event)" @mouseleave="removeActive($event)">
                <div class="background_image" style="z-index: 2">
                  <ul class="erji_item">
                    <li class="erji_list" >
                      <a href="javascript:;" @click="goto('/residential/operating')"><span>运营项目</span></a>
                    </li>
                    <li class="erji_list" >
                      <a href="javascript:;" @click="goto('/residential/underconstruction')"><span>在建项目</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="list" >
              <a href="javascript:;" @mouseenter="addActive($event)" @mouseleave="removeActive($event)" @click="goto('/assortService')" :class="{active:  out &&(isCurrent('/assortService/circle') || isCurrent('/assortService/circledetails/trading') || isCurrent('/assortService/circledetails/atlas') || isCurrent('/assortService/circledetails/brand') || isCurrent('/assortService/businessactivity') || isCurrent('/assortService/businessactivitydetails') || isCurrent('/assortService/value-added') || isCurrent('/assortService/value-addeddetails') || isCurrent('/assortService/merchantsinfo') || isCurrent('/assortService/merchantsinfodetails'))}">
                <span>配套服务</span>
                <span class="bg"></span>
              </a>
              <div class="active_erji" @mouseenter="addActive($event)" @mouseleave="removeActive($event)">
                <div class="background_image" style="z-index: 1">
                  <ul class="erji_item">
                    <li class="erji_list" >
                      <a href="javascript:;" @click="goto('/assortService/circle')"><span>商圈介绍</span></a>
                    </li>
                    <li class="erji_list" >
                      <a href="javascript:;" @click="goto('/assortService/businessactivity')"><span>商业活动</span></a>
                    </li>
                    <li class="erji_list" >
                      <a href="javascript:;" @click="goto('/assortService/value-added')"><span>增值服务</span></a>
                    </li>
                    <li class="erji_list" >
                      <a href="javascript:;" @click="goto('/assortService/merchantsinfo')"><span>招商信息</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="list"  @click="goto('/zhaopin')" >
              <a href="javascript:;" @mouseenter="addActive($event)" @mouseleave="removeActive($event)" :class="{active: out &&(isCurrent('/zhaopin'))}">
                <span>招聘信息</span>
                <span class="bg"></span>
              </a>
            </li>
            <li class="list"  @click="goto('/about')" >
              <a href="javascript:;" @mouseenter="addActive($event)" @mouseleave="removeActive($event)" :class="{active: out &&(isCurrent('/about'))}">
                <span>关于我们</span>
                <span class="bg"></span>
              </a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right yumo_right">
            <!--<li class="list yumo_search">-->
            <!--<a href="javascript:;"><img src="../../assets/p31.png" alt=""></a>-->
            <!--</li>-->
            <li class="list">
              <!--<span class="split"></span>-->
              <a href="javascript:;">Login</a>
            </li>
            <li class="list">
              <!--<span class="split"></span>-->
              <a href="javascript:;">OA</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
  export default {
    inject: ['reload'],
    data(){
      return{
          timeOut2:null,
          timeOut:null,
          out:true,
      }
    },
    methods: {
      goto(path) {
        this.$router.push(path)
      },
      isCurrent(path) {
        // console.log(this.$route.path)
        return this.$route.path === path

      },
      addActive($event){
        let self = this;
        clearTimeout(this.timeOut);
        clearTimeout(this.timeOut2);
        this.timeOut = setTimeout(function(){
          self.out = false;
        },200);
        // $event.currentTarget.className="active";

      },
      removeActive($event){
        let self = this;
        clearTimeout(this.timeOut2);
        clearTimeout(this.timeOut);
        this.timeOut2 = setTimeout(function(){
          self.out = true;
        },200);


        // $event.currentTarget.className="";
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../static/css/stylus/mixins.styl"
  .yumo_nav
    background-color: #fff;
    border none
    margin-bottom 0
    padding auto 0
    line-height 74px
    min-width 1200px
    .yumo_container
      line-height 74px
      .yumo_header
        line-height 74px
        padding-top 8px
        margin-right 100px

        .item_logo
          @media screen and (min-width 420px) and (max-width 1000px){
            .item_logo{
              display none
            }
          }
        .yumo_button
          margin-right -100px
      .yumoer_collapse
        line-height 74px
        margin-bottom 0
        .yumo_navbar
          margin-left 34px

          .list
            &:first-child
              width 56px
            width 84px
            height 74px
            a
              display block
              padding 0
              text-decoration none
              line-height 74px
              color #000
              height 100%
              span
                font-family "微软雅黑"
                font-weight bold
                font-size 14px
                display block
                line-height 74px
                text-align center
                height 100%
              .bg
                display block
                line-height 74px
                background-color #ea5504
                margin-top 0
                opacity 0.8
                height 0
                -webkit-transition margin-top 200ms linear,opacity 120ms linear,height 200ms linear
                -moz-transition margin-top 200ms linear,opacity 120ms linear
                -o-transition margin-top 200ms linear,opacity 120ms linear
            .active
              span
                color #fff
              .bg
                margin-top -74px
                opacity 1
                height 100%
            &:hover
              a
                span
                  color #fff
                .bg
                  margin-top -74px
                  opacity 1
                  height 100%
              .active_erji
                opacity: 1;
                .background_image
                  margin-top 0
                  opacity 1
                  height 56px
                  .erji_item
                    height 56px
                    .erji_list
                      height 100%
                      a
                        display block
                        height 100%
                        span
                          color #fff
                          display block
                          opacity 1
                          font-size 14px
                          margin-top -10px
                          transition font-size 200ms,color 300ms
            .active_erji
              position relative
              opacity: 1;
              transition opacity 300ms
              .background_image
                width 1500px
                height 0
                background-color #4c4a4f
                position absolute
                transition margin-top 200ms linear,height 200ms linear
                .erji_item
                  margin-left 72px;
                  display inline-block
                  height 0
                  width 100%
                  transition height 200ms
                  .erji_list
                    height 100%
                    display inline-block
                    a
                      display block
                      height 100%
                      &:hover
                        span
                          color #ea5504
                      span
                        height 0
                        display block
                        font-weight bold
                        font-size 0
                        color #fff
                        opacity 1
                        float left
                        padding-right 24px
                        padding-left 12px
                        transition color 300ms,font-size 50ms
            @media screen and (min-width: 320px) and (max-width: 420px) {
              .active_erji{
                display none
              }
            }
          @media screen and (min-width: 320px) and (max-width: 420px) {
            .list {
              &:first-child{
                width 100%
              }
              width 100%
            }
          }
        @media screen and (min-width: 320px) and (max-width: 420px) {
          .yumo_navbar {
            margin-left 0px
            padding-right 15px
          }
        }

        .yumo_right
          display inline-block
          height 72px
          white-space nowrap
          .yumo_search
            a{
              img{
                margin-top 2px
              }
            }
          .list
            height 100%
            a
              font-family "微软雅黑"
              font-weight bold
              color #333
              font-size 14px
              text-decoration none
              line-height 45px
            @media screen and (min-width: 320px) and (max-width: 420px) {
              a {
                font-size 10px
              }
            }
        @media screen and (min-width: 320px) and (max-width: 420px) {
          .yumo_right{
            display none
          }
        }
</style>