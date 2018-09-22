<template>
  <div class="info_content container">
    <div class="content_name"  >
      <span>{{projectbyid.projectName}}</span>
    </div>
    <div class="content_info"  >
      <span>位置：{{projectbyid.projectAddress}}</span>
      <span>总建筑面积：{{projectbyid.buildingArea}}</span>
    </div>
    <div class="content_line"></div>
    <div class="content_projectone">
      <div class="projectone_left">
        <img :src="projectbyid.projectImage" alt="">
        <!--<img src="../../../../assets/zhuzhaiproject.png" alt="">-->
      </div>
      <div class="projectone_right">
        <span>{{projectbyid.projectName}}</span>
        <p >{{projectbyid.projectSummary}}</p>
      </div>
    </div>
    <div class="content_projecttwo">
      <div class="projecttwo_left">
        <p >{{projectbyid.projectContent}}</p>
      </div>
      <div class="projecttwo_right" >
        <img :src="projectbyid.projectImage" alt="">
        <!--<img src="../../../../assets/zhuzhaiproject.png" alt="">-->
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['projectbyid'])
    },
    mounted(){
      this.$store.dispatch('getProjectById',{id:location.href.split("?id=")[1]})
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .info_content{
    padding-bottom 96px
    .content_name{
      padding-top 32px
      span{
        font-family "微软雅黑"
        font-size 22px
        font-weight bold
        color #333
      }
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
      .content_name{
        span{
          font-size 18px
        }
      }
    }
    .content_info{
      padding-top 10px
      span{
        font-family "微软雅黑"
        font-size 12px
        color #333
        margin-right 26px
      }
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
      .content_info{
        span{
          font-size 14px
        }
      }
    }
    .content_line{
      margin-top 32px
      margin-bottom 32px
      border 1px solid #ddd
    }
    .content_projectone{
      height 250px
      .projectone_left{
        padding_top 46px
        float left
        img {
          width 510px
          height 250px
        }
      }
      @media screen and (min-width: 320px) and (max-width: 420px) {
        .projectone_left{
          img{
            width 100%
            height 160px
          }
        }
      }
      .projectone_right{
        max-width 560px
        height 250px
        float left
        margin-left 30px
        span{
          display inline-block
          margin-top 10px
          font-size 14px
          font-weight bold
          color #333
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
          span{
            margin-top 20px
          }
        }
        p{
          padding-top 34px
          font-size 12px
          color #333
          line-height 18px
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
          p{
            padding-top 20px
          }
        }
      }
      @media screen and (min-width: 320px) and (max-width: 420px) {
        .projectone_right{
          width 100%
          height auto
        }
      }
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
      .content_projectone{
        height auto
      }
    }
    .content_projecttwo{
      height 250px
      margin-top 50px
      width 100%
      .projecttwo_left{
        max-width 560px
        height 250px
        float left
        p{
          font-size 12px
          color #333
          line-height 18px
        }
      }
      @media screen and (min-width: 320px) and (max-width: 420px) {
        .projecttwo_left{
          height auto
          p{
            padding-top 20px
          }
        }
      }
      .projecttwo_right{
        max-width 510px
        float right
        margin-left 30px
        box-sizing border-box
        img {
          width 510px
          height 250px
        }
      }

      @media screen and (min-width: 320px) and (max-width: 420px) {
        .projecttwo_right{
          height auto
          margin-left 0
          img{
            margin-top 20px
            width 100%
            height 160px
          }
        }
      }
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
      .content_projecttwo{
        height auto
        margin-top 30px
      }
    }
  }
  @media screen and (min-width: 320px) and (max-width: 420px) {
    .info_content{
      padding-bottom 26px
    }
  }
</style>