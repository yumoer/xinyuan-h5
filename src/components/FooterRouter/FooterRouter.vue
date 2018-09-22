<template>
  <footer class="footer container-fluid" v-show="$route.meta.showFooter">
    <div class="content container">
      <div class="footerItem">
        <div class="footerList">
          <a href="javascript:;" @click="goto('/comeXY/introduction')">北京博大新元房地产开发有限公司</a>
          <a href="javascript:;">版权所有</a>
          <a href="javascript:;">粤ICP12345678</a>
          <a href="javascript:;">法律声明</a>
          <a href="javascript:;">网站地图</a>
          <a href="javascript:;" @click="goto('/news_center/yaowen')">联系我们</a>
        </div>
        <div class="footerEmail">
          <a href="javascript:;">企业邮箱：bodaxinyuan@bdaxinyuan.com</a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
  export default {
    methods: {
      goto(path) {
        this.$router.push(path)
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../static/css/stylus/mixins.styl"
  .footer{
    min-width 1200px
    position relative
    &::before {
      content ''
      position absolute
      left 50%
      margin-left -750px
      top 0
      width 1500px
      height 1.5px
      background-color #ddd
    }
    .content{
      .footerItem{
        padding-top 20px
        padding-bottom 20px
        .footerList{
          float left
          padding-right 8px
          a{
            font-size 12px
            color #333
            margin-right 20px
            text-decoration none
          }
        }
      }
      .footerEmail{
        padding-right 8px
        text-align right

        a{
          right 0
          font-size 12px
          color #333
          text-decoration none
        }
      }
    }
  }
</style>