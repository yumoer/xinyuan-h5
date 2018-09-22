<template>
  <div class="info_content container"><!---->
    <div class="content_yaowen">
      <div class="yaowen_left">
        <div class="contentLeft_top">
          <div class="contentLeft_topleft">
            <div class="bottomLeft">
              <span class="day">{{articlesbyid.publisherTime.split('T')[0].split('-')[2]}}</span><br>
              <span class="month">{{articlesbyid.publisherTime.split('-')[1]}}</span><br>
              <span class="year">{{articlesbyid.publisherTime.split('-')[0]}}</span>
            </div>
            <div class="bottomRight">
              <span>{{articlesbyid.articleTitle}}</span><br>
              <p>发布者 : {{articlesbyid.author}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<!--浏览次数 : 1024--></p>
            </div>
          </div>
        </div>
        <ul class="contentLeft_bottom">
          <li class="bottom_content">
            <div class="content_text">
              <p><span v-html="articlesbyid.articleContent"></span></p>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['articlesbyid'])
    },
    mounted(){
      this.$store.dispatch('getArticlesById',{id:location.href.split("?id=")[1]})
      /*this.$store.dispatch({
        type: 'getArticlesById',
        id : location.href.split("#")[2]
      })*/
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .info_content{
    .content_yaowen{
      width 100%
      .yaowen_left{
        width 100%
        height 100%
        float left
        .contentLeft_top{
          width 100%
          height 120px
          .contentLeft_topleft{
            width 100%
            height 128px
            position relative
            box-sizing border-box
            .bottomLeft{
              width 8%
              height 88px
              background-color #f2f2f2
              position relative
              top 20px
              bottom 20px
              .day{
                position absolute
                margin-left 15px
                margin-top 5px
                font-size 28px
                font-family "Arial Black"
                color #ea5504
                margin-bottom 10px
              }
              .month{
                position absolute
                margin-top 20px
                font-size 13px
                font-family Arial
                color #333
                margin-left 15px
              }
              .year{
                position absolute
                font-size 13px
                font-family Arial
                color #333
                margin-left 15px
                margin-top 17px
              }

            }
            .bottomRight{
              width 90%
              height 88px
              position absolute
              top 20px
              right 4px
              &:after{
                content ' '
                position absolute
                width 100%
                height 1px
                background-color #ddd
                bottom -12px
                left 0
              }
              @media screen and (orientation:portrait){
                &:after{
                  bottom 0
                }
              }
              span{
                font-size 20px
                color #333
                font-weight bold
              }
              p{
                font-size 12px
                color #666
                display inline-block
                margin-top 12px
                line-height 16px
              }
              .info_look{
                margin-top 10px
                img{
                  float left
                }
                span{
                  font-size 12px
                  color #666
                  float left
                  margin-left 4px
                }
              }
            }

            @media screen and (orientation:portrait){
              .bottomRight{
                width 280px
                left 100px
              }
            }
          }

          @media screen and (orientation:portrait){
            .contentLeft_topleft{
              width 100%
            }
          }
        }
        @media screen and (orientation:portrait){
          .contentLeft_top{
            width 100%
          }
        }
        .contentLeft_bottom{
          width 90%
          padding-top 20px
          float right
          .bottom_content{
            width 100%
            .content_text{
              margin-bottom 26px
              p{
                display inline-block
                font-size 12px
                color #333
                line-height 20px
              }
            }
            @media screen and (orientation:portrait){
              .content_text{
                margin-bottom 0
              }
            }
            .content_image{
              margin-bottom 26px
              display flex
              justify-content center
              img{
                width 360px
              }
            }
          }
          @media screen and (orientation:portrait){
            .bottom_content{
              width 100%
            }
          }
          .bottom_footer{
            p{
              font-size 12px
              color #333
              line-height 20px
              margin-bottom 40px
            }
            span{
              display inline-block
              font-size 12px
              color #333
              line-height 20px
            }
          }
        }
        @media screen and (orientation:portrait){
          .contentLeft_bottom{
            width 100%
            margin-left 0
          }
        }
      }
      @media screen and (orientation:portrait){
        .yaowen_left{
          width 100%
          border-right 0 solid #fff
        }
      }
      .yaowen_right{
        width 304px
        height 600px
        float right
        position relative
        .rightImage{
          margin-left 30px
          position absolute
          top 32px
          img{
            display inline-block
            margin-bottom 22px
          }
        }
      }
      @media screen and (orientation:portrait){
        .yaowen_right{
          display none
        }
      }
    }
  }
</style>