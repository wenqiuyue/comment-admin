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