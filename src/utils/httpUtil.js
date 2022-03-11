/* 
  请求url配置
*/
// 引入请求方法
import { httpReq } from './httpReq'

class HttpUtil {
  // 用户登录模块
  register = (params) => httpReq('post', '/userSystem/user', params)
  login = (params) => httpReq('post', '/userSystem/session/user', params)
  getVerifyCode = () => httpReq('get', '/userSystem/verifyCode', null, 'blob')
  getEmailCode = (email) =>
    httpReq('get', `/userSystem/user/eMailCode/?email=${email}`)
}

export default new HttpUtil()
