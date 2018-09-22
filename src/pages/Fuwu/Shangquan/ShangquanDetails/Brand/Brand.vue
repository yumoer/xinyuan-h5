<template>
  <el-carousel id="brand" class="details_bottom" :interval="5000" arrow="always" trigger="click" height="260px">
    <el-carousel-item class="bottomItem" v-for="(circle,index) in circlebyid.brandMarketersList" :key="index">
      <div class="swiper-slide">
        <div class="shopinfo">
          <!--<img class="one" src="../../../../../assets/atlas4.png" alt="">-->
          <img class="one" :src="circle.merchantsImage.split(',')[0]" alt="">
          <div class="shop">
            <div class="huodong_name">
              <span class="name">{{circle.merchantsName}}</span>
            </div>
            <div class="huodong_info">
              <span>{{circle.keyWords.split(',').join(' | ')}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="phone">{{circle.telephone}}</span><br>
              <span>营业时间 : {{circle.merchantsHours}}</span><br>
              <span>商家位置 : {{circle.merchantsAddress}}</span>
            </div>
          </div>
      </div>
        <img class="two" :src="circle.merchantsImage.split(',')[1]" alt="">
        <img class="three" :src="circle.merchantsImage.split(',')[2]" alt="">
        <img class="four" :src="circle.merchantsImage.split(',')[3]" alt="">
        <!--<img class="two" src="../../../../../assets/atlas5.png" alt="">
        <img class="three" src="../../../../../assets/atlas6.png" alt="">
        <img class="four" src="../../../../../assets/atlas7.png" alt="">-->
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    methods: {},
    computed:{
      ...mapState(['tradingarea']),
      ...mapState(['circlebyid'])
    },
    mounted(){
      this.$store.dispatch('getTradingArea')
      this.$store.dispatch('getCircleById')

      const mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: true,

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .details_bottom{
    width 100%
    height 260px
    margin-top 20px
    position relative
    .el-carousel__container{
      .el-carousel__arrow{
      }
      .bottomItem{
        float left
        .swiper-slide{
          width 100%
          height 100%
          float left
          .shopinfo{
            position relative
            width 345px
            height 100%
            float left
            .one{
              width 100%
              height 100%
              & img{
                width 100%
                height 260px
              }
            }
            .shop{
              width 100%
              height 106px
              background-color rgba(0,0,0,.3)
              position absolute
              bottom 0
              .huodong_name{
                margin 10px 10px 8px 16px
                height 16px
                .name{
                  float left
                  font-size 16px
                  font-weight bold
                  color #fff
                }

              }
              .huodong_info{
                margin-left 16px
                span{
                  display inline-block
                  font-size 12px
                  color #fff
                  line-height 10px
                }
              }
            }
          }
          .two{
            width 265px
            height 100%
            float left
            img{
              width 100%
              height 260px
            }
          }
          .three{
            width 245px
            height 100%
            float left
            img{
              width 100%
              height 260px
            }
          }
          .four{
            width 245px
            height 100%
            float left
            img{
              width 100%
              height 260px
            }
          }
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
          .swiper-slide{
            width 100%
            height 100%
            margin-top 20px
          }
        }
      }
    }

  }
</style>