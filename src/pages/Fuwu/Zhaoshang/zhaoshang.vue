<template>
  <div class="info_content container">
    <div class="content_name">
      <span>招商信息</span>
    </div>
    <div class="content_info">
      <span>Attract Investment</span>
    </div>
    <div class="content_zhaoshang row ">
      <a href="javascript:;" class="content_house col-md-12" @click="$router.push('/assortService/merchantsinfodetails?id='+investment.id)" v-for="(investment,index) in investmentinfopage" :key="index" v-if="index<currentPage*pagesize">
        <div class="house_left col-md-7">
          <img :src="investment.businessImage.split(',')[0]" class="img-responsive">
          <!--<img src="../../../assets/coffee1.png" alt="">-->
        </div>
        <div class="house_right col-md-5">
          <div class="house_name">
            <span>{{investment.businessName}}</span>
          </div>
          <div class="house_biaoqian">
            <div class="biaoqian_two" v-if="investment.keyWord.split(',')[0]">
              <span>{{investment.keyWord.split(',')[0]}}</span>
            </div>
            <div class="biaoqian_two" v-if="investment.keyWord.split(',')[1]">
              <span>{{investment.keyWord.split(',')[1]}}</span>
            </div>
            <div class="biaoqian_two" v-if="investment.keyWord.split(',')[2]">
              <span>{{investment.keyWord.split(',')[2]}}</span>
            </div>
          </div>
          <div class="house_info">
            <div class="info_shebei">
              <span>店铺设备：{{investment.serviceDevice}}</span>
            </div>
            <div class="info_time">
              <span>可入住时间：{{investment.checkInTime.split('T')[0]}}</span>
            </div>
            <div class="info_youshi">
              <span>店铺优势：{{investment.serviceAdvantage}}</span>
            </div>
            <div class="info_weizhi">
              <span>项目位置：{{investment.businessAddress}}</span>
            </div>
          </div>
          <div class="house_jiejian">
            <span>{{investment.businessContent}}</span>
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
                   :total="this.investmentinfo.length">
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
        this.$store.dispatch('getInvestmentInfopage',{page:this.currentPage,limit:this.pagesize})
      },
    },
    computed:{
      ...mapState(['investmentinfo']),
      ...mapState(['investmentinfopage'])
    },
    mounted(){
      this.$store.dispatch('getInvestmentInfo')
      this.$store.dispatch('getInvestmentInfopage',{page:this.currentPage,limit:this.pagesize})
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
    }
    .content_info{
      padding-top 10px
      margin-bottom 74px
      span{
        font-family "微软雅黑"
        font-size 16px
        color #999
      }
    }
    /*@media screen and (orientation:portrait){
      .content_info{
        margin-bottom 34px
      }
    }*/
    .content_zhaoshang{
      margin-left 50px
      margin-right 50px
      box-sizing border-box
      .content_house{
        width 1000px
        margin-bottom 36px
        border 2px solid #ddd
        padding-left 0
        padding-right 0
        .house_left{
          width 528px
          padding-left 0
          padding-right 0
          float left
          border 1px solid #ddd
          img{
            width 528px
            height 292px
          }
        }
        .house_right{
          width 468px
          height 292px
          float right
          box-sizing border-box
          padding-left 0
          padding-right 0
          &:hover{
            background-color #f0f0f0
          }
          .house_name{
            margin-left 30px
            margin-top 30px
            span{
              font-size 22px
              font-weight bold
              color #333
            }
          }
          .house_biaoqian{
            float left
            margin-top 18px
            .biaoqian_two{
              float left
              margin-left 30px
              width 76px
              height 20px
              background-image url("../../../assets/gray.png")
              span{
                float left
                font-size 12px
                color #333
                margin-top 1px
                display block
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                width 100%
                text-align center
              }
            }
          }
          .house_info{
            margin-top 50px
            margin-left 30px
            .info_shebei{
              margin-bottom 2px
              span{
                font-size 12px
                color #333
              }
            }
            .info_time{
              margin-bottom 2px
              span{
                font-size 12px
                color #333
              }
            }
            .info_youshi{
              margin-bottom 2px
              span{
                font-size 12px
                color #333
              }
            }
            .info_weizhi{
              margin-bottom 2px
              span{
                font-size 12px
                color #333
              }
            }
          }
          .house_jiejian{
            margin-top 30px
            margin-left 30px
            margin-right 36px
            span{
              font-size 12px
              color #333
              line-height 20px
              overflow hidden
              text-overflow ellipsis
              display -webkit-box
              -webkit-box-orient vertical
              -webkit-line-clamp 2
            }
          }
        }
      }
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
      .content_zhaoshang{
        margin-left 0
        margin-right 0
        .content_house{
          width 100%
          display block
          height 500px
          .house_left{
            width 100%
            img{
              width 100%
              height 200px
            }
          }
          .house_right{
            width 100%
          }
        }
      }
    }
    .content_more{
      margin-top 86px
      margin-bottom 70px
      text-align center
      img{
        width 100%
      }
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
      .content_more{
        margin-top 0
        margin-bottom 30px
        img{
          width 100%
          height 50px
        }
      }
    }
  }
</style>