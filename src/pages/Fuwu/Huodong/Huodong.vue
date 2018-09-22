<template>
  <div class="info_content container">
    <div class="content_name">
      <span>商业活动</span>
    </div>
    <div class="content_info">
      <span>Business Activities</span>
    </div>
    <div class="content_huodong">
      <div class="huodong_top">
        <span>商业活动</span>
      </div>
      <div class="huodong_content">
        <a href="javascript:;" class="huodong_jiyejia"  v-for="(mercantili,index) in mercantilismpage" :key="index" v-if="index<currentPage*pagesize" @click="$router.push('/assortService/businessactivitydetails?id='+mercantili.id)">
          <div class="huodong_image">
            <img :src="mercantili.businessImage" alt="">
            <!--<img src="../../../assets/huodong1.png" alt="">-->
          </div>
          <div class="huodong_name">
            <span class="name">{{mercantili.businessName}}</span>
            <span class="phone">{{mercantili.telephone}}</span>
          </div>
          <div class="huodong_info">
            <span>{{mercantili.keyWord.split(',')[0]}}&nbsp;&nbsp;{{mercantili.keyWord.split(',')[1]}}&nbsp;&nbsp;{{mercantili.keyWord.split(',')[2]}}&nbsp;&nbsp;{{mercantili.keyWord.split(',')[3]}}&nbsp;&nbsp;{{mercantili.keyWord.split(',')[4]}}</span><br>
            <span>{{mercantili.businessHours}}</span><br>
            <span>{{mercantili.businessAddress}}</span>
          </div>
        </a>
      </div>
    </div>
    <!--<div class="content_more">
      <img src="../../../assets/more.png" alt="">
    </div>-->
    <el-pagination class="content_more"
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="currentPage"
                   :page-sizes="[6,9]"
                   :page-size="pagesize"
                   layout="total, sizes, prev, pager, next, jumper"
                   prev-text="上一页"
                   next-text="下一页"
                   :total="this.mercantilism.length">
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
        pagesize: 6,
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
        this.$store.dispatch('getMercantilismpage',{page:this.currentPage,limit:this.pagesize})
      },
    },
    computed:{
      ...mapState(['mercantilism']),
      ...mapState(['mercantilismpage'])
    },
    mounted(){
      this.$store.dispatch('getMercantilism')
      this.$store.dispatch('getMercantilismpage',{page:this.currentPage,limit:this.pagesize})
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
      margin-bottom 38px
      span{
        font-family "微软雅黑"
        font-size 16px
        color #999
      }
    }
    .content_huodong{
      width 100%
      .huodong_top{
        width 100%
        height 40px
        background-color #ea5504
        border-top-left-radius 10px
        border-top-right-radius 10px
        span{
          display inline-block
          font-size 16px
          font-weight bold
          color #fff
          margin-left 18px
          margin-top 10px
        }
      }
      .huodong_content{
        float left
        width 100%
        border 1px solid #ddd
        box-sizing border-box
        padding-bottom 50px
        margin-bottom 40px
        .huodong_jiyejia{
          float left
          width 346px
          height 346px
          margin-left 15px
          margin-top 24px
          border 1px solid #ddd
          border-radius 5px
          box-sizing border-box
          &:hover{
            box-shadow 1px 1px 1px 1px rgba(0, 0, 0, 0.3)
          }
          .huodong_image{
            margin-top 10px
            margin-left 10px
            img{
              width 326px
              height 200px
            }
          }
          .huodong_name{
            margin 18px 10px 14px 10px
            height 16px
            .name{
              float left
              font-size 16px
              font-weight bold
              color #333
            }
            .phone{
              float right
              color #666
            }
          }
          .huodong_info{
            margin-top 14px
            margin-left 10px
            margin-bottom 26px
            span{
              display inline-block
              font-size 14px
              color #666
              line-height 18px
            }
          }
        }
        @media screen and (orientation:portrait){
          .huodong_jiyejia{
            margin-left 0
            width 100%
            .huodong_image{
              width 100%
              margin-left 0
              img{
                width 100%
              }
            }

          }
        }
      }
      @media screen and (orientation:portrait){
        .huodong_content{
          padding-bottom 30px
        }
      }

    }
    .content_more{
      margin-bottom 40px
      text-align center
      img{
        width 100%
      }
    }
    @media screen and (orientation:portrait){
      .content_more{
        margin-bottom 20px
        img{
          height 50px
        }
      }
    }

  }
</style>