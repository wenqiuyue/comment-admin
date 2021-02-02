import { fetchGet,fetchPost } from '../utils/request.js'

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