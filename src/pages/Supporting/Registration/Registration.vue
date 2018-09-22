<template>
  <div id="container_wrap">
    <header class="header">
      <img @click="jsFinish" src="../../../assets/img/btnback.png" alt="">
      <span>我的活动详情</span>
    </header>
    <div class="content_wrap" v-for="(activitiespage,index) in activitiespageapp.salesPromotionList" :key="index">
      <div class="content_name">
        <span>{{activitiespage.title}}</span>
      </div>
      <div class="content_time">
        <span>发布于 {{activitiespage.createTime.split('T')[0]}}</span>
      </div>
      <div class="content_image">
        <img :src="activitiespage.picture" alt="">
      </div>
      <div class="content_info">
        <p>{{activitiespage.sellerContent}}</p>
      </div>
    </div>
    <el-form class="content_bottom">
      <span>我的报名</span><br>
      <el-input
        :placeholder='userName'
        v-model="userName"
        disabled
        clearable style="width: 84%;margin-top: 16pt;background-color: #fff">
      </el-input>
      <el-input
        :placeholder="userPhone"
        v-model="userPhone"
        disabled
        clearable style="width: 84%;margin-top: 10pt;background-color: #fff">
      </el-input>
      <el-row style="margin-top: 40pt">
        <el-button type="primary" @click="onSubmit" style="width: 92%;color: #fff;background-color: #dddddd;border-color: #dddddd">已报名</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  import { MessageBox} from 'mint-ui';

  import {mapState} from 'vuex'
  import {reqActivitiesApp} from '../../../api'
  import axios from 'axios'
  export default {
    data() {
      return {
        id:10,
        userName: '',
        userPhone: '',
        showInput : false,
      }
    },
    methods: {
      jsFinish(){
        if(window.webkit){
          window.webkit.messageHandlers.popVC.postMessage({name:'popVC'})
        }else{
          interaction.h5_finish();
        }
      },
      async onSubmit() {
        axios.defaults.headers.common['X-AUTH-TOKEN'] = location.href.split("&token=")[1].split('&name')[0] //实例化Vue
        const {id,userName,userPhone} = this
        const result = await reqActivitiesApp(id,userName,userPhone)
        // this.$store.dispatch('getActivitiesApp',{id:this.id || location.href.split("?id=")[1].split('&')[0],userName:this.inputname,userPhone:this.inputphone})
        if(result.code === -1008){
          MessageBox('提示', result.message);
        }else if(result.code === -1009){
          MessageBox('提示', result.message);
        }else {
          MessageBox('提示', result.message);
          this.showInput = true
          this.userName = ''
          this.userPhone = ''
        }
      }
    },
    computed:{
      ...mapState(['activitiesapp']),
      ...mapState(['activitiespageapp'])
    },
    mounted(){
      axios.defaults.headers.common['X-AUTH-TOKEN'] = location.href.split("&token=")[1].split('&name=')[0] //实例化Vue
      this.$store.dispatch('getActivitiespageApp',{id:location.href.split("?id=")[1].split('&')[0]})
      const userName = location.href.split("&token=")[1].split('&name=')[1].split('&phone=')[0]
      this.userName =userName
      const userPhone = location.href.split("&token=")[1].split('&name=')[1].split('&phone=')[1]
      this.userPhone =userPhone
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#container_wrap
  width 100%
  position relative
  .header
    width 100%
    height 48pt
    background #ff7e00
    position fixed
    img
      display inline-block
      width 10pt
      height 14pt
      margin-left 10pt
      position absolute
      top 23pt
    span
      line-height 56pt
      display block
      text-align center
      font-family "Microsoft YaHei"
      font-size 13pt
      color #fff
      margin 0 auto

  .content_wrap
    width 100%
    padding-top 57pt
    .content_name
      display block
      text-align center
      margin-top 23pt
      span
        font-family 'Microsoft YaHei'
        font-size 13pt
        color #333333
    .content_time
      display block
      text-align right
      margin 15pt 10pt 9pt 10pt
      span
        font-family 'Microsoft YaHei'
        font-size 10pt
        color #999
    .content_image
      margin 0 10pt
      img
        width 100%
        height 120pt
    .content_info
      margin 23pt 10pt 25pt 10pt
      display block
      text-align left
      p
        font-family 'Microsoft YaHei'
        font-size 12pt
        color #333
        text-overflow ellipsis
        display -webkit-box
        -webkit-box-orient vertical
        -webkit-line-clamp 4
  .content_bottom
    width 100%
    padding-bottom 66pt
    background #f5f5f5
    display block
    text-align center
    padding-top 28pt
    span
      font-family 'Microsoft YaHei'
      font-size 13pt
      color #999
    input
      width 100%
      height 15pt
      margin 8pt 10pt
    .text_bm
      margin-top 40pt
      display block
      text-align center
      background #ddd
      width 266px
      height 20pt
      span
        font-family 'Microsoft YaHei'
        font-size 15pt
        color #333333
</style>