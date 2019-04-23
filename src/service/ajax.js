import axios from 'axios'
import Qs from 'qs'
var root = process.env.API_HOST


import JSEncrypt from "jsencrypt";

let encryptor = new JSEncrypt(); // 新建JSEncrypt对象
let publicKey =
    " MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkqb9pLOzlbPEWChGGEsAugGHT7jFdFlQNk/VxSGsL73UvUIp6fSysL0SedDnOp3u14piGqVnv002bIZJeUozsuPP9qDbyNLkhPXcnUs/76OBfxF6y+eCVj7SiO+mQL0DK++mNM0Py+6nnYymp+HFNwlQGZIyIOeQId1mL8Qx0mjbfBiwDLU5Y3f1DDLQuf6vTyBjbvlFP4RmGbdT763xJLlRsBAaKqW7Kjl4DMiIrWk38F2gis3vmIDLk8j0Yngl+WWJDdS/P26xDVgBNnGCUQGpxO7ajzJwgK86NPC6vrAzWSFI+HFP25dPadQqbnXwox2kmz0a0AjooekoAyXLowIDAQAB"; // 从后台获取公钥，这里省略，直接赋值
encryptor.setPublicKey(publicKey); // 设置公钥

let headerParam = {
    packageName: "", //包名
    appName: "", //应用名
    os: "",
    appType: "", //应用类型
    version: "", //客户端版本号
    mobileType: "", //android/ios
    channel: "", //渠道标示
    platform: "", //android/ios 系统版本号
    model: "", //设备型号
    factory: "", //设备厂家
    screenSize: "", //屏幕尺寸
    denstiy: "",
    imei: "", //设备IMEI号
    mac: "", //设备mac地址
    clientId: localStorage.clientId || "", //用户Id
    token: localStorage.token || "", //用户认证信息
    //"token": "3748f704-6377-46d8-82a5-e01fee59b568",
    //"clientId": "10000139",
    sign: "", //签名
    pid: "", //协议id
    openId: "",
    position: ""
};


//添加请求拦截器
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    return config
}, function(error) {
    // 请求出错做什么
    return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
    //对响应数据做点什么
    // let responseStatus = response.data.status

    if (response.data.returnCode === 2001) {
        console.log('2001 - 登录失效 - 退出2001')

    }
    return response

}, function(err) {
    // 对响应错误做点什么
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.message = '请求错误(400)';
                break;
            case 401:
                err.message = '未授权，请重新登录(401)';
                break;
            case 403:
                err.message = '拒绝访问(403)';
                break;
            case 404:
                err.message = '请求出错(404)';
                break;
            case 408:
                err.message = '请求超时(408)';
                break;
            case 500:
                err.message = '服务器错误(500)';
                break;
            case 501:
                err.message = '服务未实现(501)';
                break;
            case 502:
                err.message = '网络错误(502)';
                break;
            case 503:
                err.message = '服务不可用(503)';
                break;
            case 504:
                err.message = '网络超时(504)';
                break;
            case 505:
                err.message = 'HTTP版本不受支持(505)';
                break;
            default:
                err.message = `连接出错(${err.response.status})!`;
        }
    } else {
        err.message = '连接服务器失败!'
    }
    return Promise.reject(err)
})

// axios请求封装
export default function http(url = '', data = {}, type = 'POST') {
    return new Promise((resolve, reject) => {

        console.log('http requestUrl: ' + url)
        console.log('http requestData: ' + JSON.stringify(data))

        let Promise
        let param = {};
        param.header = headerParam;
        param.test = data;
        param.bizParam = encryptor.encrypt(JSON.stringify(data));
        console.log(param.bizParam);

        if (type === 'GET') {
            Promise = axios({
                method: 'get',
                url: url,
                baseUrl: root,
                data: Qs.stringify(data),
                // 是否携带cookie信息
                withCredentials: true,
            })
        } else {
            Promise = axios({
                method: 'post',
                url: url,
                baseUrl: root,
                data: param,
                // 是否携带cookie信息
                withCredentials: false,
            })
        }
        Promise.then(response => {
                if (response) {
                    // console.log(response.data)
                    resolve(response.data)
                }
            })
            .catch(error => {
                reject(error)
            })
    })
}