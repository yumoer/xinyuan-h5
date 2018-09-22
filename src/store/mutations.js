
import {
  RECEIVE_HOMEBANNER,

  RECEIVE_NEWSCENTER,
  RECEIVE_NEWSCENTERPAGE,
  RECEIVE_PARTY,
  RECEIVE_PARTYPAGE,
  RECEIVE_SECURITY,
  RECEIVE_SECURITYPAGE,

  RECEIVE_TRADINGAREA,
  RECEIVE_TRADINGAREAPAGE,
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
  RECEIVE_BUSINESSSERVIVE,
  RECEIVE_MANAGERBYIDAPP,
  RECEIVE_MANAGERBYID,

  RECEIVE_ALLMESSAGEBYIDAPP,

  RECEIVE_NEWRECRUITMENT,

  RECEIVE_ACTIVITIESAPP,
  RECEIVE_ACTIVITIESPAGEAPP
} from './mutation-types'

export default{
  /*首页banner*/
  [RECEIVE_HOMEBANNER](state,{homebanner}) {
    state.homebanner = homebanner
  },

  /*新闻中心*/
  [RECEIVE_NEWSCENTER](state,{newscenter}) {
    state.newscenter = newscenter
  },
  [RECEIVE_NEWSCENTERPAGE](state,{newscenterpage}) {
    state.newscenterpage = newscenterpage
  },
  /*党建园区*/
  [RECEIVE_PARTY](state,{party}) {
    state.party = party
  },
  [RECEIVE_PARTYPAGE](state,{partypage}) {
    state.partypage = partypage
  },
  /*安全园区*/
  [RECEIVE_SECURITY](state,{security}) {
    state.security = security
  },
  [RECEIVE_SECURITYPAGE](state,{securitypage}) {
    state.securitypage = securitypage
  },


  /*商圈介绍*/
  [RECEIVE_TRADINGAREA](state,{tradingarea}) {
    state.tradingarea = tradingarea
  },
  [RECEIVE_TRADINGAREAPAGE](state,{tradingareapage}) {
    state.tradingareapage = tradingareapage
  },
  /*增值服务*/
  [RECEIVE_ADDEDSERVICE](state,{addedservice}) {
    state.addedservice = addedservice
  },
  [RECEIVE_ADDEDSERVICEPAGE](state,{addedservicepage}) {
    state.addedservicepage = addedservicepage
  },
  /*商业活动*/
  [RECEIVE_MERCANTILISM](state,{mercantilism}) {
    state.mercantilism = mercantilism
  },
  [RECEIVE_MERCANTILISMPAGE](state,{mercantilismpage}) {
    state.mercantilismpage = mercantilismpage
  },
  /*商业服务信息*/
  [RECEIVE_BUSINESSSERVICE](state,{businessservice}) {
    state.businessservice = businessservice
  },
  /*招商信息*/
  [RECEIVE_INVESTMENTINFO](state,{investmentinfo}) {
    state.investmentinfo = investmentinfo
  },
  [RECEIVE_INVESTMENTINFOPAGE](state,{investmentinfopage}) {
    state.investmentinfopage = investmentinfopage
  },
  /*招聘信息*/
  [RECEIVE_NAVIGATIONBAR](state,{navigationbar}) {
    state.navigationbar = navigationbar
  },
  [RECEIVE_NAVIGATIONBARPAGE](state,{navigationbarpage}) {
    state.navigationbarpage = navigationbarpage
  },
  /*企业运营项目*/
  [RECEIVE_OPERATIONS](state,{operations}) {
    state.operations = operations
  },
  [RECEIVE_OPERATIONSPAGE](state,{operationspage}) {
    state.operationspage = operationspage
  },
  /*在建项目*/
  [RECEIVE_UNDERCONSTRUCTION](state,{underconstruction}) {
    state.underconstruction = underconstruction
  },
  [RECEIVE_UNDERCONSTRUCTIONPAGE](state,{underconstructionpage}) {
    state.underconstructionpage = underconstructionpage
  },
  /*关于我们*/
  [RECEIVE_ABOUTUS](state,{aboutus}) {
    state.aboutus = aboutus
  },

  /*查询企业介绍和理念*/
  [RECEIVE_PHILOSOPHY](state,{philosophy}) {
    state.philosophy = philosophy
  },

  /*根据ID查询新闻及活动文章内容*/
  [RECEIVE_ARTICLESBYID](state,{articlesbyid}) {
    state.articlesbyid = articlesbyid
  },
  /*根据id查询运营或在建项目内容*/
  [RECEIVE_PROJECTBYID](state,{projectbyid}) {
    state.projectbyid = projectbyid
  },
  /*根据id查询商圈介绍信息*/
  [RECEIVE_CIRCLEBYID](state,{circlebyid}) {
    state.circlebyid = circlebyid
  },
  [RECEIVE_CIRCLEBYIDAPP](state,{circlebyidapp}) {
    state.circlebyidapp = circlebyidapp
  },
  /*根据id查询商业活动信息*/
  [RECEIVE_SERVIVEBYID](state,{servivebyid}) {
    state.servivebyid = servivebyid
  },
  [RECEIVE_ALLMESSAGEBYIDAPP](state,{allmessagebyidapp}) {
    state.allmessagebyidapp = allmessagebyidapp
  },

  /*根据id查询招商信息*/
  [RECEIVE_SERVIVEBYIDAPP](state,{servivebyidapp}) {
    state.servivebyidapp = servivebyidapp
  },

  /*根据id查询增值服务信息*/
  [RECEIVE_BUSINESSSERVIVE](state,{businessservive}) {
    state.businessservive = businessservive
  },
  [RECEIVE_MANAGERBYIDAPP](state,{managerbyidapp}) {
    state.managerbyidapp = managerbyidapp
  },
  [RECEIVE_MANAGERBYID](state,{managerbyid}) {
    state.managerbyid = managerbyid
  },

  /*新增招聘报名*/
  [RECEIVE_NEWRECRUITMENT](state,{newrecruitment}) {
    state.newrecruitment = newrecruitment
  },

  /*活动报名*/
  [RECEIVE_ACTIVITIESAPP](state,{activitiesapp}) {
    state.activitiesapp = activitiesapp
  },
  /*体验活动*/
  [RECEIVE_ACTIVITIESPAGEAPP](state,{activitiespageapp}) {
    state.activitiespageapp = activitiespageapp
  },

}

