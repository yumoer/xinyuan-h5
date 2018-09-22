<template>
  <div class="info_fenlei ">
    <div class="container">
      <div class="fenlei_left">
        <img src="../../../assets/home.png" alt="">
        <a href="javascript:;"><span>新闻中心</span></a>
        <img class="next" src="../../../assets/next.png" alt="">
        <a href="javascript:;"><span class="news">{{title[flag]}}</span></a>
      </div>
      <div class="fenlei_right" >
        <div class="item" v-for="(Fenlei,index) in FenleiInfo" :key="index">
          <a href="javascript:;" class="layout" @mouseenter="addActive($event)" @mouseleave="removeActive($event)" @click="goto('/news_center/'+Fenlei.address,FenleiInfo.length - index - 1)" :class="{active: out &&(isCurrent('/news_center/'+Fenlei.address) || isCurrent('/news_center/'+Fenlei.address+'details'))}">{{Fenlei.info}}<b></b></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        timeOut2:null,
        timeOut:null,
        out:true,
        flag:0,
        title:["公司要闻","党建园区","安全园区"],
        FenleiInfo:[

          {
            id:'3',
            info:'安全园区',
            address:'security'
          },
          {
            id:'2',
            info:'党建园区',
            address:'party'
          },
          {
            id:'1',
            info:'公司要闻',
            address:'company'
          },

        ]
      }
    },
    methods: {
      isCurrent(path) {
        // console.log(this.$route.path)
        return this.$route.path === path
      },
      goto(path,i) {
        this.flag = i;
        this.$router.push(path)
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
      removeActive($event) {
        let self = this;
        clearTimeout(this.timeOut2);
        clearTimeout(this.timeOut);
        this.timeOut2 = setTimeout(function () {
          self.out = true;
        }, 200);
      }
    },
    mounted(){

    },
    watch:{
      $route : function (path) {
        if(path.fullPath === '/news_center/company' || path.fullPath.split('?id')[0] === '/news_center/companydetails'){
          this.flag = 0
        }else if(path.fullPath === '/news_center/party' || path.fullPath.split('?id')[0] === '/news_center/partydetails'){
          this.flag = 1
        }else{
          this.flag = 2
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/stylus/mixins.styl"
  .info_fenlei{
    height 76px
    bottom-border-1px(#ddd)
    .container{
      height 100%
      .fenlei_left{
        float left
        height 100%
        img{
          float left
          padding-top 33px
          &.next{
            padding-top 36px
          }
        }
        a{
          span{
            font-size 12px
            color #333
            font-weight bold
            float left
            margin 0 10px
            line-height 76px
          }
        }
      }
      @media screen and (orientation:portrait){
        .fenlei_left{
          display none
        }
      }

      .fenlei_right{
        float right
        height 100%
        .item{
          position relative
          margin-left 24px
          float right
          line-height 72px
          .layout{
            font-size 12px
            font-weight bold
            color #333
            position relative
            text-decoration none
            display block
            line-height 76px
            b{
              position: absolute;
              left: 0;
              width: 0;
              bottom 0;
              height: 3px;
              background-color: #ea5504;
              border-radius: 4px;
              -webkit-transition: width 300ms;
              transition: width 300ms;
            }
            &.active{
              b{
                width 100%
              }
            }
            &:hover{
              b{
                width 100%
              }
            }
          }
        }

        @media screen and (orientation:portrait){
          li{
            padding-left 10px
          }
        }
        .splitAll{
          position absolute
          width 48px
          height 3px
          background-color #ea5504
          bottom 0
          margin-left 24px
        }

      }
    }
  }
</style>