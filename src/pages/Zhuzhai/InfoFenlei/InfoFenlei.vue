<template>
  <div class="info_fenlei">
    <div class="container">
      <div class="fenlei_left" >
        <img src="../../../assets/home.png" alt="">
        <a href="javascript:;" @click="goto('/residential/operating')"><span>住宅项目</span></a>
        <img class="next" src="../../../assets/next.png" alt="">
        <a href="javascript:;" v-if="flag" @click="goto('/residential/'+FenleiInfo[1].address)"><span>{{FenleiInfo[1].info}}</span></a>
        <a href="javascript:;" v-else @click="goto('/residential/'+FenleiInfo[0].address)"><span>{{FenleiInfo[0].info}}</span></a>
        <!--<span @click='show?!show:show'>企业介绍</span>-->
      </div>

      <div class="fenlei_right" >
        <div class="item" v-for="(Fenlei,index) in FenleiInfo" :key="index">
          <a href="javascript:;" class="layout" @mouseenter="addActive($event)" @mouseleave="removeActive($event)" @click="goto('/residential/'+Fenlei.address)" :class="{active:out &&( isCurrent('/residential/'+Fenlei.address) || isCurrent('/residential/'+Fenlei.address+'details'))}">{{Fenlei.info}} <b></b> </a>
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
        flag:true,
        FenleiInfo:[
          {
            id:'2',
            info:'在建项目',
            address:'underconstruction'
          },
          {
            id:'1',
            info:'运营项目',
            address:'operating'
          },
        ]
      }
    },
    methods: {
      isCurrent(path) {
        return this.$route.path === path
      },
      goto(path) {
        this.$router.push(path)
        this.flag = path.indexOf('operating') !== -1;
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
      this.flag = true;
    },
    watch:{
      $route : function (path) {
        console.log(path.fullPath.split('?id')[0])
        if(path.fullPath === '/residential/operating' || path.fullPath.split('?id')[0] === '/news_center/operatingdetails'){
          this.flag = true
        }else if((path.fullPath === '/residential/underconstruction' || path.fullPath.split('?id')[0] === '/news_center/underconstructiondetails')){
          this.flag = false
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
      @media screen and (min-width: 320px) and (max-width: 420px) {
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

        @media screen and (min-width: 320px) and (max-width: 420px) {
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