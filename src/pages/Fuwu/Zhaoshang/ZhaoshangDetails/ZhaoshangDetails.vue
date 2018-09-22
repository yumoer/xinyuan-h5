<template>
  <div class="info_content container">
    <div class="content_name">
      <span>{{servivebyid.businessName}}</span>
    </div>
    <div class="content_info" v-if="servivebyid.keyWord.split(',').join('|')">
      <span>{{servivebyid.keyWord.split(',').join(' | ')}}</span>
    </div>
    <div class="content_line"></div>
    <div class="content_projectone">
      <div class="projectone_left">
        <img :src="servivebyid.businessImage.split(',')[0]" alt="">
        <!--<img src="../../../../assets/zhuzhai1.png" alt="">-->
      </div>
      <div class="projectone_right">
        <div class="house_name">
          <span>{{servivebyid.businessName}}</span>
        </div>
        <div class="house_biaoqian">
          <div class="biaoqian_two" v-if="servivebyid.keyWord.split(',')[0]">
            <span>{{servivebyid.keyWord.split(',')[0]}}</span>
          </div>
          <div class="biaoqian_two" v-if="servivebyid.keyWord.split(',')[1]">
            <span>{{servivebyid.keyWord.split(',')[1]}}</span>
          </div>
          <div class="biaoqian_two" v-if="servivebyid.keyWord.split(',')[2]">
            <span>{{servivebyid.keyWord.split(',')[2]}}</span>
          </div>
        </div>
        <div class="house_info">
          <div class="info_shebei">
            <span>店铺设备：{{servivebyid.serviceDevice}}</span>
          </div>
          <div class="info_time">
            <span>可入住时间：{{servivebyid.checkInTime.split('T')[0]}}</span>
          </div>
          <div class="info_youshi">
            <span>店铺优势：{{servivebyid.serviceAdvantage}}</span>
          </div>
          <div class="info_weizhi">
            <span>项目位置：{{servivebyid.businessAddress}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content_projecttwo">
      <div class="projecttwo_left">
        <p>{{servivebyid.businessContent}}</p>
      </div>
      <div class="projecttwo_right">
        <img :src="servivebyid.businessImage.split(',')[1]" alt="">
        <!--<img src="../../../../assets/zhuzhai1.png" alt="">-->
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['servivebyid']),
    },
    mounted(){
      this.$store.dispatch('getServiveById',{id:location.href.split("?id=")[1]}) /*{id:location.href.split("?")[1]}*/
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .info_content {
    padding-bottom 96px
    .content_name {
      padding-top 32px
      span {
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
    .content_info {
      padding-top 10px
      span {
        font-family "微软雅黑"
        font-size 16px
        color #999
      }
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
      .content_info{
        span{
          font-size 12px
        }
      }
    }
    .content_line {
      margin-top 32px
      margin-bottom 46px
      border 0.5px solid #999
    }
    .content_projectone {
      height 250px
      .projectone_left {
        padding_top 46px
        float left
        width 510px
        img {
          width 510px
          height 250px
        }
      }
      .projectone_right {
        width 560px
        height 250px
        float right
        .house_name {
          margin-left 30px
          margin-top 30px
          span {
            font-size 22px
            font-weight bold
            color #333
          }
        }
        .house_biaoqian {
          float left
          margin-top 18px
          .biaoqian_two {
            float left
            margin-left 30px
            width 76px
            height 20px
            background-image url("../../../../assets/gray.png")
            span {
              float left
              font-size 12px
              color #333
              margin-top 1px
              display block
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              width 100%
              text-align center
            }
          }
        }
        .house_info {
          margin-top 50px
          margin-left 30px
          .info_shebei {
            margin-bottom 2px
            span {
              font-size 12px
              color #333
            }
          }
          .info_time {
            margin-bottom 2px
            span {
              font-size 12px
              color #333
            }
          }
          .info_youshi {
            margin-bottom 2px
            span {
              font-size 12px
              color #333
            }
          }
          .info_weizhi {
            margin-bottom 2px
            span {
              font-size 12px
              color #333
            }
          }
        }
      }

    }
  }
    /*@media screen and (min-width: 320px) and (max-width: 420px) {
      .content_projectone{

        .projectone_left{
          width 100%
          img{
            width 100%
            height 200px
          }
        }
        .projectone_right{
          width 100%
          .house_name{
            margin-left 0
          }
          .house_biaoqian{
            .biaoqian_one{
              margin-left 0
            }
            .biaoqian_two{
              margin-left 10px
            }
          }
          .house_info{
            margin-left 0
          }
        }
      }
    }
    .content_projecttwo{
      height 250px
      margin-top 50px
      width 100%
      .projecttwo_left{
        width 560px
        height 250px
        float left
        p{
          font-size 12px
          color #333
          line-height 18px
        }
      }
      .projecttwo_right{
        float right
        margin-left 30px
        width 510px
        img {
          width 510px
          height 250px
        }
      }

    }*/
    /*@media screen and (min-width: 320px) and (max-width: 420px) {
      .content_projecttwo{
        width 100%
        height auto
        .projecttwo_left{
          width 100%
          height auto
          margin-top -20px
          p{
            width 100%
          }
        }
        .projecttwo_right{
          width 100%
          margin-top 20px
          img{
            width 100%
            height 200px
          }
        }
      }
    }
  }*/
  /*@media screen and (min-width: 320px) and (max-width: 420px) {
    .info_content{
      padding-bottom 34px
    }
  }*/
</style>