<template>
  <div class="info_content container" >
    <img src="../../../assets/SINCE2008.png" class="img-responsive" alt="">
    <div class="content_name" v-for="(philoso,index) in philosophy" :key="index">
      <!--<span v-for="(philoso,index) in philosophy" :key="index">{{philoso}}</span>-->
      <span>{{philoso.companyName}}</span>
    </div>
    <div class="content_info" v-for="(philoso,index) in philosophy" :key="index">
      <span >{{philoso.pinyin}}</span>
    </div>
    <div class="content_one row">
      <div class="content_left" v-for="(philoso,index) in philosophy" :key="index">
        <p>{{philoso.contentLeft}}</p>
      </div>
      <div class="content_right" v-for="(philoso,index) in philosophy" :key="index">
        <img :src="philoso.contentImageright" class="img-responsive">
        <!--<img src="../../../assets/image1.png" class="img-responsive">-->
      </div>
    </div>
    <div class="content_two row">
      <div class="content_left" v-for="(philoso,index) in philosophy" :key="index">
        <img :src="philoso.contentImageleft"  class="img-responsive">
        <!--<img src="../../../assets/image1.png"  class="img-responsive">-->
      </div>
      <div class="content_right" v-for="(philoso,index) in philosophy" :key="index">
        <p>{{philoso.contentLeft}}</p>
        <!--<p>北京博大新元房地产开发有限公司位于北京经济技术开发区，是从事开发区保障性项目建设和运营管理的国有独资企业。新元公司以“致力保障事业，承载安居梦想”为企业使命，秉承“阳光。精细，效率，责任”的企业理念，不断强化精品以实，通过精细化管理，效力于为开发区职工提供优质的住宅产品和专业化的配套服务。</p>
        <p class="jiange">新元公司建设的亦域名苑，博客雅苑项目是北京市第一批公共租赁住房项目，也是第一批交付入住的公租房项目。目前，新元公司已形成区域性公共租赁住房运营管理模式。</p>
        <p>新元公司目前持有的保障房项目达到18个，总建筑面积达180万平方米，管理的成套公共租赁住房近2万套，配套商业面积达8.2万平方米。</p>-->
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
        type:'introduction',
        page:1,
        limit:2,
      }
    },
    computed:{
      ...mapState(['philosophy']),
    },
    mounted(){
      this.$store.dispatch('getPhilosophy',this.type)
      // 发送ajax请求登陆
      // await reqPhilosophy(this.type,this.page,this.limit)

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .info_content{
    img{
      margin-top 32px
    }
    @media screen and (orientation:portrait){
      img{
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
      @media screen and (orientation:portrait){
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
      @media screen and (orientation:portrait){
        span{
          font-size 14px
        }
      }
    }
    .content_one{
      line-height 206px
      margin-bottom 74px
      .content_left{
        max-width 530px
        line-height 206px
        float left
        p{
          font-size 12px
          color #333
          line-height 18px
          font-family "微软雅黑"
          &.jiange{
            padding 24px 0
          }
        }
      }
      .content_right{
        float right
        margin-top -32px
        img{
          width 517px
          height 205px
        }
      }
      @media screen and (orientation:portrait){
        .content_right{
          width 100%
          img{
            width 100%
          }
        }
      }
    }
    @media screen and (orientation:portrait){
      .content_one{
        width 100%
        margin-bottom 34px
      }
    }
    .content_two{
      width 100%
      margin-bottom 74px

      .content_left{
        float left
        margin-top -32px
        img{
          width 517px
          height 205px
        }
      }
      @media screen and (orientation:portrait){
        .content_left{
          width 100%
          img{
            width 100%
          }
        }
      }
      .content_right{
        max-width 530px
        float right
        p{
          font-size 12px
          color #333
          line-height 18px
          font-family "微软雅黑"
          &.jiange{
            padding 24px 0
          }
        }
      }
      @media screen and (orientation:portrait){
        .content_right{
          margin-top 10px
        }
      }
    }
    @media screen and (orientation:portrait){
      .content_two{
        width 100%
        margin-bottom 34px
      }
    }
  }
</style>