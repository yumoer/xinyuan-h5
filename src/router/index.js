import Vue from 'vue'
import Router from 'vue-router'

/*一级导航*/
/*import Home from '../pages/Home/Home'
import Xinyuan from '../pages/Xinyuan/Xinyuan'
import Xinwen from '../pages/Xinwen/Xinwen'
import Zhuzhai from '../pages/Zhuzhai/Zhuzhai'
import Fuwu from '../pages/Fuwu/Fuwu'
import Zhaopin from '../pages/Zhaopin/Zhaopin'
import About from '../pages/About/About'*/

const Home = () => import('../pages/Home/Home')
const Xinyuan = () => import('../pages/Xinyuan/Xinyuan')
const Xinwen = () => import('../pages/Xinwen/Xinwen')
const Zhuzhai = () => import('../pages/Zhuzhai/Zhuzhai')
const Fuwu = () => import('../pages/Fuwu/Fuwu')
const Zhaopin = () => import('../pages/Zhaopin/Zhaopin')
const About = () => import('../pages/About/About')

import Circle from '../pages/Supporting/Circle/Circle'
import Activities from '../pages/Supporting/Activities/Activities'
import ValueAdded from '../pages/Supporting/ValueAdded/ValueAdded'
import Details from '../pages/Supporting/Details/Details'
import Registration from '../pages/Supporting/Registration/Registration'

/*走进新元二级导航*/
import Linian from '../pages/Xinyuan/Linian/Linian'
import Jieshao from '../pages/Xinyuan/Jieshao/Jieshao'

/*新闻中心二级导航*/
import Yaowen from '../pages/Xinwen/Yaowen/Yaowen'
import Dangjian from '../pages/Xinwen/Dangjian/Dangjian'
import Anquan from '../pages/Xinwen/Anquan/Anquan'

import YaowenDetails from '../pages/Xinwen/Yaowen/YaowenDetails/YaowenDetails'
import DangjianDetails from '../pages/Xinwen/Dangjian/DangjianDetails/DangjianDetails'
import AnquanDetails from '../pages/Xinwen/Anquan/AnquanDetails/AnquanDetails'

/*住宅项目二级导航*/
import Zaijian from '../pages/Zhuzhai/Zaijian/Zaijian'
import Yunying from '../pages/Zhuzhai/Yunying/Yunying'
import YunyingDetails from '../pages/Zhuzhai/Yunying/YunyingDetails/YunyingDetails'
import ZaijianDetails from '../pages/Zhuzhai/Zaijian/ZaijianDetails/ZaijianDetails'

/*配套服务二级导航*/
import Zhaoshang from '../pages/Fuwu/Zhaoshang/Zhaoshang'
import Zengzhi from '../pages/Fuwu/Zengzhi/Zengzhi'
import Huodong from '../pages/Fuwu/Huodong/Huodong'
import Shangquan from '../pages/Fuwu/Shangquan/Shangquan'

/*商圈详情页二级路由*/
import ShangquanDetails from '../pages/Fuwu/Shangquan/ShangquanDetails/ShangquanDetails'

/*商圈介绍三级路由*/
import Trading from '../pages/Fuwu/Shangquan/ShangquanDetails/Trading/Trading'
import Atlas from '../pages/Fuwu/Shangquan/ShangquanDetails/Atlas/Atlas'
import Brand from '../pages/Fuwu/Shangquan/ShangquanDetails/Brand/Brand'

/*商业活动详情页二级路由*/
import HuodongDetails from '../pages/Fuwu/Huodong/HuodongDetails/HuodongDetails'

/*增值服务详情页二级路由*/
import ZengzhiDetails from '../pages/Fuwu/Zengzhi/ZengzhiDetails/ZengzhiDetails'

/*招商信息详情页*/
import ZhaoshangDetails from '../pages/Fuwu/Zhaoshang/ZhaoshangDetails/ZhaoshangDetails'

/*使用插件vue-router*/
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  meta: {
    isRouterAlive: false, //此组件不需要被缓存
  },
  routes: [
    {
      path:'/',
      redirect:'/home',
      meta:{
        showFooter:true, //是否显示尾部
        showHeader:true, //是否显示头部
        keepAlive: true, // 此组件需要被缓存
        isBack:false, //用于判断上一个页面是哪个
      }
    },
    {
      path:'/circle',
      component:Circle
    },
    {
      path:'/activities',
      component:Activities
    },
    {
      path:'/valueadded',
      component:ValueAdded
    },
    {
      path:'/details',
      component:Details
    },
    {
      path:'/registration',
      component:Registration
    },
    {
      path:'/home',
      component:Home,
      meta:{
        showFooter:true,
        showHeader:true,
        keepAlive:true,
        isBack:false
      }
    },
    {
      path:'/comeXY',
      component:Xinyuan,
      meta:{
        showFooter:true,
        showHeader:true,
        keepAlive:true,
        isBack:false
      },
      children: [
        {
          path:'',
          redirect:'introduction',
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        },
        {
          path: 'introduction',
          component: Jieshao,
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        },
        {
          path: 'idea',
          component: Linian,
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        }
      ]
    },
    {
      path:'/news_center',
      component:Xinwen,
      meta:{
        showFooter:true,
        showHeader:true,
        keepAlive:true,
        isBack:false
      },
      children: [
        {
          path:'',
          redirect:'company',
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        },
        {
          path: 'company',
          component: Yaowen,
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        },
        {
          path:'companydetails',
          component:YaowenDetails,
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        },
        {
          path: 'party',
          component: Dangjian,
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        },
        {
          path:'partydetails',
          component:DangjianDetails,
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        },
        {
          path: 'security',
          component: Anquan,
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        },
        {
          path:'securitydetails',
          component:AnquanDetails,
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        },
      ]
    },
    {
      path:'/residential',
      component:Zhuzhai,
      meta:{
        showFooter:true,
        showHeader:true,
        keepAlive:true,
        isBack:false
      },
      children: [
        {
          path:'',
          redirect:'operating',
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        },
        {
          path: 'operating',
          component: Yunying,
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        },
        {
          path: 'underconstruction',
          name:'Zaijian',
          component: Zaijian,
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        },
        {
          path:'operatingdetails',
          name:'operatingDetails',
          component:YunyingDetails,
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        },
        {
          path:'underconstructiondetails',
          component:ZaijianDetails,
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        }
      ]
    },
    {
      path:'/assortService',
      component:Fuwu,
      meta:{
        showFooter:true,
        showHeader:true,
        keepAlive:true,
        isBack:false
      },
      children: [
        {
          path:'',
          redirect:'circle',
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        },
        {
          path: 'circle',
          component: Shangquan,
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        },
        {
          path: 'circledetails',
          name:'circledetails',
          component: ShangquanDetails,
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:false,
            savedPosition:true,
            isBack:false
          },
          children:[
            {
              path:'',
              redirect:'trading',
              name:'trading',
              meta:{
                showFooter:true,
                showHeader:true,
                keepAlive:false,
                savedPosition:true,
                isBack:false
              },
            },
            {
              path:'trading',
              component: Trading,
              name:'trading',
              meta:{
                showFooter:true,
                showHeader:true,
                keepAlive:false,
                savedPosition:true,
                isBack:false
              },
            },
            {
              path:'atlas',
              name:'atlas',
              component: Atlas,
              meta:{
                showFooter:true,
                showHeader:true,
                keepAlive:false,
                savedPosition:true,
                isBack:false
              },
            },
            {
              path:'brand',
              name:'brand',
              component: Brand,
              meta:{
                showFooter:true,
                showHeader:true,
                keepAlive:false,
                savedPosition:true,
                isBack:false
              },
            }
          ]
        },
        {
          path: 'businessactivity',
          component: Huodong,
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        },
        {
          path: 'businessactivitydetails',
          component: HuodongDetails,
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        },
        {
          path: 'value-added',
          component: Zengzhi,
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        },
        {
          path: 'value-addeddetails',
          component: ZengzhiDetails,
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        },
        {
          path: 'merchantsinfo',
          component: Zhaoshang,
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        },
        {
          path:'merchantsinfodetails',
          component:ZhaoshangDetails,
          meta:{
            showFooter:true,
            showHeader:true,
            keepAlive:true,
            isBack:false
          },
        }
      ]
    },
    {
      path:'/zhaopin',
      component:Zhaopin,
      meta:{
        showFooter:true,
        showHeader:true,
        keepAlive:true,
        isBack:false
      },
    },
    {
      path:'/about',
      component:About,
      meta:{
        showFooter:true,
        showHeader:true,
        keepAlive:true,
        isBack:false
      },
    },
  ],

  scrollBehavior(to, from) {
    if (from.meta.keepAlive) {
      return {x:0,y:0}
    } else {
      if (!from.meta.keepAlive) {
        return { x: 0, y: document.documentElement.scrollTop || 0 }
      }
    }
  },
})
