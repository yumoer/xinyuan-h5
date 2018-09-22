<template>
  <div class="info_content container">
    <div class="content_name">
      <span>商圈介绍</span>
    </div>
    <div class="content_info">
      <span>Trading Area</span>
    </div>
    <div class="content_project">
      <a href="javascript:;" class="content_projectleft col-xs-12" v-for="(trading,index) in tradingareapage" :key="index" @click="$router.push('/assortService/circledetails?id='+trading.id)"> <!--+trading.id-->
        <div class="project_left">
          <img :src="trading.titleBackground" alt="">
          <!--<img src="../../../assets/zhuzhai1.png" alt="">-->
        </div>
        <div class="project_right">
          <div class="project_name">
            <span>{{trading.businessName}}</span>
          </div>
          <div class="project_biaoqian">
            <div class="biaoqian_orange biaoqian_two" v-if="trading.keyWord.split(',')[0]">
              <span>{{trading.keyWord.split(',')[0]}}</span>
            </div>
            <div class="biaoqian_green biaoqian_two" v-if="trading.keyWord.split(',')[1]">
              <span>{{trading.keyWord.split(',')[1]}}</span>
            </div>
            <div class="biaoqian_blue biaoqian_two" v-if="trading.keyWord.split(',')[2]">
              <span>{{trading.keyWord.split(',')[2]}}</span>
            </div>
          </div>
          <div class="project_info">
            <p>{{trading.businessContent}}</p>
          </div>
        </div>
      </a>
    </div>
    <!--<div class="content_more">
      <img src="../../../assets/more.png" alt="">
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
                   :total="this.tradingarea.length">
    </el-pagination>
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
        this.$store.dispatch('getTradingAreapage',{page:this.currentPage,limit:this.pagesize})
      },
    },
    computed:{
      ...mapState(['tradingarea']),
      ...mapState(['tradingareapage'])
    },
    mounted(){
      this.$store.dispatch('getTradingArea')
      this.$store.dispatch('getTradingAreapage',{page:this.currentPage,limit:this.pagesize})
    },
    created(){
      window.scrollTo(0,0)
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
    .content_project{
      box-sizing border-box
      .content_projectleft{
        width 536px
        height 144px
        margin 0 14px 30px 0
        border 1px solid #ddd
        &:hover{
          background-color #f2f2f2
        }
        .project_left{
          width 200px
          height 144px
          float left
          img{
            width 200px
            height 144px
          }
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
          .project_left{
            padding 0 20px
            width 100%
            margin-top 20px
            img{
              width 100%
            }
          }
        }
        .project_right{
          padding 28px 20px 16px 20px
          width 334px
          height 144px
          float right
          box-sizing border-box
          color #f2f2f2
          border-left none
          .project_name{
            width 100%
            span{
              font-size 18px
              font-weight bold
              color #333
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              display block
            }
          }
          .project_biaoqian{
            margin-top 10px
            float left
            .biaoqian_two{
              float left
              height 20px
              width 76px
              margin-right 10px
              background url("../../../assets/orange.png") no-repeat
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              span{
                float left
                font-size 12px
                color #fff
                margin-top 1px
                display block
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                text-align center
                width 100%
              }
            }
            /*.biaoqian_orange{
              background url("../../../assets/orange.png") no-repeat
            }
            .biaoqian_green{
              background url("../../../assets/green.png") no-repeat
              margin-right 10px
            }

            .biaoqian_blue{
              background url("../../../assets/blue.png") no-repeat
              margin-right 10px
            }*/

          }
          @media screen and (min-width: 320px) and (max-width: 420px) {
            .project_biaoqian{
              width 100%
              margin-left 0
              .biaoqian_blue{
                margin-right 0
                float left
              }
            }
          }
          .project_info{
            margin-top 40px
            p {
              position: relative;
              line-height: 20px;
              max-height: 40px;
              overflow: hidden;
              color #333
              font-size 12px
            }
            p:after {
              content: "...";
              position: absolute;
              bottom: 0;
              right: 0;
              padding-left: 16px;
              background: -webkit-linear-gradient(left, transparent, #fff 55%);
              background: -o-linear-gradient(right, transparent, #fff 55%);
              background: -moz-linear-gradient(right, transparent, #fff 55%);
              background: linear-gradient(to right, transparent, #fff 52%);
            }

            /*p{
              font-size 12px
              color #333
              overflow hidden
              text-overflow ellipsis  !* for IE *!
              display -webkit-box
              white-space: nowrap;
              -o-text-overflow: ellipsis; !* for Opera *!
              -webkit-box-orient vertical
              -webkit-line-clamp 2
            }*/
          }
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
          .project_right{
            width 100%
          }
        }
      }
      @media screen and (min-width: 320px) and (max-width: 420px) {
        .content_projectleft{
          width 100%
          height auto
        }
      }
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
      .content_project{
        width 100%
        height auto
      }
    }
    .content_more{
      margin-top 40px
      margin-bottom 56px
      text-align center
      display inline-block
      width 1100px
      img{
        width 100%
      }
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
      .content_more{
        margin-top 0
        margin-bottom 20px
        img{
          height 50px
        }
      }
    }
  }
</style>