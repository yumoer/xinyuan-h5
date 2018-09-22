<template>
  <div class="info_content container"><!---->
    <div class="content_yaowen">
      <div class="yaowen_left">
        <div class="content_name">
          <span>党建园区</span>
        </div>
        <div class="content_info">
          <span>NEWS</span>
        </div>

        <a href="javascript:;" class="yaowen_top row" @click="$router.push('/news_center/securitydetails?id='+security[0].id)">
          <div class="topLeft col-xs-6">
            <div class="topLeft_time">
              <span>{{party[0].publisherTime.split('-')[1]}}&nbsp;{{party[0].publisherTime.split('T')[0].split('-')[2]}}&nbsp;&nbsp;{{party[0].publisherTime.split('-')[0]}}</span>
            </div>
            <div class="topLeft_name">
              <span>{{party[0].articleTitle}}</span>
            </div>
            <div class="topLeft_info">
              <p>{{party[0].articleSummary}}</p>
              <!--<div class="info_look">
                <img src="../../../assets/yanjing.png" alt="">
                <span>1242</span>
              </div>-->
            </div>
            <div class="topLeft_more"  @click="$router.push('/news_center/partydetails?id='+party[0].id)">
              <input class="more" type="button">
            </div>
          </div>
          <div class="topRight col-xs-6">
            <img :src="party[0].articleImage" alt="">
          </div>
        </a>
        <div class="yaowen_bottom" v-for="(part,index) in partypage" :key="index">     <!--v-for="(newcenter,index) in party" :key="index"-->
          <a href="javascript:;" class="bottom" @click="$router.push('/news_center/partydetails?id='+part.id)"> <!--v-for="index in 5" :key="index"-->
            <div class="bottomLeft">
              <span class="day">{{part.publisherTime.split('T')[0].split('-')[2]}}</span><br>
              <span class="month">{{part.publisherTime.split('-')[1]}}</span><br>
              <span class="year">{{part.publisherTime.split('-')[0]}}</span>
            </div>
            <div class="bottomRight">
              <span>{{part.articleTitle}}</span><br>
              <p>{{part.articleSummary}}</p>
              <!--<div class="info_look">
                <img src="../../../assets/yanjing.png" alt="">
                <span>1242</span>
              </div>-->
            </div>
            <!--<div class="bottomNext"></div>-->
          </a>
        </div>
        <!--<div class="content_more">
          <img src="../../../assets/more2.png" alt="">
        </div>-->
        <el-pagination class="content_more"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="currentPage"
                       :page-sizes="[4,6]"
                       :page-size="pagesize"
                       layout="total, sizes, prev, pager, next, jumper"
                       prev-text="上一页"
                       next-text="下一页"
                       :total="this.party.length">
        </el-pagination>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        fullscreenLoading: false,
        currentPage: 1,
        pagesize: 4,
        tabdata:[],//分页的数据
      }
    },
    methods: {
      handleSizeChange: function (pagesize) {
        this.pagesize = pagesize;
        this.handleCurrentChange(this.currentPage);
      },
      handleCurrentChange: function (currentPage) {
        window.scrollTo(0,0)
        this.currentPage++
        this.currentPage = currentPage;
        this.$store.dispatch('getPartypage',{page:this.currentPage,limit:this.pagesize})
      },
    },
    computed:{
      ...mapState(['party']),
      ...mapState(['partypage'])
    },
    mounted(){
      this.$store.dispatch('getParty')
      this.$store.dispatch('getPartypage',{page:this.currentPage,limit:this.pagesize})
      /* const result = await reqXinwen()
       console.log(result)*/
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .info_content{
    .content_name{
      padding-top 32px
      span{
        font-family "微软雅黑"
        font-size 22px
        font-weight bold
        color #333
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
    }
    .content_yaowen{
      width 100%
      height auto
      @media screen and (orientation:portrait){
        .yaowen_right{
          display none
        }
      }
      .yaowen_left{
        width 100%
        height 100%
        float left
        /*border-right 1px solid #ddd*/
        .yaowen_top{
          width 100%
          margin-bottom 46px
          .topLeft{
            width 720px
            float left
            .topLeft_time{
              span{
                font-size 36px
                color #ea5504
              }
            }
            .topLeft_name{
              margin-top 10px
              span{
                font-size 22px
                font-weight bold
                color #333
              }
            }
            .topLeft_info{
              margin-top 20px
              position relative
              width 100%
              p{
                font-size 12px
                color #333
                line-height 18px
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-box-orient vertical
                -webkit-line-clamp 4
              }
              .info_look{
                position absolute
                right: 0;
                bottom: 0;
                opacity 0
                img{
                  float left
                }
                span{
                  font-size 12px
                  color #666
                  float right
                  margin-left 4px
                }
              }
            }
            .topLeft_more{
              margin-top 30px
              .more {
                display: block;
                width: 100%;
                height: 54px;
                background: #e1dede url(../../../assets/btn_more_on.png) no-repeat center 15px;
                cursor: pointer;
                &:hover{
                  background: #E71B2A url(../../../assets/btn_more.png) no-repeat center 15px;
                  -webkit-transition: background 400ms;
                  transition: background 400ms;
                }
              }
              @media screen and (orientation:portrait){
                .more{
                  width 100%
                }
              }
            }
          }
          @media screen and (orientation:portrait){
            .topLeft{
              width 100%
              margin-bottom 16px
            }
          }
          .topRight{
            width 330px
            float right
            margin-right 25px
            img{
              width 100%
              height 266px
            }
            @media screen and (orientation:portrait){
              .img{
                width 100%
                height 164px
              }
            }
          }

          @media screen and (orientation:portrait){
            .topRight{
              width 100%
              margin-bottom 16px
              margin-right 0
            }
          }
        }
        @media screen and (orientation:portrait){
          .yaowen_top{
            width 100%
          }
        }
        .yaowen_bottom{
          width 100%
          .bottom{
            width 100%
            height 128px
            position relative
            box-sizing border-box
            display block
            padding-top 20px
            &:hover{
              background-color #f2f2f2
              .bottomNext{
                position absolute
                top 0
                right 0
                width 128px
                height 128px
                background-image url("../../../assets/next1.png")
              }
            }
            @media screen and (orientation:portrait){
              &:hover{
                background-color #fff
                .bottomNext{
                  display none
                }
              }
            }
            &:after{
              content ' '
              position absolute
              top 0
              left 0
              margin auto
              width 100%
              height 1px
              background-color #ddd
            }
            .bottomLeft{
              width 8%
              height 88px
              background-color #f2f2f2
              /*position relative*/
              top 20px
              bottom 20px
              float left
              .day{
                /*position absolute*/
                margin-left 15px
                margin-top 5px
                font-size 28px
                font-family "Arial Black"
                color #ea5504
                margin-bottom 10px
              }
              .month{
                /*position absolute*/
                margin-top 20px
                font-size 13px
                font-family Arial
                color #333
                margin-left 15px
              }
              .year{
                /*position absolute*/
                font-size 13px
                font-family Arial
                color #333
                margin-left 15px
                margin-top 17px
              }

            }
            @media screen and (orientation:portrait){
              .bottomLeft{
                width 88px
                height 88px
                position none
              }
            }
            .bottomRight{
              width 90%
              height 88px
              top 20px
              right 15px
              float right
              span{
                font-size 20px
                color #333
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                display block
              }
              @media screen and (orientation:portrait){
                span{
                  font-size 16
                }
              }
              p{
                height 32px
                font-size 12px
                color #666
                display inline-block
                margin-top -16px
                line-height 16px
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-box-orient vertical
                -webkit-line-clamp 2
              }
              @media screen and (device-width:max-width 320px){
                p{
                  width 240px
                  font-size 12px
                }
              }
              .info_look{
                opacity 0
                img{
                  float left
                }
                span{
                  font-size 12px
                  color #666
                  float left
                  margin-left 4px
                  margin-top -2px
                }
              }
            }
            @media screen and (orientation:portrait) {
              .bottomRight{
                width 200px
                position none
                float none
                margin-left 100px
              }
            }
          }
          @media screen and (orientation:portrait){
            .bottom{
              width 100%
            }
          }
        }
        @media screen and (orientation:portrait){
          .yaowen_bottom{
            width 100%
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
        float right
        .rightImage{
          margin-left 30px
          margin-top 30px
          img{
            display block
            margin-bottom 22px
          }
        }
      }

      @media screen and (orientation:portrait){
        .yaowen_left{
          width 100%
        }
      }
    }

    .content_more{
      margin-top 20px
      margin-bottom 42px
      width 100%
      text-align center
      img{
        padding-top 20px
        width 770px
      }
    }
    @media screen and (orientation:portrait){
      .content_more{
        width 100%
        img{
          width 100%
          height 70px
        }
      }
    }
  }
</style>