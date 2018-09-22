<template>
    <div class="homeContent container-fluid">
        <BannerImage/>
        <div class="container">
            <!--<div class="swiper-container container">-->
                <!--<div class="swiper-wrapper">-->
                    <!--<div class="swiper-slide" v-for="(banner,index) in homebanner" :key="index"> &lt;!&ndash; &ndash;&gt;-->
                      <!--&lt;!&ndash;<img src="../../assets/banner.png"  alt="">&ndash;&gt;-->
                      <!--<img :src="banner.topImages.split(',')[0]" alt="">-->
                    <!--</div>-->
                    <!--<div class="swiper-slide" v-for="(banner,index) in homebanner" :key="index"> &lt;!&ndash; &ndash;&gt;-->
                        <!--&lt;!&ndash;<img src="../../assets/banner.png"  alt="">&ndash;&gt;-->
                        <!--<img :src="banner.topImages.split(',')[1]" alt="">-->
                    <!--</div>-->
                    <!--<div class="swiper-slide" v-for="(banner,index) in homebanner" :key="index"> &lt;!&ndash; &ndash;&gt;-->
                        <!--&lt;!&ndash;<img src="../../assets/banner.png"  alt="">&ndash;&gt;-->
                        <!--<img :src="banner.topImages.split(',')[2]" alt="">-->
                    <!--</div>-->
                <!--</div>-->
                <!--&lt;!&ndash; 如果需要分页器 &ndash;&gt;-->
                <!--<div class="swiper-pagination"></div>-->

                <!--&lt;!&ndash; 如果需要导航按钮 &ndash;&gt;-->
                <!--<div class="swiper-button-prev"></div>-->
                <!--<div class="swiper-button-next"></div>-->
            <!--</div>-->

            <div class="content_center">
                <div class="center_left">
                    <div class="left_top">
                        <div class="top_left" v-for="(newcenter,index) in newscenter" :key="index" v-if="index<1">
                            <a href="javascript:;" @click="goto('/news_center/companydetails?id='+newcenter.id)"><p>{{newscenter[0].articleTitle}}</p></a>
                        </div>
                        <div class="top_right" >
                            <a href="javascript:;" @click="goto('/news_center/company')">more</a>
                        </div>
                    </div>
                    <div class="left_center" v-for="(newcenter,index) in newscenter" :key="index" v-if="index<1">
                        <a href="javascript:;" @click="goto('/news_center/companydetails?'+newcenter.id)"><p>{{newscenter[0].publisherTime.split('T')[0]}}</p></a>
                    </div>
                    <div class="left_bottom" v-for="(newcenter,index) in newscenter" :key="index" v-if="index<1">
                        <a href="javascript:;" @click="goto('/news_center/companydetails?'+newcenter.id)"><p>{{newscenter[0].articleSummary}}</p></a>
                    </div>
                </div>
                <div class="center_right">
                    <div class="right_left">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="公司要闻" name="first">
                                <div class="contentIcon" v-for="(newcenter,index) in newscenter" :key="index" v-if="index<3">
                                    <a href="javascript:;" class="el-icon-caret-right"
                                       @click="goto('/news_center/companydetails?id='+newcenter.id)">&nbsp;{{newcenter.publisherTime.split('T')[0]}}&nbsp;&nbsp;{{newcenter.articleTitle}}</a><br>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="党建园区" name="second">
                                <div class="contentIcon" v-for="(part,index) in party" :key="index" v-if="index<3">
                                    <a href="javascript:;" class="el-icon-caret-right"
                                       @click="goto('/news_center/partydetails?id='+part.id)">&nbsp;{{part.publisherTime.split('T')[0]}}&nbsp;&nbsp;{{part.articleTitle}}</a><br>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="安全园区" name="third">
                                <div class="contentIcon" v-for="(securit,index) in security" :key="index" v-if="index<3">
                                    <a href="javascript:;" class="el-icon-caret-right"
                                       @click="goto('/news_center/securitydetails?id='+securit.id)">&nbsp;{{securit.publisherTime.split('T')[0]}}&nbsp;&nbsp;{{securit.articleTitle}}</a><br>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                    <div class="right_right">
                        <div class="right_info">
                            <p>扫描二维码<br>关注企业公众帐号</p>
                        </div>
                        <div class="right_image" v-for="(about,index) in aboutus" :key="index">
                            <!--<img src="../../assets/erweima.png" alt="">-->
                            <img :src="about.companyIntroductionSmallImages" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <!--底部动态图-->
            <div class="content_right" v-for="(home,index) in homebanner" :key="index">
              <div class="bottomImage state-0" >
                  <a href="javascript:;" class="item1" @mouseenter="setStyle()" @mouseleave="selectStyle()">
                      <span class="p1">
                          <img @click="goto('/comeXY/idea')" :src="home.enterpriseImage">
                      </span>
                  </a>
                  <a href="javascript:;" class="item2" @mouseenter="setStyle()" @mouseleave="selectStyle()">
                      <span class="p1">
                          <img @click="goto('/residential/operating')" :src="home.houseImage">
                      </span>
                  </a>
                  <a href="javascript:;" class="item3" @mouseenter="setStyle()" @mouseleave="selectStyle()">
                      <span class="p1">
                          <img @click="goto('/residential/underconstruction')" :src="home.residentailImage">
                      </span>
                  </a>
                  <a href="javascript:;" class="item4" @mouseenter="setStyle()" @mouseleave="selectStyle()">
                      <span class="p1">
                          <img @click="goto('/assortService/circle')" :src="home.businessImage">
                          <!--<img @click="goto('/assortService/circle')" src="../../assets/首页_20.png">-->
                      </span>
                  </a>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../../../static/css/swiper.css'
    import {reqHome} from '../../api'
    import {mapState} from 'vuex'
    import BannerImage from '../../components/BannerImage/BannerImage'
    export default {
        inject: ['reload'],
        data() {
            return {
                activeName: 'first',
            };
        },
        components:{
          BannerImage
        },
        computed: {
            ...mapState(['newscenter']),
            ...mapState(['party']),
            ...mapState(['security']),
            ...mapState(['homebanner']),
            ...mapState(['aboutus']),
        },
        mounted() {
            this.$store.dispatch('getNewsCenter')
            this.$store.dispatch('getParty')
            this.$store.dispatch('getSecurity')
            this.$store.dispatch('getHomeBanner')
            this.$store.dispatch('getAboutUs')
        },
        methods: {
            handleClick(tab, event) {
                // console.log(tab, event);
            },
            goto(path) {
                this.$router.push(path)
                this.reload();
            },
            resetTop() {
                window.scrollTo(0, 0)
            },
            selectStyle(){
              $('.item1').hover(function () {
                $(this).parent().removeClass('state-0');
                $(this).parent().addClass('state-1');
              }),
                $('.item2').hover(function () {
                  $(this).parent().removeClass('state-0');
                  $(this).parent().addClass('state-2');
                }),
                $('.item3').hover(function () {
                  $(this).parent().removeClass('state-0');
                  $(this).parent().addClass('state-3');
                }),
                $('.item4').hover(function () {
                  $(this).parent().removeClass('state-0');
                  $(this).parent().addClass('state-4');
                })
            },
            setStyle(){
              $('.item1').hover(function () {
                $(this).parent().removeClass('state-1');
                $(this).parent().addClass('state-0');
              }),
                $('.item2').hover(function () {
                  $(this).parent().removeClass('state-2');
                  $(this).parent().addClass('state-0');
                }),
                $('.item3').hover(function () {
                  $(this).parent().removeClass('state-3');
                  $(this).parent().addClass('state-0');
                }),
                $('.item4').hover(function () {
                  $(this).parent().removeClass('state-4');
                  $(this).parent().addClass('state-0');
                })
            },
        },
        created() {
            this.url = process.env.API_BASE + "/../" + this.aboutus.companyIntroductionSmallImages;
            this.resetTop()
        },
        /*mounted() {

            const mySwiper = new Swiper('.swiper-container', {
                loop: true, //循环切换
                autoplay: true,//可选选项，自动滑动

                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },

              // 如果需要前进后退按钮
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            })
        }*/
    }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .homeContent {
        min-width 1200px
        padding-right 0
        padding-left 0
        margin-top 72px
        overflow hidden
        .container {
          .swiper-container {
            img {
              width 1100px
              height 373px
            }
            @media screen and (min-width: 320px) and (max-width: 420px) {
              img {
                width 100%
                height 164px
              }
            }
          }
          @media screen and (min-width: 320px) and (max-width: 420px) {
            .swiper-container {
              height 164px
            }
          }
          .yumo_carousel {
            width 100%
            max-height 370px
            .yumo_indicators {
                bottom -5px
                .yumo_generic {
                    width 12px
                    height 6px
                    background-color #fff
                    &.active {
                        background-color #ea5504
                    }
                }
            }
            .carousel-inner {
                .item {
                    img {
                        width 100%
                    }
                }
            }
        }

          .content_center {
            min-width 1100px
            padding-left 0
            padding-right 0
            .center_left {
                width 458px
                height 100%
                padding-left 0
                padding-top 30px
                margin-right 42px
                float left
                .left_top {
                    height 24px
                    .top_left {
                        float left
                        height 100%
                        padding-left 0
                        a {
                            text-decoration none
                            p {
                                font-size 16px
                                font-weight bold
                                font-family "微软雅黑"
                                color #333
                                overflow hidden
                                text-overflow ellipsis
                                white-space nowrap
                            }
                        }

                    }
                    .top_right {
                        float right
                        width 34px
                        height 100%
                        padding-left 0
                        a {
                            font-size 12px
                            font-family "微软雅黑"
                            color #666
                            padding-top 3px
                            text-decoration none
                        }
                    }
                }
                .left_center {
                    height 18px
                    a{
                        text-decoration none
                        p {
                            font-size 12px
                            font-family "微软雅黑"
                            color #999
                        }
                    }

                }
                .left_bottom {
                    height 58px
                    a{
                        text-decoration none
                        p {
                            text-align left
                            padding-top 8px
                            font-size 12px
                            font-family "微软雅黑"
                            color #333
                            overflow hidden
                            text-overflow ellipsis
                            display -webkit-box
                            -webkit-box-orient vertical
                            -webkit-line-clamp 3
                        }
                    }
                }
            }
            .center_right {
                width 600px
                padding-left 0
                padding-right 0
                float left
                .right_left {
                    width 330px
                    padding-left 0
                    padding-right 0
                    padding-top 20px
                    float left
                    .el-tabs--top {
                        .el-tab-pane {
                            font-size 12px
                            font-weight bold
                            color #333
                            .contentIcon {
                                font-size 12px
                                color #333333
                                font-weight bold
                                a {
                                    width 100%
                                    font-size 12px
                                    color #333
                                    display inline-block
                                    margin-top 5px
                                    text-decoration none
                                    overflow hidden
                                    white-space nowrap
                                    text-overflow ellipsis
                                }
                            }
                        }
                    }
                }
                .right_right {
                    width 270px
                    padding-right 0
                    padding-top 30px
                    padding-left 50px
                    float left
                    .right_info {
                        padding-right 0
                        padding-left 0
                        float left
                        p {
                            font-size 12px
                            font-weight bold
                            color #eb6429
                            margin-top 34px
                        }
                    }
                    .right_image {
                        padding-right 0
                        padding-left 0
                        width 97px
                        height 97px
                        border 1px solid #dddddd
                        margin-left 27px
                        float left
                        img {
                            padding 10px
                            width 97px
                            height 97px
                        }
                    }
                }
            }
        }
          .content_right {
            min-width 1100px
            height 124px
            margin-top 20px
            float left
            .bottomImage{
                position: relative;
                margin: 0 auto;
                width: 100%;
                height: 100%;
                overflow: hidden;
                &.state-0{
                    .item1{
                        left: 0;
                    }
                    .item2{
                        left: 340px;
                    }
                    .item3{
                        left: 574px;
                    }
                    .item4{
                        left: 793px;
                    }
                }
                &.state-1{
                    .item1{
                        left: 0;
                    }
                    .item2{
                        left: 492px;
                    }
                    .item3{
                        left: 705px;
                    }
                    .item4{
                        left: 917px;
                    }
                }
                &.state-2{
                    .item1{
                        left: 0;
                    }
                    .item2{
                        left: 212px;
                    }
                    .item3{
                        left: 705px;
                    }
                    .item4{
                        left: 917px;
                    }
                }
                &.state-3{
                    .item1{
                        left: 0;
                    }
                    .item2{
                        left: 212px;
                    }
                    .item3{
                        left: 425px;
                    }
                    .item4{
                        left: 917px;
                    }
                }
                &.state-4{
                    .item1{
                        left: 0;
                    }
                    .item2{
                        left: 212px;
                    }
                    .item3{
                        left: 425px;
                    }
                    .item4{
                        left: 637px;
                    }
                }
                .item1{
                    z-index: 1;
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    -webkit-opacity: 1;
                    opacity: 1;
                    display: block\9;
                    -webkit-transition: left 300ms, -webkit-opacity 700ms;
                    transition: left 300ms, opacity 700ms;
                    .p1{
                        left: 0;
                        top: 0;
                        width: 493px;
                        height: 100%;
                        position: absolute;
                        background: no-repeat 0 0;
                        img {
                            border: none;
                            height 100%
                        }
                    }
                }

                .item2{
                    z-index: 2;
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    -webkit-opacity: 1;
                    opacity: 1;
                    display: block\9;
                    -webkit-transition: left 300ms, -webkit-opacity 700ms;
                    transition: left 300ms, opacity 700ms;
                    .p1{
                        left: 0;
                        top: 0;
                        width: 493px;
                        height: 100%;
                        position: absolute;
                        background: no-repeat 0 0;
                        img {
                            border: none;
                            height 100%
                        }
                    }
                }

                .item3{
                    z-index: 3;
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    -webkit-opacity: 1;
                    opacity: 1;
                    display: block\9;
                    -webkit-transition: left 300ms, -webkit-opacity 700ms;
                    transition: left 300ms, opacity 700ms;
                    .p1{
                        left: 0;
                        top: 0;
                        width: 493px;
                        height: 100%;
                        position: absolute;
                        background: no-repeat 0 0;
                        img {
                            border: none;
                            height 100%
                        }
                    }
                }

                .item4{
                    z-index: 4;
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    -webkit-opacity: 1;
                    opacity: 1;
                    display: block\9;
                    -webkit-transition: left 300ms, -webkit-opacity 700ms;
                    transition: left 300ms, opacity 700ms;
                    .p1{
                        left: 0;
                        top: 0;
                        width: 493px;
                        height: 100%;
                        position: absolute;
                        background: no-repeat 0 0;
                        img {
                            border: none;
                            height 100%
                        }
                    }
                }


            }


            @media screen and (min-width: 320px) and (max-width: 420px) {
                img {
                    width 50%
                    height 100px
                }
            }
        }
        }
    }

</style>