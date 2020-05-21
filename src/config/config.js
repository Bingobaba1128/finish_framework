// var config = {
//     userAuthorizationUri:"http://120.78.186.60:8087/oauth/authorize",
//     accessTokenUri : "/api/oauth/token",
//     userInfoUri:"",
//     logoutUri:"http://192.168.137.98:8080/logout",
//     localuri :"http://192.168.137.98:8080",
//     redirect_uri : "http://192.168.137.98:8080/login",
//     resUri:"http://localhost:8080",
//     clientId: "erp_v",
//     client_secret:"erpVietnam",
//     state:"",
//     response_type:"code",
//     grant_type : "authorization_code",
//     code:"",
//   }
var config={

    //请求授权地址
    userAuthorizationUri:"http://120.78.186.60:8087/oauth/authorize",
    //accessToken请求地址
    // accessTokenUri : "/github/login/oauth/access_token",
    // accessTokenUri : "/api/oauth/token",
    //用户信息请求地址
    userInfoUri:"http://120.78.186.60:8087/user",
    //登出请求地址
    logoutUri:"",
    //项目地址
    localuri :"http://127.0.0.1:8080/",
   //回调地址
    redirect_uri : "http://127.0.0.1:8080/login",
    //案例资源服务器地址
    resUri:"http://localhost:8080",
    //客户端相关标识，请从认证服务器申请
    clientId: "erp_v",
    client_secret:"erpVietnam",
    //可选参数，客户端的当前状态，可以指定任意值，用于校验，此次案例不做相关认证
    state:"",
    //一些固定的请求参数
    response_type:"code",
    grant_type : "authorization_code",
    code:"",
  }
  

export default config;