<template>
  <div class="shangquandetails container">
    <div class="details_top">
      <img :src="circlebyid.titleBackground" alt="">
      <!--<img src="../../../../assets/circledetails1.png" alt="">-->
      <div class="detail_text">
        <span class="name_english">{{circlebyid.enName}}</span><br>
        <span class="name_chinese">{{circlebyid.businessName}}</span><br>
        <p class="shequ_chinese">{{circlebyid.zhbusinessSummary}}</p><br>
        <p class="shequ_english">{{circlebyid.enbusinessSummary}}</p>
      </div>
    </div>
    <div class="details_center">
      <router-link class="center_one" to="/assortService/circledetails/trading" :class="{active: isCurrent('/assortService/circledetails/trading')}">
        <div class="one_name">
          <span class="chinese">商圈介绍</span><br>
          <span class="english">Trading Area</span>
        </div>
      </router-link>
      <router-link class="center_two" to="/assortService/circledetails/atlas" :class="{active: isCurrent('/assortService/circledetails/atlas')}">
        <div class="one_name">
          <span class="chinese">图集展示</span><br>
          <span class="english">Atlas Display</span>
        </div>
      </router-link>
      <router-link class="center_three" to="/assortService/circledetails/brand" :class="{active: isCurrent('/assortService/circledetails/brand')}">
        <div class="one_name">
          <span class="chinese">品牌商家</span><br>
          <span class="english">Brand Merchants</span>
        </div>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
      }
    },
    methods: {
      isCurrent(path) {
        // console.log(this.$route.path)
        return this.$route.path === path
      },

    },
    computed:{
      ...mapState(['circlebyid'])
    },
    mounted(){
      this.$store.dispatch('getCircleById',{id:location.href.split("?id=")[1]}) /*,{id:location.href.split("?")[1]}*/
      /* const result = await reqXinwen()
       console.log(result)*/
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shangquandetails{
    overflow-x hidden
    .details_top{
      width 100%
      height 340px
      margin-top 26px
      position relative
      img{
        width 100%
        height 100%
      }
      .detail_text{
        margin-left 46px
        position absolute
        top 50%
        transform translateY(-50%)
        span{
          font-size 24px
          color #fff
          display inline-block
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
          span{
            font-size 18px
          }
        }
        .name_english{
          font-family "Arial Black"
          opacity 0.5
        }
        .name_chinese{
          font-weight bold
          margin-top 10px
        }
        p{
          font-size 16px
          color #fff
          display inline-block
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
          p{
            font-size 12px
          }
        }
        .shequ_chinese{
          opacity 0.8
          margin-top 32px
        }
        .shequ_english{
          font-family "Arial Black"
          opacity 0.5
          margin-top 5px
        }
      }

      @media screen and (min-width: 320px) and (max-width: 420px) {
        .detail_text{
          margin-left 20px
        }
      }
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
      .details_top{
        width 100%
        height auto
        img{
          width 100%
          height 200px
        }
      }
    }
    .details_center{
      width 100%
      height 120px
      margin-top 10px
      .center_one{
        width 366px
        height 108px
        background-color #f3b22a
        position relative
        float left
        &.active{
          &:after{
            content: ' ';
            position absolute
            width 100%
            height 100%
            background url("../../../../assets/sanjiao1.png") no-repeat
            margin-left 170px
            margin-top 108px
          }
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
          &.active{
            &:after{
              opacity 0
            }
          }
        }
        .one_name{
          position absolute
          left 50%
          top 50%
          transform translate(-50%,-50%)
          .chinese{
            font-size 22px
            font-weight bold
            color #fff
          }
          .english{
            display inline-block
            font-size 16px
            font-family Arial
            color #fff
            opacity 0.5
            margin-top 10px
          }
        }


      }
      .center_two{
        width 367px
        height 108px
        background-color #e7792c
        position relative
        float left
        &.active{
          &:after{
            content: ' ';
            position absolute
            width 100%
            height 100%
            background url("../../../../assets/sanjiao2.png") no-repeat
            margin-left 170px
            margin-top 108px
          }
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
          &.active{
            &:after{
              opacity 0
            }
          }
        }
        .one_name{
          position absolute
          left 50%
          top 50%
          transform translate(-50%,-50%)
          .chinese{
            font-size 22px
            font-weight bold
            color #fff
          }
          .english{
            display inline-block
            font-size 16px
            font-family Arial
            color #fff
            opacity 0.5
            margin-top 10px
          }
        }
      }
      .center_three{
        width 367px
        height 108px
        background-color #e0542a
        position relative
        float left
        &.active{
          &:after{
            content: ' ';
            position absolute
            width 100%
            height 100%
            background url("../../../../assets/sanjiao3.png") no-repeat
            margin-left 170px
            margin-top 108px
          }
        }

        @media screen and (min-width: 320px) and (max-width: 420px) {
          &.active{
            &:after{
              opacity 0
            }
          }
        }
        .one_name{
          position absolute
          left 50%
          top 50%
          transform translate(-50%,-50%)
          .chinese{
            font-size 22px
            font-weight bold
            color #fff
            margin-left 15px
          }
          .english{
            display inline-block
            font-size 16px
            font-family Arial
            color #fff
            opacity 0.5
            margin-top 10px
          }
        }
      }
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
      .details_center{
        width 100%
        height auto
        .center_one{
          width 100%
        }
        .center_two{
          width 100%
        }
        .center_three{
          width 100%
        }
      }
    }
  }
</style>