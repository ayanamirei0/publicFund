import $http from './ajax'
var root = process.env.API_HOST

/**
 * 首页数据
 */
// export const homeData = () => $http('/home/data');

/**
 * 员工绑定接口
 * opendId  String  微信openId
 * password   String  登录密码
 * vlCode     String  验证码
 */
export const employeeBinding = (opendId, mobile, vlCode) => $http(root + '/api/bund', {
    accountNo,
    pssword,
    vlCode
});