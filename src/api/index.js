import { fetchGet,fetchPost,fetchDelete } from '../utils/request.js'

/**
 * 注册获取国家
 */
export function businessGetCountry () {
  return fetchGet('/api/Business/GetCountry')
};
/**
 * 验证该网址和公司是否存在我们的爬虫数据中
 */
export function businessVerificationCompany (data) {
  return fetchPost('/api/Business/VerificationCompany',data)
};
/**
 * 保存商家注册信息
 */
export function businessSaveBusiness (data) {
  return fetchPost('/api/Business/SaveBusiness',data)
};
/**
 * 获取两种验证方式的加密串和文件
 */
export function businessGenerateCode (data) {
  return fetchGet('/api/Business/GenerateCode',data)
};
/**
 * 商家注册验证
 */
export function businessVerificationCode (data) {
  return fetchPost('/api/Business/VerificationCode',data)
};
/**
 * 文件下载
 */
export function businessDownLoadFile (data) {
  return fetchGet('api/Business/DownLoadFile',data)
};
/**
 * 登录
 */
export function login (data) {
  return fetchPost('/site/Login',data)
};
/**
 * 获取首页评论信息
 */
export function siteComment (data) {
  return fetchGet('/site/Comment',data)
};
/**
 * 获取柱状图数据
 */
export function siteAnalysticBrokenLine (data) {
  return fetchGet('/site/AnalysticBrokenLine',data)
};
/**
 * 获取饼状图数据
 */
export function siteAnalysticPieChart (data) {
  return fetchGet('/site/AnalysticPieChart',data)
};
/**
 * 评论页数据
 */
export function siteReviews (data) {
  return fetchGet('/site/Reviews',data)
};
/**
 * 商家回复接口
 */
export function siteReply (data) {
  return fetchPost('/site/Reply',data)
};
/**
 * 商家回复删除接口
 */
export function siteDelReply (data) {
  return fetchDelete('/site/Reply',data)
};