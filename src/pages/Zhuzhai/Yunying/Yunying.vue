<template>
  <div class="info_content container">
    <div class="content_name">
      <span>运营项目</span>
    </div>
    <div class="content_info">
      <span>Operation Project</span>
    </div>
    <div class="content_project row">  <!--<router-link :to="{path:'/news',query:{ id:item.NewsID }}" class="around"></router-link>-->
      <a href="javascript:;" class="project col-lg-6 col-xs-12" v-for="(operation,index) in operationspage" :key="index" @click="$router.push('/residential/operatingdetails?id='+operation.id)">
        <div class="project_left">
          <img :src="operation.projectImage" alt="">
          <!--<img src="../../../assets/zhuzhai1.png" alt="">-->
        </div>
        <div class="project_right">
          <div class="project_name">
            <span>{{operation.projectName}}</span>
          </div>
          <div class="project_mianji">
            <span>{{operation.buildingArea}}</span>
          </div>
          <div class="project_info">
            <p>{{operation.projectSummary}}</p>
          </div>
        </div>
      </a>
    </div>
    <!--<div class="content_more" @click="handleCurrentChange">
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
                   :total="this.operations.length">
    </el-pagination>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        fullscreenLoading: false,
        currentPage: 1,
        pagesize: 4,
        tabdata:[],//分页的数据
      }
    },
    methods:{
      handleSizeChange: function (pagesize) {
        this.pagesize = pagesize;
        this.handleCurrentChange(this.currentPage);
      },
      handleCurrentChange: function (currentPage) {
        window.scrollTo(0,0)
        this.currentPage++
        this.currentPage = currentPage;
        this.$store.dispatch('getOperationspage',{page:this.currentPage,limit:this.pagesize})
      },
    },
    computed:{
      ...mapState(['operations']),
      ...mapState(['operationspage']),
    },
    mounted(){
      this.$store.dispatch('getOperations')
      this.$store.dispatch('getOperationspage',{page:this.currentPage,limit:this.pagesize})
    },
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
      @media screen and (min-width: 320px) and (max-width: 420px) {
        span{
          font-size 18px
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
      @media screen and (min-width: 320px) and (max-width: 420px) {
        span{
          font-size 14px
        }
      }
    }
    .content_project{
      margin-bottom 30px

      .project{
        float left
        max-width 534px
        height 144px
        margin 0 15px 30px 0
        border 1px solid #ddd
        box-sizing border-box
        &:hover{
          background-color #f2f2f2
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
          &:hover{
            background-color #fff
          }
        }
        .project_left{
          float left
          img{
            width 200px
            height 144px
          }
          @media screen and (min-width: 320px) and (max-width: 420px) {
            img{
              width 100px
              height 80px
            }
          }
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
          .project_left{
            margin-top 10px
          }
        }
        .project_right{
          padding 28px 20px 24px 18px
          max-width 330px
          height 144px
          float left
          box-sizing border-box
          color #f2f2f2
          border-left none
          .project_name{
            span{
              font-size 18px
              font-weight bold
              color #333
            }
            @media screen and (min-width: 320px) and (max-width: 420px) {
              span{
                font-size 14px
              }
            }
          }
          .project_mianji{
            margin-top 6px
            span{
              font-size 14px
              color #999
            }
            @media screen and (min-width: 320px) and (max-width: 420px) {

              span{
                font-size 12px
              }
            }
          }
          .project_info{
            margin-top 6px
            /*p{
              font-size 12px
              color #333
              overflow hidden
              text-overflow ellipsis
              display -webkit-box
              -webkit-box-orient vertical
              -webkit-line-clamp 2
            }*/
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

            @media screen and (min-width: 320px) and (max-width: 420px) {

              p{
                color #333
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-box-orient vertical
                -webkit-line-clamp 2
                font-size 10px
              }
            }
          }
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
          .project_right{
            width 180px
            padding 10px
            height 100px
            float none
            margin-left 120px
          }
        }
      }

      @media screen and (min-width: 320px) and (max-width: 420px) {
        .project{
          width 100%
          height 100px
        }
      }
    }

    @media screen and (min-width: 320px) and (max-width: 420px) {
      .content_project{
        width 100%
        margin-bottom 0
      }
    }
    ul{
      width 100%
      height 700px
      .content_project{
        float left
        width 534px
        height 144px
        margin 0 15px 30px 0
        .project_left{
          float left
          img{
            width 200px
            height 144px
          }
        }
        .project_right{
          padding 28px 20px 24px 18px
          width 334px
          height 144px
          float right
          box-sizing border-box
          color #f2f2f2
          border 0.5px solid #999
          border-left none
          .project_name{
            span{
              font-size 18px
              font-weight bold
              color #333
            }
          }
          .project_mianji{
            margin-top 15px
            span{
              font-size 14px
              color #999
            }
          }
          .project_info{
            margin-top 15px
            p{
              font-size 12px
              color #333
            }
          }
        }

      }
    }
    .content_more{
      margin-top 56px
      margin-bottom 80px
      text-align center
      img{
        width 100%
      }
      @media screen and (min-width: 320px) and (max-width: 420px) {
        img{
          height 50px
        }
      }
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
      .content_more{
        margin-top 0
        margin-bottom 20px
      }
    }
  }
</style>