<template>
  <div class="details_bottom row" id="trading">
    <div class="bottom_left col-lg-8 col-xs-12">
      <div class="left_text" >
        <span class="name_english">{{circlebyid.enName}}</span><br>
        <span class="name_chinese">{{circlebyid.businessName}}</span><br>
        <ul>
          <li  v-if="circlebyid.keyWord.split(',')[0]">
            <div class="kuai"></div>
            <span>{{circlebyid.keyWord.split(',')[0]}}</span>
          </li>
          <li v-if="circlebyid.keyWord.split(',')[1]">
            <div class="kuai" ></div>
            <span>{{circlebyid.keyWord.split(',')[1]}}</span>
          </li>
          <li v-if="circlebyid.keyWord.split(',')[2]">
            <div class="kuai" ></div>
            <span>{{circlebyid.keyWord.split(',')[2]}}</span>
          </li>
        </ul>
        <br>
        <p class="info">{{circlebyid.businessContent}}</p>
      </div>
    </div>
    <div class="bottom_right col-lg-4 col-xs-12">
      <img :src="circlebyid.businessImage" alt="">
      <!--<img src="../../../../../assets/shangquandetails2.png" alt="">-->
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    methods: {},
    computed:{
      ...mapState(['circlebyid']),
    },
    mounted(){
      this.$store.dispatch('getCircleById',{id:location.href.split("?")[1]})
      /* const result = await reqXinwen()
       console.log(result)*/
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .details_bottom{
    width 100%
    height 260px
    margin-top 20px
    position relative
    .bottom_left{
      width 700px
      height 100%
      background-color #f3b22a
      float left
      .left_text{
        padding 40px 44px 0 34px
        .name_english{
          font-size 24px
          font-family "Arial Black"
          color #fff
          opacity 0.5
        }
        .name_chinese{
          font-size 14px
          font-weight bold
          color #fff
          display inline-block
          margin-top 14px
        }
        ul{
          margin-top 10px
          li{
            float left
            margin-right 15px
            .kuai{
              width 5px
              height 5px
              background-color #fff
              display inline-block
              margin-bottom 2px
              opacity 0.7
            }
            span{
              font-size 12px
              color #fff
              opacity 0.7
            }
          }
        }
        p{
          margin-top 18px
          font-size 12px
          color #fff
          opacity 0.8
          line-height 18px
        }
      }

      @media screen and (min-width: 320px) and (max-width: 420px) {
        .left_text{
          padding 15px 28px 10px 28px
        }
      }
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
      .bottom_left{
        width 100%
        height 100%
        margin-top 20px
      }
    }
    .bottom_right{
      width 400px
      float right
      img{
        width 400px
        height 260px
      }
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
      .bottom_right{
        width 100%
        img{
          width 100%
          height 200px
        }
      }
    }
  }
  @media screen and (min-width: 320px) and (max-width: 420px) {
    .bottom_left{
      width 100%
      height 100%
    }
  }
</style>