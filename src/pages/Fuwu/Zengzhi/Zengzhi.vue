<template>
  <div class="info_content container-fluid">
    <div class="content_top container">
      <div class="content_name">
        <span>增值服务</span>
      </div>
      <div class="content_info">
        <span>Value-added Service</span>
      </div>
    </div>
    <div class="line"></div>
    <ul class="content_zhaoshang">
      <li class="content_coffee container-fluid" v-for="(added,index) in addedservicepage" :key="index" v-if="index<currentPage*pagesize" @click="$router.push('/assortService/value-addeddetails?id='+added.id)">
        <div class="coffee_shop container">
          <div class="coffee_left">
            <img :src="added.businessImage" alt="">
            <!--<img src="../../../assets/coffee1.png" alt="">-->
          </div>
          <router-link class="coffee_right " to="/assortService/value-added">
            <div class="coffee_name">
              <span>{{added.businessName}}</span>
            </div>
            <div class="coffee_biaoqian">
              <div class="biaoqian_two" v-if="added.keyWord.split(',')[0]">
                <span>{{added.keyWord.split(',')[0]}}</span>
              </div>
              <div class="biaoqian_two" v-if="added.keyWord.split(',')[1]">
                <span>{{added.keyWord.split(',')[1]}}</span>
              </div>
              <div class="biaoqian_two" v-if="added.keyWord.split(',')[2]">
                <span>{{added.keyWord.split(',')[2]}}</span>
              </div>
            </div>
            <div class="coffee_info">
              <div class="info_time">
                <span>可入住时间：{{added.checkInTime.split('T')[0]}}</span>
              </div>
              <div class="info_weizhi">
                <span>项目位置：{{added.businessAddress}}</span>
              </div>
            </div>
            <div class="coffee_jiejian">
              <p>{{added.businessContent}}</p>
            </div>
          </router-link>
        </div>
      </li>
    </ul>
    <!--<div class="content_more container">
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
                   :total="this.addedservice.length">
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
        this.$store.dispatch('getAddedServicepage',{page:this.currentPage,limit:this.pagesize})
      },
    },
    computed:{
      ...mapState(['addedservice']),
      ...mapState(['addedservicepage'])
    },
    mounted(){
      this.$store.dispatch('getAddedService')
      this.$store.dispatch('getAddedServicepage',{page:this.currentPage,limit:this.pagesize})
    },
    created(){
      window.scrollTo(0,0)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/stylus/mixins.styl"
  .info_content{
    .content_top{
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
        margin-bottom 44px
        position relative
        span{
          font-family "微软雅黑"
          font-size 16px
          color #999
        }
        .line{
          position absolute
          width 1500px
          height 2px
          color #ddd
          bottom 0
        }
      }
      @media screen and (min-width: 320px) and (max-width: 420px) {
        .content_info{
          margin-bottom 34px
        }
      }
    }
    .line{
      bottom-border-1px(#999)
    }
    .content_zhaoshang{
      margin-bottom 0
      .content_coffee{
        height 364px
        padding-top 36px
        bottom-border-1px(#999)
        .coffee_shop{
          width 1100px
          padding-left 0
          padding-right 0
          &:hover{
            box-sizing border-box
            box-shadow 1px 2px 4px 2px rgba(0, 0, 0, 0.3)
          }
          .coffee_left{
            float left
            width 530px
            border 1px solid #ddd
            img{
              width 530px
              height 292px
            }
          }
          @media screen and (min-width: 320px) and (max-width: 420px) {
            .coffee_left{
              width 100%
              img{
                width 100%
                height 200px
              }
            }
          }
          .coffee_right{
            height 292px
            float left
            text-decoration none
            .coffee_name{
              margin-left 50px
              margin-top 46px
              span{
                font-size 22px
                font-weight bold
                color #333
              }
            }
            @media screen and (min-width: 320px) and (max-width: 420px) {
              .coffee_name{
                margin-left 10px
                margin-top 46px
              }
            }
            .coffee_biaoqian{
              float left
              margin-top 18px
              margin-left 20px
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
            @media screen and (min-width: 320px) and (max-width: 420px) {
              .coffee_biaoqian{
                .biaoqian_two{
                  margin-left 10px
                }
              }
            }
            .coffee_info{
              margin-top 55px
              margin-left 50px
              .info_time{
                margin-bottom 6px
                span{
                  font-size 12px
                  color #333
                }
              }
              .info_youshi{
                margin-bottom 6px
                span{
                  font-size 12px
                  color #333
                }
              }
              .info_weizhi{
                margin-bottom 24px
                span{
                  font-size 12px
                  color #333
                }
              }
            }
            @media screen and (min-width: 320px) and (max-width: 420px) {
              .coffee_info{
                margin-left 10px
              }
            }
            .coffee_jiejian{
              margin-left 50px
              width 354px
              p{
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
            @media screen and (min-width: 320px) and (max-width: 420px) {
              .coffee_jiejian{
                margin-left 10px
                width auto
              }
            }
          }
          @media screen and (min-width: 320px) and (max-width: 420px) {
            .coffee_right{
              width 100%
            }
          }
        }
      }
      @media screen and (min-width: 320px) and (max-width: 420px) {
        .content_coffee{
          height auto
        }
      }
    }
    .content_more{
      margin-top 86px
      margin-bottom 50px
      text-align center
      img{
        width 100%
      }
    }
    @media screen and (min-width: 320px) and (max-width: 420px) {
      .content_more{
        margin-top 36px
        margin-bottom 30px
        img{
          width 100%
          height 50px
        }
      }
    }
  }
</style>