<template>
  <div class="aboutContent container-fluid">
    <div class="content container-fluid">
      <img src="../../assets/aboutus.png" class="img-responsive">
    </div>
    <div class="aboutus container">
      <div class="aboutChinese">关于我们</div>
      <div class="aboutEnglish">ABOUT US</div>
    </div>
    <div class="aboutinfo container"  v-for="(about,index) in aboutus" :key="index">
      <div class="info_image">
        <img :src="about.companyIntroductionImages" class="img-responsive">
        <!--<img src="../../assets/aboutus1.png" alt="">-->
      </div>
      <div class="info_text">
        <div class="info_left">
          <div class="aboutusChinese">{{about.companyName}}</div>
          <div class="aboutusEnglish">{{about.pinyin}}</div>
          <div class="aboutusphone aboutusbottom">电 话 : {{about.companyPhone}}</div>
          <div class="aboutuschuanzhen aboutusbottom">传 真 : {{about.companyFax}}</div>
          <div class="aboutusyoubian aboutusbottom">邮 编 : {{about.companyZipCode}}</div>
          <div class="aboutusdizhi aboutusbottom">地 址 : {{about.companyAddress}}</div>
          <div class="aboutusemail aboutusbottom">邮 箱 : {{about.companyEmail}}</div>
        </div>
        <div class="info_right">
          <div class="aboutuser">
            <img :src="about.companyIntroductionSmallImages" class="img-responsive">
            <!--<img src="../../assets/aboutus2.png" alt="">-->
            <div class="wechat">微信公众号</div>
          </div>
        </div>
      </div>
    </div>
    <Bmap/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Bmap from './map/map'
  export default {
    methods: {},
    computed:{
      ...mapState(['aboutus'])
    },
    components:{
      Bmap
    },
    mounted(){
      this.$store.dispatch('getAboutUs')
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .aboutContent{
    min-width 1200px
    margin-top 72px
    .content{
      max-width 1500px
      height 373px
      img{
        width 100%
        height 100%
      }
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
      .content{
        img{
          width 100%
          height 200px
        }
      }
    }
    .aboutus{
      padding-top 66px
      .aboutChinese{
        font-size 1.375em
        font-weight bold
        color #333
        padding-left 0
      }
      .aboutEnglish{
        font-size 0.875em
        font-family Arial
        color #999
        padding-left 0
      }
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
      .aboutus{
        padding-top 36px
      }
    }
    .aboutinfo{
      margin-top 46px
      .info_image{
        float left
        img{
          width 518px
          height 205px
        }
      }
      .info_text{
        padding-left 35px
        .info_left{
          float left
          margin-left 40px
          line-height 18px
          .aboutusChinese{
            font-size 1.5em
            font-weight bold
            color #333
          }
          .aboutusEnglish{
            font-size 0.875em
            font-weight bold
            color #999
            margin-top 18px
          }
          .aboutusbottom{
            font-size 0.875em
            color #333
            margin-bottom 12px
          }
          .aboutusphone{
            margin-top 18px
          }
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
          .info_left{
            margin-top 30px
          }
        }
        .info_right{
          float left
          width 160px
          height 206px
          border 1px solid #ddd
          position relative
          margin-left 50px
          .aboutuser{
            img{
              margin-left 15px
              margin-top 15px
              width 127px
              height 127px
              border 1px solid #ddd
            }
            .wechat{
              display inline-block
              padding-right 10px
              position absolute
              left 28%
              bottom 10%
            }
          }
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
          .info_right{
            right 100px
            margin-top 20px
            margin-bottom 20px
          }
        }
      }
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
      .aboutinfo{
        margin-top 26px
        .info_image{
          img{
            width 100%
          }
        }
      }
    }
  }
</style>