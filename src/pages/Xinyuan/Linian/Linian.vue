<template>
  <div class="info_content container" >
    <img src="../../../assets/SINCE2008.png" class="img-responsive" alt="">
    <div class="content_name" v-for="(philoso,index) in philosophy" :key="index">
      <span>{{philoso.companyName}}</span>
    </div>
    <div class="content_info" v-for="(philoso,index) in philosophy" :key="index">
      <span>{{philoso.pinyin}}</span>
    </div>
    <div class="content_pagetop">
      <div class="pagetop_top">
        <div class="top_left">
          <!--<img src="../../../assets/linian11.png" alt="">-->
          <div class="text_wrap" v-for="(philoso,index) in philosophy" :key="index">
            <span class="text_english">Corporate Philosophy</span>
            <span class="text_chinese">企业理念</span>
            <span class="text_info">{{philoso.companyIdea}}</span>
          </div>
        </div>
        <div class="top_right">
          <img src="../../../assets/linian2.png" alt="">
        </div>
      </div>
      <div class="pagetop_bottom">
        <div class="bottom_left">
          <img src="../../../assets/linian3.png" alt="">
        </div>
        <div class="bottom_right">
          <!--<img src="../../../assets/linian44.png" alt="">-->
          <div class="text_wrap" v-for="(philoso,index) in philosophy" :key="index">
            <span class="text_english">BODAXINYUAN</span>
            <span class="text_chinese">博大新元</span>
            <span class="text_info">{{philoso.companyVision}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content_pagebottom" v-for="(philoso,index) in philosophy" :key="index">
      <div class="bottom_left">
        <img src="../../../assets/ideaLinian.png" alt="">
        <p>{{philoso.companyDevelop}}</p>
      </div>
      <div class="bottom_center">
        <img src="../../../assets/ideaYuanjing.png" alt="">
        <p>{{philoso.companyVision}}</p>
      </div>
      <div class="bottom_right">
        <img src="../../../assets/ideaShiming.png" alt="">
        <p v-if="philoso.companyMission.split('  ')">{{philoso.companyMission.split('  ')[0]}}<br>{{philoso.companyMission.split('  ')[1]}}</p>
        <p v-else>{{philoso.companyMission}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {reqPhilosophy} from '../../../api'
  export default {
    data(){
      return{
        type:'idea',
        page:1,
        limit:2
      }
    },
    computed:{
      ...mapState(['philosophy'])
    },
    mounted(){
      // const {type,page,limit} = this

      // 发送ajax请求登陆
      this.$store.dispatch('getPhilosophy',this.type)
      // this.$store.dispatch('getPhilosophy',{type:this.type,page:this.page,limit:this.limit})
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .info_content{
    margin-bottom 82px
    > img{
      padding-top 32px
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
      > img{
        width 50%
      }
    }
    .content_name{
      padding-top 16px
      span{
        font-family "微软雅黑"
        font-size 22px
        font-weight bold
        color #333
      }
      @media screen and (min-width: 320px) and (max-width: 420px) {
        span{
          font-size 20px
        }
      }
    }
    .content_info{
      padding-top 10px
      margin-bottom 32px
      span{
        font-family "微软雅黑"
        font-size 16px
        color #999
      }
      @media screen and (min-width: 320px) and (max-width: 420px) {
        span{
          font-size 14px
        }
      }
    }
    .content_pagetop{
      width 100%
      height 470px
      .pagetop_top{
        width 100%
        height 186px
        .top_left{
          float left
          width 650px
          height 100%
          background url("../../../assets/linian11.png") no-repeat
          position relative
          .text_wrap{
            height auto
            float right
            position absolute
            top 20%
            right 20%
            .text_english{
              font-size 22px
              color #fff
              opacity .5
              display block
              text-align right
            }
            .text_chinese{
              font-size 30px
              color #fff
              display block
              margin-top 10px
              text-align right
            }
            .text_info{
              font-size 14px
              color #fff
              opacity .8
              display block
              margin-top 10px
              text-align right
            }
          }

          @media screen and (min-width: 320px) and (max-width: 420px) {
            img{
              width 100%
            }
          }
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
          .top_left{
            width 100%
          }
        }
        .top_right{
          float right
          max-width 450px
          line-height 185px
          img{
            max-width 450px
          }
          @media screen and (min-width: 320px) and (max-width: 420px) {
            img{
              width 100%
            }
          }
        }
      }
      .pagetop_bottom{
        width 100%
        height 285px
        .bottom_left{
          float left
          max-width 650px

          img{
            max-width 650px
          }
        }

        @media screen and (min-width: 320px) and (max-width: 420px) {
          .bottom_left{
            width 100%
            img{
              width 100%
            }
          }
        }
        .bottom_right{
          float right
          width 450px
          height 100%
          background url("../../../assets/linian44.png") no-repeat
          position relative
          .text_wrap{
            width auto
            height auto
            float right
            position absolute
            top 25%
            right 10%
            .text_english{
              font-size 18px
              color #fff
              opacity .5
              display block
              text-align right
            }
            .text_chinese{
              font-size 24px
              color #fff
              display block
              margin-top 10px
              text-align right
            }
            .text_info{
              font-size 12px
              color #fff
              opacity .8
              display inline-block
              margin-top 10px
              margin-left 60px
              text-align left
              overflow hidden
              text-overflow ellipsis
              display -webkit-box
              -webkit-box-orient vertical
              -webkit-line-clamp 4
            }
          }

          /*img{
            margin-bottom 88px
            max-width 467px
          }*/
          @media screen and (min-width: 320px) and (max-width: 420px) {
            img{
              width 104%
            }
          }
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
          .bottom_right{
            width 100%
          }
        }
      }
    }
    .content_pagebottom{
      margin-top 96px
      .bottom_left{
        writing-mode: tb-rl;/*从左向右 从右向左是 writing-mode: vertical-rl;*/
        float left
        position relative
        width 33.33%
        img{
          width 100%
          z-index -1
        }
        p{
          position absolute
          float right

          right 88px
          top 162px
          line-height 24px
          display inline
          text-decoration:underline
          color #87b1ea
          font-size 12px
          height 50%
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
          img{
            width 100%
          }
        }
      }
      @media screen and (min-width: 320px) and (max-width: 420px) {
        .bottom_left{
          margin-top 34px
        }
      }
      .bottom_center{
        writing-mode: tb-rl;/*从左向右 从右向左是 writing-mode: vertical-rl;*/
        float left
        position relative
        width 33.33%
        img{
          width 100%
          z-index -1
        }
        p{
          position absolute
          color #a3dadf
          float right
          display inline
          right 88px
          top 162px
          font-size 12px
          height 50%
          text-decoration:underline
          line-height 24px
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
          img{
            width 100%
          }
        }
      }
      @media screen and (min-width: 320px) and (max-width: 420px) {
        .bottom_center{
          margin-top 15px
        }
      }
      .bottom_right{
        writing-mode: tb-rl;/*从左向右 从右向左是 writing-mode: vertical-rl;*/
        float left
        position relative
        width 33.33%
        img{
          width 100%
          z-index -1
        }
        p{
          position absolute
          color #fbebcc
          float right
          display inline
          right 88px
          top 162px
          font-size 12px
          height 50%
          text-decoration:underline
          line-height 24px
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
          img{
            width 100%
          }
        }
      }
      @media screen and (min-width: 320px) and (max-width: 420px) {
        .bottom_right{
          margin-top 15px
        }
      }
    }
  }

  @media screen and (min-width: 320px) and (max-width: 420px) {
    .info_content{
      margin-bottom 34px
    }
  }
</style>