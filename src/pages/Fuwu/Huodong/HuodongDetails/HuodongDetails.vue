<template>
  <div class="huodongdetails container">
    <div class="content_name">
      <span>{{servivebyid.businessName}}</span>
    </div>
    <div class="content_info">
      <span>{{servivebyid.pinyin}}</span>
    </div>
    <div class="content_shop" >
      <div class="shop_info">
        <div class="info_top">
          <p>{{servivebyid.businessName}}</p>
          <ul class="biaoqian">
            <li class="bg" v-if="servivebyid.keyWord.split(',')[0]">
              <span>{{servivebyid.keyWord.split(',')[0]}}</span>
              <img src="../../../../assets/gray.png" alt="">
            </li>
            <li class="bg" v-if="servivebyid.keyWord.split(',')[1]">
              <span>{{servivebyid.keyWord.split(',')[1]}}</span>
              <img src="../../../../assets/gray.png" alt="">
            </li>
            <li class="bg" v-if="servivebyid.keyWord.split(',')[2]">
              <span>{{servivebyid.keyWord.split(',')[2]}}</span>
              <img src="../../../../assets/gray.png" alt="">
            </li>
            <li class="bg" v-if="servivebyid.keyWord.split(',')[3]">
              <span>{{servivebyid.keyWord.split(',')[3]}}</span>
              <img src="../../../../assets/gray.png" alt="">
            </li>
            <!--<li class="bg">
              <span>休闲咖啡厅</span>
              <img src="../../../../assets/gray.png" alt="">
            </li>-->
          </ul>
        </div>
        <div class="info_center">
          <div class="center_wrap">
            <p>营业时间:&nbsp;&nbsp;{{servivebyid.businessHours}}</p>
            <p>联系电话:&nbsp;&nbsp;{{servivebyid.telephone}}</p>
            <p>地理位置:&nbsp;&nbsp;{{servivebyid.businessAddress}}</p>
          </div>
        </div>
        <div class="info_bottom">
          <ul class="bottom_wrap">
            <li class="wrap_list" v-if="servivebyid.freeService.split(',')[0]">
              <img src="../../../../assets/wifi.png" alt="">
              <span>提供wifi</span>
            </li>
            <li class="wrap_list" v-if="servivebyid.freeService.split(',')[1]">
              <img src="../../../../assets/stop.png" alt="">
              <span>停车场</span>
            </li>
          </ul>
        </div>
      </div>

      <el-carousel class="picimage" trigger="click" height="267px" style="width: 440px;margin-top: 80px">
        <el-carousel-item style="border: 1px solid #ddd" v-if="servivebyid.serviceImage.split(',')[0]">
          <img style="width: 440px;height: 267px" :src="servivebyid.serviceImage.split(',')[0]" alt="">
        </el-carousel-item>
        <el-carousel-item v-if="servivebyid.serviceImage.split(',')[1]">
          <img style="width: 440px;height: 267px" :src="servivebyid.serviceImage.split(',')[1]" alt="">
        </el-carousel-item>
        <el-carousel-item v-if="servivebyid.serviceImage.split(',')[2]">
          <img style="width: 440px;height: 267px" :src="servivebyid.serviceImage.split(',')[2]" alt="">
        </el-carousel-item>
        <el-carousel-item v-if="servivebyid.serviceImage.split(',')[3]">
          <img style="width: 440px;height: 267px" :src="servivebyid.serviceImage.split(',')[3]" alt="">
        </el-carousel-item>
        <el-carousel-item v-if="servivebyid.serviceImage.split(',')[4]">
          <img style="width: 440px;height: 267px" :src="servivebyid.serviceImage.split(',')[4]" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content_details">
      <div class="details_name">
        <span>活动详情</span>
      </div>
      <div class="huodong_details">
        <p>{{servivebyid.serviceAdvantage}}</p>
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
  .huodongdetails{
    .content_name{
      padding-top 38px
      span{
        font-family "微软雅黑"
        font-size 22px
        font-weight bold
        color #333
      }
    }
    .content_info{
      padding-top 10px
      margin-bottom 38px
      span{
        font-family "微软雅黑"
        font-size 16px
        color #999
      }
    }
    .content_shop{
      width 100%
      height 430px
      border 1px solid #000
      border-radius 10px
      box-shadow 10px 10px 10px rgba(0, 0, 0, 0.1)
      .shop_info{
        margin 0 30px
        float left
        .info_top{
          height 128px
          padding-top 30px
          position relative
          box-sizing border-box
          &:after{
            content ' '
            position absolute
            bottom 0
            left 0
            width 100%
            height 1px
            background-color #ddd
          }
          p{
            font-size 26px
            font-weight bold
            color #333
          }
          .biaoqian{
            margin-top 14px

            .bg{
              margin-right 12px
              float left
              display flex
              position relative

              img{
                width auto
                display inline-block
              }
              span{
                width 100%
                font-size 11px
                color #333
                display inline-block
                position absolute
                left 50%
                top 50%
                text-align center
                transform translate(-50%,-50%)
              }
            }
          }
        }
        .info_center{
          position relative
          &:after{
            content ' '
            position absolute
            bottom 0
            left 0
            width 100%
            height 1px
            background-color #ddd
          }
          .center_wrap{
            padding-top 30px
            padding-bottom 30px
            p{
              font-size 12px
              color #333
              line-height 20px
            }
          }
        }
        .info_bottom{
          width 500px
          height 177px
          position relative
          .bottom_wrap{
            position absolute
            top 40%
            transform translateY(-50%)
            /*margin-top 30px*/
            .wrap_list{
              float left
              margin-right 15px
              img{
                margin 0 auto
              }
              span{
                font-size 12px
                color #333
              }
            }
          }
        }
      }

      @media screen and (orientation:portrait){
        .shop_info{
          width 100%
          height 100%
          margin 0
          padding-left 20px
          .info_bottom{
            width 100%
            height 150px
          }
        }
        .picimage{
          display none
        }
      }
      @media screen and (orientation:portrait){
        .picimage{
          display none
        }
      }

    }
    .content_details{
      .details_name{
        margin-top 74px
        span{
          font-size 18px
          font-weight bold
          color #333
        }
      }
      @media screen and (orientation:portrait){
        .details_name{
          margin-top 34px
          span{
            font-size 16px
          }
        }
      }
      .huodong_details{
        margin-top 26px
        width 100%
        height 250px
        border 1px solid #ddd
        border-radius 5px
        margin-bottom 100px
        padding-top 30px
        box-sizing border-box
        p{
          font-size 12px
          color #333
          line-height 20px
          margin-left 30px
          margin-right 30px
        }
      }

      @media screen and (orientation:portrait){
        .huodong_details{
          margin-bottom 30px
        }
      }
    }
  }
</style>