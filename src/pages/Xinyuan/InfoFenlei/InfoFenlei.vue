<template>
  <div class="info_fenlei">
    <div class="container">
      <div class="fenlei_left" >
        <img src="../../../assets/home.png" alt="">
        <a href="javascript:;" @click="goto('/comeXY/introduction')"><span>走进新元</span></a>
        <img class="next" src="../../../assets/next.png" alt="">
        <!--<a href="javascript:;" v-for="(Fenlei,index) in FenleiInfo" :key="index" class="layout" @mouseenter="addActive($event)" @mouseleave="removeActive($event)" @click="goto('/comeXY/'+Fenlei.address)">{{Fenlei.info}} <b></b> </a>-->
        <a href="javascript:;" v-if="flag" @click="goto('/comeXY/'+FenleiInfo[1].address)"><span class="showNav">{{FenleiInfo[1].info}}</span></a>
        <a href="javascript:;" v-else @click="goto('/comeXY/'+FenleiInfo[0].address)"><span class="hideNav">{{FenleiInfo[0].info}}</span></a>
      </div>
      <div class="fenlei_right" >
        <div class="item" v-for="(Fenlei,index) in FenleiInfo" :key="index">
          <a href="javascript:;" class="layout" @mouseenter="addActive($event)" @mouseleave="removeActive($event)" @click="goto('/comeXY/'+Fenlei.address)" :class="{active: out &&(isCurrent('/comeXY/'+Fenlei.address))}">{{Fenlei.info}} <b></b> </a>
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
            info:'企业理念',
            address:'idea'
          },
          {
            id:'1',
            info:'企业介绍',
            address:'introduction'
          },
        ]
      }
    },
    methods: {
      isCurrent(path) {
        // console.log(this.$route.path)
        return this.$route.path === path
      },
      goto(path) {
        this.$router.push(path)
        this.flag = path.indexOf('introduction') !== -1;
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
      /*if(window.location.href.split('#')[1] === '/comeXY/introduction'){
        console.log(window.location.href.split('#')[1] === '/comeXY/introduction')
        this.FenleiInfo[1].info = this.FenleiInfo[0].info;
      }else {
        this.FenleiInfo[0].info = this.FenleiInfo[1].info;
      }*/

      this.flag = true
      console.log(this.FenleiInfo[0].info)
    },
    watch:{
      $route : function (path) {
        if(path.fullPath === '/comeXY/introduction'){
          this.flag = true
        }else{
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