/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import {Promise} from 'es6-promise';
Promise.polyfill();
import ajax from './ajax'
const BASE_URL = process.env.API_BASE;
// const BASE_URL = 'http://192.168.101.43/web'
const CASE_URL = 'http://192.168.101.43'
// const DASE_URL = 'http://192.168.0.106:12000'
// const CASE_URL = 'http://xyproject.test.admin.prd.jingcaiwang.cn'

/*首页banner*/
export const reqHomeBanner = (page,limit) => ajax(BASE_URL+'/open/homeBanner/findAllHomeBannersLayUI?page=1&limit=1',{page,limit},'POST')

/*新闻中心文章*/
export const reqNewsCenter = (type,typeApp,page,limit) => ajax(BASE_URL+'/open/newscenter/findNewsCenterByType?type=net&typeApp=company&page=1&limit=100',{type,typeApp,page,limit},'POST')
export const reqNewsCenterpage = (page,limit) => ajax(BASE_URL+'/open/newscenter/findNewsCenterByType?type=net&typeApp=company&page='+page+'&limit='+limit,{page,limit},'POST')
/*党建园区*/
export const reqParty = (type,typeApp,page,limit) => ajax(BASE_URL+'/open/newscenter/findNewsCenterByType?type=net&typeApp=party&page=1&limit=100',{type,typeApp,page,limit},'POST')
export const reqPartypage = (page,limit) => ajax(BASE_URL+'/open/newscenter/findNewsCenterByType?type=net&typeApp=party&page='+page+'&limit='+limit,{page,limit},'POST')
/*安全园区*/
export const reqSecurity = () => ajax(BASE_URL+'/open/newscenter/findNewsCenterByType?type=net&typeApp=security&page=1&limit=100',{},'POST')
export const reqSecurityPage = (page,limit) => ajax(BASE_URL+'/open/newscenter/findNewsCenterByType?type=net&typeApp=security&page='+page+'&limit='+limit,{page,limit},'POST')


/*商圈介绍列表*/
export const reqTradingArea = (page,limit) => ajax(BASE_URL +'/open/businessCircle/findAllBusinessCirclesAndBrandMarketers?page=1&limit=100',{page,limit},'POST')
export const reqTradingAreapage = (page,limit) => ajax(BASE_URL +'/open/businessCircle/findAllBusinessCirclesAndBrandMarketers?page='+page+'&limit='+limit,{page,limit},'POST')
/*增值服务列表*/
export const reqAddedService = (type,page,limit) => ajax(BASE_URL+'/open/businessService/findAllBusinessServices?type=value-added&page=1&limit=100',{type,page,limit},'POST')
export const reqAddedServicepage = (page,limit) => ajax(BASE_URL+'/open/businessService/findAllBusinessServices?type=value-added&page='+page+'&limit='+limit,{page,limit},'POST')
/*商业活动列表*/
export const reqMercantilism = (type,page,limit) => ajax(BASE_URL+'/open/businessService/findAllBusinessServices?type=businessactivity&page=1&limit=100',{type,page,limit},'POST')
export const reqMercantilismpage = (page,limit) => ajax(BASE_URL+'/open/businessService/findAllBusinessServices?type=businessactivity&page='+page+'&limit='+limit,{page,limit},'POST')
/*商业服务信息列表*/
export const reqBusinessService = (type,page,limit) => ajax(BASE_URL+'/open/businessService/findAllBusinessServices?type=businessactivity&page=1&limit=100',{type,page,limit},'POST')
/*招商信息列表*/
export const reqInvestmentInfo = (type,page,limit) => ajax(BASE_URL+'/open/businessService/findAllBusinessServices?type=merchantsinfo&page=1&limit=100',{type,page,limit},'POST')
export const reqInvestmentInfopage = (page,limit) => ajax(BASE_URL+'/open/businessService/findAllBusinessServices?type=merchantsinfo&page='+page+'&limit='+limit,{page,limit},'POST')

/*招聘信息列表*/
// export const reqNavigationBar = (jobName) => ajax(BASE_URL+'/open/recruitmentInfo/findResidentialProjectByType?jobType=&jobName='+jobName+'&page=1&limit=100',{jobName},'POST')
export const reqNavigationBar = ({jobName,page,limit}) => ajax(BASE_URL+'/open/recruitmentInfo/findResidentialProjectByType?jobType=&jobName='+jobName+'&page='+page+'&limit='+limit,{jobName,page,limit},'POST')

/*企业运营项目*/
export const reqOperations = (type,page,limit) => ajax(BASE_URL+'/open/residentialProject/findResidentialProjectByType?type=operating&page=1&limit=100',{type,page,limit},'POST')
export const reqOperationspage = (page,limit) => ajax(BASE_URL+'/open/residentialProject/findResidentialProjectByType?type=operating&page='+page+'&limit='+limit,{page,limit},'POST')
/*企业在建项目*/
export const reqUnderconstruction = (type,page,limit) => ajax(BASE_URL+'/open/residentialProject/findResidentialProjectByType?type=underconstruction&page=1&limit=100',{type,page,limit},'POST')
export const reqUnderconstructionpage = (page,limit) => ajax(BASE_URL+'/open/residentialProject/findResidentialProjectByType?type=underconstruction&page='+page+'&limit='+limit,{page,limit},'POST')

/*关于我们*/
export const reqAboutUs = (page,limit) => ajax(BASE_URL+'/open/enterprise/findEnterprisesByPage?page=1&limit=1',{page,limit},'POST')
/*查询企业介绍和理念*/
// export const reqPhilosophy = (type) => ajax(BASE_URL+'/open/enterpriseInfo/findEnterpriseInfoByType',{type,page:1,limit:10},'POST')
export const reqPhilosophy = (type) => ajax(BASE_URL+'/open/enterpriseInfo/getEnterpriseInfoByType',{type})
/*单人活动及招聘报名*/
export const reqNewRecruitment = (name,telephone,type,typeId)=> ajax(BASE_URL+'/open/signInfo/saveOrUpdateSignInfo',{name,telephone,type,typeId},'POST')
/*批量活动及招聘报名*/
// export const reqBatchActivity = ({name,telephone,type,typeId}) => ajax(BASE_URL+'/open/signInfo/saveOrUpdateSignInfoList',{name,telephone,type,typeId},'POST')
/*字典列表*/
export const reqDictionaryList = (page,limit) => ajax(BASE_URL+'/open/newsDict/findAllNewsDicts',{page,limit},'POST')

/*根据ID查询新闻及活动文章内容*/
export const reqArticlesById = (id) => ajax(BASE_URL+'/open/newscenter/findNewsCenterArticlesById?id='+id,{},'POST')
/*根据id查询运营或在建项目内容*/
export const reqProjectById = (id) => ajax(BASE_URL+'/open/residentialProject/findResidentialProjectById?id='+id)

/*根据id查询商圈介绍信息(品牌管理)*/
export const reqCircleById = (id) => ajax(BASE_URL+'/open/businessCircle/findBusinessCircleById?id='+id,{}) /**/
export const reqCircleByIdApp = (id) => ajax(CASE_URL+'/property-regulate/brand/findBrandBusinessByBrandId?id='+id,{},'POST') /**/
/*根据id查询商业活动信息*/
export const reqServiveById = (id) => ajax(BASE_URL+'/open/businessService/findBusinessServiveById?id='+id,{}) /**/

// export const reqAllmessageByIdApp = (id) => ajax(DASE_URL+'/property-regulate/shop/allmessage?'+id,{},'POST')  //商业活动app
export const reqAllmessageByIdApp = (id) => ajax(CASE_URL+'/property-regulate/shop/allmessage?id='+id,{},'POST')

/*根据id查询招商详情*/
// export const reqServiveByIdAPP = (id) => ajax(BASE_URL+'/property-regulate/investmentInformation/findAllInvestmentInformations?page=1&limit=10',{})
export const reqServiveByIdApp = (id) => ajax(CASE_URL+'/property-regulate/investmentInformation/findInvestmentInformationById?id='+id,{})
// export const reqServfiveByIdApp = () => ajax(BASE_URL+'/open/businessService/findBusinessServiveById?id=1',{})  //增值服务app
// export const reqServiveByIdApp = (id) => ajax(BASE_URL+'/open/businessService/findBusinessServiveById?id='+id,{})  //招商信息app
/*根据id查询增值服务信息(商家管理)*/
export const reqManagerByIdApp = (id) => ajax(CASE_URL+'/property-regulate/businessManager/findBusinessManagerById?id='+id,{})

export const reqManagerById = (page,limit,brandId,projectTypeId) => ajax(CASE_URL+'/property-regulate/businessManager/findAllBusinessManagers?page=1&limit=100&brandId=&projectTypeId=',{page,limit,brandId,projectTypeId},'POST')

/*活动报名app*/
export const reqActivitiesApp = (id,userName,userPhone) => ajax(CASE_URL+'/property-regulate/participate/activities',{id,userName,userPhone},'POST')
// export const reqActivitiesApp = (id,userName,userPhone) => ajax(DASE_URL+'/property-regulate/participate/activities',{id:1,userName:'sss',userPhone:'18818818888'},'POST')

/*体验报名*/
export const reqActivitiespageApp = (id) => ajax(CASE_URL+'/property-regulate/shop/findActivityById?id='+id,{},'POST')
// export const reqActivitiespageApp = (id) => ajax(DASE_URL+'/property-regulate/shop/findActivityById?id='+id,{},'POST')
// export const reqBusinessServive = (id) => ajax(BASE_URL+'/open/businessService/findBusinessServiveById?id='+id)
/*根据id查询招商信息详情*/
// export const reqServiveById = (id) => ajax(BASE_URL+'/open/businessService/findBusinessServiveById?id='+id)