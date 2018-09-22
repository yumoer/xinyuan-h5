import {
  RECEIVE_HOMEBANNER,

  RECEIVE_TRADINGAREA,
  RECEIVE_TRADINGAREAPAGE,
  RECEIVE_NEWSCENTERPAGE,
  RECEIVE_PARTY,
  RECEIVE_PARTYPAGE,
  RECEIVE_SECURITY,
  RECEIVE_SECURITYPAGE,

  RECEIVE_NEWSCENTER,
  RECEIVE_ADDEDSERVICE,
  RECEIVE_ADDEDSERVICEPAGE,
  RECEIVE_MERCANTILISM,
  RECEIVE_MERCANTILISMPAGE,
  RECEIVE_BUSINESSSERVICE,
  RECEIVE_INVESTMENTINFO,
  RECEIVE_INVESTMENTINFOPAGE,

  RECEIVE_NAVIGATIONBAR,
  RECEIVE_NAVIGATIONBARPAGE,
  RECEIVE_OPERATIONS,
  RECEIVE_OPERATIONSPAGE,
  RECEIVE_UNDERCONSTRUCTION,
  RECEIVE_UNDERCONSTRUCTIONPAGE,
  RECEIVE_ABOUTUS,

  RECEIVE_PHILOSOPHY,
  RECEIVE_ARTICLESBYID,
  RECEIVE_PROJECTBYID,
  RECEIVE_CIRCLEBYID,
  RECEIVE_CIRCLEBYIDAPP,
  RECEIVE_SERVIVEBYID,
  RECEIVE_SERVIVEBYIDAPP,
  RECEIVE_MANAGERBYIDAPP,
  RECEIVE_MANAGERBYID,
  RECEIVE_BUSINESSSERVIVE,

  RECEIVE_ALLMESSAGEBYIDAPP,

  RECEIVE_NEWRECRUITMENT,

  RECEIVE_ACTIVITIESAPP,
  RECEIVE_ACTIVITIESPAGEAPP,
} from './mutation-types'
import {
  reqHomeBanner,

  reqNewsCenter,
  reqNewsCenterpage,
  reqParty,
  reqPartypage,
  reqSecurity,
  reqSecurityPage,

  reqTradingArea,
  reqTradingAreapage,
  reqAddedService,
  reqAddedServicepage,
  reqMercantilism,
  reqMercantilismpage,
  reqBusinessService,
  reqInvestmentInfo,
  reqInvestmentInfopage,

  reqNavigationBar,
  reqNavigationBarpage,
  reqOperations,
  reqOperationspage,
  reqUnderconstruction,
  reqUnderconstructionpage,
  reqAboutUs,

  reqPhilosophy,
  reqArticlesById,
  reqProjectById,
  reqCircleById,
  reqCircleByIdApp,
  reqServiveById,
  reqServiveByIdApp,

  reqAllmessageByIdApp,

  reqManagerByIdApp,
  reqManagerById,
  reqNewRecruitment,

  reqActivitiesApp,
  reqActivitiespageApp,
} from '../api'
import promise from 'es6-promise';
promise.polyfill();
// 异步获取
export default {
  /*新闻中心*/
  async getHomeBanner({commit,state}) {
    const {page,limit} = state
    const result = await reqHomeBanner(page,limit)
    if(result.code===0){
      const homebanner = result.data
      commit(RECEIVE_HOMEBANNER, {homebanner})
    }
    // callback && callback()
  },

  /*新闻中心*/
  async getNewsCenter({commit,state}) {
    const {type,page,limit,typeNet} = state
    const result = await reqNewsCenter(type,page,limit,typeNet)
    if(result.code===0){
      const newscenter = result.data
      commit(RECEIVE_NEWSCENTER, {newscenter})
    }
    // callback && callback()
  },
  async getNewsCenterpage({commit,state},{page,limit}) {
    const result = await reqNewsCenterpage(page,limit)
    if(result.code===0){
      const newscenterpage = result.data
      commit(RECEIVE_NEWSCENTERPAGE, {newscenterpage})
    }
    // callback && callback()
  },
  /*党建园区*/
  async getParty({commit,state}) {
    const {type,page,limit,typeNet} = state
    const result = await reqParty(type,page,limit,typeNet)
    if(result.code===0){
      const party = result.data
      commit(RECEIVE_PARTY, {party})
    }
    // callback && callback()
  },
  async getPartypage({commit,state},{page,limit}) {
    const result = await reqPartypage(page,limit)
    if(result.code===0){
      const partypage = result.data
      commit(RECEIVE_PARTYPAGE, {partypage})
    }
    // callback && callback()
  },
  /*安全园区*/
  async getSecurity({commit,state}) {
    const {} = state
    const result = await reqSecurity()
    if(result.code===0){
      const security = result.data
      commit(RECEIVE_SECURITY, {security})
    }
    // callback && callback()
  },
  async getSecurityPage({commit,state},{page,limit}) {
    const result = await reqSecurityPage(page,limit)
    if(result.code===0){
      const securitypage = result.data
      commit(RECEIVE_SECURITYPAGE, {securitypage})
    }
    // callback && callback()
  },


  /*商圈介绍*/
  async getTradingArea({commit,state}) {
    const {page,limit} = state
    const result = await reqTradingArea(page,limit)
    if(result.code===0){
      const tradingarea = result.data
      commit(RECEIVE_TRADINGAREA, {tradingarea})
    }
    // callback && callback()
  },
  async getTradingAreapage({commit,state},{page,limit}) {
    const result = await reqTradingAreapage(page,limit)
    if(result.code===0){
      const tradingareapage = result.data
      commit(RECEIVE_TRADINGAREAPAGE, {tradingareapage})
    }
    // callback && callback()
  },
  /*增值服务*/
  async getAddedService({commit,state}) {
    const {type,page,limit} = state
    const result = await reqAddedService(type,page,limit)
    if(result.code===0){
      const addedservice = result.data
      commit(RECEIVE_ADDEDSERVICE, {addedservice})
    }
    // callback && callback()
  },
  async getAddedServicepage({commit,state},{page,limit}) {
    const result = await reqAddedServicepage(page,limit)
    if(result.code===0){
      const addedservicepage = result.data
      commit(RECEIVE_ADDEDSERVICEPAGE, {addedservicepage})
    }
    // callback && callback()
  },
  /*商业活动*/
  async getMercantilism({commit,state}) {
    const {type,page,limit} = state
    const result = await reqMercantilism(type,page,limit)
    if(result.code===0){
      const mercantilism = result.data
      commit(RECEIVE_MERCANTILISM, {mercantilism})
    }
    // callback && callback()
  },

  async getMercantilismpage({commit,state},{page,limit}) {
    const result = await reqMercantilismpage(page,limit)
    if(result.code===0){
      const mercantilismpage = result.data
      commit(RECEIVE_MERCANTILISMPAGE, {mercantilismpage})
    }
    // callback && callback()
  },
  /*商业服务信息*/
  async getBusinessService({commit,state}) {
    const {type,page,limit} = state
    const result = await reqBusinessService(type,page,limit)
    if(result.code===0){
      const businessservice = result.data
      commit(RECEIVE_BUSINESSSERVICE, {businessservice})
    }
    // callback && callback()
  },
  /*招商信息*/
  async getInvestmentInfo({commit,state}) {
    const {type,page,limit} = state
    const result = await reqInvestmentInfo(type,page,limit)
    if(result.code===0){
      const investmentinfo = result.data
      commit(RECEIVE_INVESTMENTINFO, {investmentinfo})
    }
    // callback && callback()
  },
  async getInvestmentInfopage({commit,state},{page,limit}) {
    const result = await reqInvestmentInfopage(page,limit)
    if(result.code===0){
      const investmentinfopage = result.data
      commit(RECEIVE_INVESTMENTINFOPAGE, {investmentinfopage})
    }
    // callback && callback()
  },

  /*招聘信息*/
  async getNavigationBar({commit,state},{jobName,page,limit}) {
    const result = await reqNavigationBar(jobName,page,limit)
    if(result.code===0){
      const navigationbar = {}
      navigationbar.navigationbar= result.data
      commit(RECEIVE_NAVIGATIONBAR, {navigationbar})
    }
  },
  /*async getNavigationBarpage({commit,state},{jobName,page,limit}) {
    const result = await reqNavigationBarpage(jobName,page,limit)
    if(result.code===0){
      const navigationbarpage = result.data
      commit(RECEIVE_NAVIGATIONBARPAGE, {navigationbarpage})
    }
  },*/
  /*企业运营项目*/
  async getOperations({commit,state}) {
    const {type,page,limit} = state
    const result = await reqOperations(type,page,limit)
    // console.log(result.data[0].id)
    if(result.code===0){
      const operations = result.data
      commit(RECEIVE_OPERATIONS, {operations})
    }
    // callback && callback()
  },
  async getOperationspage({commit,state},{page,limit}) {
    const result = await reqOperationspage(page,limit)
    // console.log(result.data[0].id)
    if(result.code===0){
      const operationspage = result.data
      commit(RECEIVE_OPERATIONSPAGE, {operationspage})
    }
    // callback && callback()
  },
  /*企业在建项目*/
  async getUnderconstruction({commit,state}) {
    const {type,page,limit} = state
    const result = await reqUnderconstruction(type,page,limit)
    // console.log(result.data[0].id)
    if(result.code===0){
      let underconstruction = result.data
      commit(RECEIVE_UNDERCONSTRUCTION, {underconstruction})
    }
    // callback && callback()
  },
  async getUnderconstructionpage({commit,state},{page,limit}) {
    const result = await reqUnderconstructionpage(page,limit)
    // console.log(result.data[0].id)
    if(result.code===0){
      let underconstructionpage = result.data
      commit(RECEIVE_UNDERCONSTRUCTIONPAGE, {underconstructionpage})
    }
    // callback && callback()
  },
  /*关于我们*/
  async getAboutUs({commit,state}) {
    const {page,limit} = state
    const result = await reqAboutUs(page,limit)
    if(result.code===0){
      const aboutus = result.data
      commit(RECEIVE_ABOUTUS, {aboutus})
    }
    // callback && callback()
  },



  /*根据ID查询新闻及活动文章内容*/
  async getArticlesById({commit,state},{id}) {
    const result = await reqArticlesById(id)
    if(result.code===0){
      const articlesbyid = result.body
      commit(RECEIVE_ARTICLESBYID, {articlesbyid})
    }
    // callback && callback()
  },

  /*根据id查询运营或在建项目内容*/
  async getProjectById({commit,state},{id}) {
    const result = await reqProjectById(id)
    if(result.code===0){
      const projectbyid = result.body
      commit(RECEIVE_PROJECTBYID, {projectbyid})
    }
    // callback && callback()
  },

  /*根据id查询商圈介绍信息*/
  async getCircleById({commit,state},{id}) { /**/
    // const {id} = state
    const result = await reqCircleById(id) /*obj.id*/
    if(result.code===0){
      const circlebyid = result.body
      commit(RECEIVE_CIRCLEBYID, {circlebyid})
    }
    // callback && callback()
  },
  async getCircleByIdApp({commit,state},{id}) { /**/
    // const {id} = state
    const result = await reqCircleByIdApp(id) /*obj.id*/
    if(result.code===0){
      const circlebyidapp = result.body
      commit(RECEIVE_CIRCLEBYIDAPP, {circlebyidapp})
    }
    // callback && callback()
  },

  /*根据id查询商业活动信息*/
  async getServiveById({commit,state},{id}) {
    const result = await reqServiveById(id) /*obj.id*/
    
    if(result.code===0){
      const servivebyid = result.body;
      commit(RECEIVE_SERVIVEBYID, {servivebyid})
    }
    // callback && callback()
  },

  async getAllmessageByIdApp({commit,state},{id}) {
    const result = await reqAllmessageByIdApp(id)
    const allmessagebyidapp = result
    commit(RECEIVE_ALLMESSAGEBYIDAPP, {allmessagebyidapp})
    /*if(result.code===0){

    }*/
    // callback && callback()
  },

  async getServiveByIdApp({commit,state},{id}) {
    const result = await reqServiveByIdApp(id) /*obj.id*/
    if(result.code===0){
      const servivebyidapp = result.body;
      commit(RECEIVE_SERVIVEBYIDAPP, {servivebyidapp})
    }
    // callback && callback()
  },

  /*根据id查询增值服务(app)*/
  async getManagerByIdApp({commit,state},{id}) {
    const result = await reqManagerByIdApp(id) /*obj.id*/
    if(result.code===0){
      const managerbyidapp = result.body;
      commit(RECEIVE_MANAGERBYIDAPP, {managerbyidapp})
    }
    // callback && callback()
  },

  async getManagerById({commit,state}) {
    const {page,limit,brandId,projectTypeId} = state
    const result = await reqManagerById(page,limit,brandId,projectTypeId) /*obj.id*/
    if(result.code===0){
      const managerbyid = result.body;
      commit(RECEIVE_MANAGERBYID, {managerbyid})
    }
    // callback && callback()
  },
  /*查询企业介绍和理念*/
  async getPhilosophy({commit,state},type) {
    const result = await reqPhilosophy(type)
    if(result.code===0){
      const philosophy = result.data
      commit(RECEIVE_PHILOSOPHY, {philosophy})
    }
    // callback && callback()
  },

  // 新增招聘报名
  async getNewRecruitment({commit,state}) {
    const {name,telephone,type,typeId} = state
    const result = await reqNewRecruitment(name,telephone,type,typeId)
    if(result.code===0){
      const newrecruitment = result.body;
      commit(RECEIVE_NEWRECRUITMENT, {newrecruitment})
    }
    // callback && callback()
  },

  /*活动报名*/
  async getActivitiesApp({commit,state},{id,userName,userPhone}) {
    const result = await reqActivitiesApp(id,userName,userPhone)
    if(result.code===0){
      const activitiesapp = result;
      commit(RECEIVE_ACTIVITIESAPP, {activitiesapp})
    }
    // callback && callback()
  },

  /*体验活动*/
  async getActivitiespageApp({commit,state},{id}) {
    const result = await reqActivitiespageApp(id)
    const activitiespageapp = result;
    commit(RECEIVE_ACTIVITIESPAGEAPP, {activitiespageapp})
    // callback && callback()
  },
}


