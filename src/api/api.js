export const getUserInfo = (tokenInfo,ajax) => {
    return (
        ajax.post("http://120.78.186.60:8087/user?access_token="+tokenInfo.access_token)  
    )  
}

export const getToken = (code,ajax) => {
    return (
        ajax.post("http://120.78.186.60:8087/oauth/token?grant_type=authorization_code&client_id=erp_v&client_secret=erpVietnam&redirect_uri=http://127.0.0.1:8080/home&code=" + code)
    )
}

export const autologin = (data,ajax) => {
    return (
        ajax.get("http://192.168.5.103:8080/ERP/login?" + data)
    )
}