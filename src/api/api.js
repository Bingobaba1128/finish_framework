export const getUserInfo = (tokenInfo,ajax) => {
    return (
        ajax.post("http://120.78.186.60:8087/user?access_token="+tokenInfo.access_token)  
    )  
}

export const getToken = (code,ajax) => {
    return (
        ajax.post("http://120.78.186.60:8087/oauth/token?grant_type=authorization_code&client_id=erp_v&client_secret=erpVietnam&redirect_uri=http://127.0.0.1:8080/home&code=" + code)
        // ajax.post("http://120.78.186.60:8087/oauth/token?grant_type=authorization_code&client_id=erp_v&client_secret=erpVietnam&redirect_uri=http://120.78.186.60:8103/home&code=" + code)
    )
}

export const autologin = (data,ajax) => {
    return (
        ajax.get("http://192.168.5.103:8080/ERP/login?" + data)
    )
}

export const getSpInfo = (data,ajax) => {
    return (
        ajax.get("192.168.5.103:8080/ERP/selNotice?style=" + data)
    )
}

// export const userLogout = (ajax) => {
//     return (
//         ajax.get("http://120.78.186.60:8087/logout")
//     )
// }

// 基础设置 审批设置页面----------------------------
// 加载审批类型
export const getTypeApproval = (params,ajax) => {
    return (ajax.get("http://192.168.5.103:8080/ERP/searchApproveStyle=" + params))
    // return api({
    //     url: "/ERP/searchApproveStyle",
    //     method: "get",
    //     params
    // })
}
// 加载对应的类型的审批流程
export const getTypeApprovalProcess = (params,ajax) => {
    return (ajax.get("http://192.168.5.103:8080/ERP/selectApproveOrder=" + params))
    // return api({
    //     url: "/ERP/selectApproveOrder",
    //     method: "get",
    //     params
    // })
}
// 人物按名字查询
export const getPersonInfo = (data,ajax)=>{
    return (ajax.post("http://192.168.5.103:8080/ERP/selectEmplyee=" + data))
    // return api({
    //     url: "/ERP/selectEmplyee",
    //     method: "post",
    //     data
    // })
}
// 新增流程步骤  
export const getProcessInfo = (data,ajax) => {
    return (ajax.post("http://192.168.5.103:8080/ERP/addApproveOrder=" + data))
    // return api({
    //     url: "/ERP/addApproveOrder",
    //     method: "post",
    //     data
    // })
}
// 新增审批流程抄送人
export const getApprovalProcessCopy = (data,ajax) => {
    return (ajax.post("http://192.168.5.103:8080/ERP/editCopy=" + data))
    // return api({
    //     url: "/ERP/editCopy",
    //     method: "post",
    //     data
    // })
}
// 查看审批内容（按照条件）
export const getApproveContent = (data,ajax) => {
    return (ajax.post("http://192.168.5.103:8080/ERP/selApproveTotal=" + data))
    // return api({
    //     url: "/ERP/selApproveTotal",
    //     method: "post",
    //     data
    // })
}
// 删除
export const postDeleteMsg = (data,ajax) => {
    return (ajax.post("http://192.168.5.103:8080/ERP/delApproveOrder=" + data))
    // return api({
    //     url: "/ERP/delApproveOrder",
    //     method: "post",
    //     data
    // })
}
// 编辑查看
export const getEditApproveDetail = (params,ajax) => {
    return (ajax.get("http://192.168.5.103:8080/ERP/delApproveOrder=" + params))
    // return api({
    //     url: "/ERP/selectApproveOrder",
    //     method: "get",
    //     params
    // })
}
// 编辑回传
export const postEditApproveDetail = (data,ajax) => {
    return (ajax.post("http://192.168.5.103:8080/ERP/editApproveOrder=" + data))
    // return api({
    //     url: "/ERP/editApproveOrder",
    //     method: "post",
    //     data
    // })
}

// 审批管理 审批页面-------------------------------------
// 审批通过
export const getApprovePass = (data,ajax) => {
    return (ajax.post("http://192.168.5.103:8080/ERP/agreeApprove=" + data))
    // return api({
    //     url: "/ERP/agreeApprove",
    //     method: "post",
    //     data
    // })
}
// 审批驳回
export const getApproveReject = (data,ajax) => {
    return (ajax.post("http://192.168.5.103:8080/ERP/disagreeApprove=" + data))
    // return api({
    //     url: "/ERP/disagreeApprove",
    //     method: "post",
    //     data
    // })
}