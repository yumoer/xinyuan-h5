<template>
  <div id="app">
    <div class="container-fluid">
      <HeaderRouter/>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
      <FooterRouter/>
    </div>
  </div>
</template>

<script>
import HeaderRouter from "./components/HeaderRouter/HeaderRouter";
import FooterRouter from "./components/FooterRouter/FooterRouter";
export default {
  name: 'App',
  provide(){
    return {
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  components: {
    HeaderRouter,
    FooterRouter
  },
  computed:{
    // ...mapActions(['getTradingArea'])
  },
  methods:{
    reload (){
      this.isRouterAlive = false
      this.$nextTick(function(){
        console.log('111')
        this.isRouterAlive = true
      })
    }
  },
  mounted(){
    /*this.$store.dispatch('getTradingArea')
    this.$store.dispatch('getParty')
    this.$store.dispatch('getSecurity')
    this.$store.dispatch('getAboutUs')
    this.$store.dispatch('getHomeBanner')*/
    //异步获取newnodes
    /*this.$store.dispatch('getHomeBanner')

    this.$store.dispatch('getTradingArea')
    this.$store.dispatch('getParty')
    this.$store.dispatch('getSecurity')

    this.$store.dispatch('getNewsCenter')
    /!*this.$store.dispatch('getAddedService')
    this.$store.dispatch('getMercantilism')
    this.$store.dispatch('getBusinessService')
    this.$store.dispatch('getInvestmentInfo')

    this.$store.dispatch('getNavigationBar')
    this.$store.dispatch('getOperations')
    this.$store.dispatch('getUnderconstruction')*!/
    this.$store.dispatch('getAboutUs')

    // this.$store.dispatch('getPhilosophy')
    this.$store.dispatch('getArticlesById')
    this.$store.dispatch('getProjectById')
    this.$store.dispatch('getCircleById')
    this.$store.dispatch('getServiveById')*/
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#app {
  width 100%
  font-family "微软雅黑"
  overflow auto
}
</style>
