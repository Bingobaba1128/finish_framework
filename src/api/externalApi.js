// 关于审批审批
import api from "@/utils/http";

// 基础设置 审批设置页面----------------------------
// 加载审批类型
export const getTypeApproval = (params) => {
    return api({
        url: "/ERP/searchApproveStyle",
        method: "get",
        params
    })
}
// 加载对应的类型的审批流程
export const getTypeApprovalProcess = (params) => {
    return api({
        url: "/ERP/selectApproveOrder",
        method: "get",
        params
    })
}
// 人物按名字查询
export const getPersonInfo = (data)=>{
    return api({
        url: "/ERP/selectEmplyee",
        method: "post",
        data
    })
}
// 新增流程步骤  
export const getProcessInfo = (data) => {
    return api({
        url: "/ERP/addApproveOrder",
        method: "post",
        data
    })
}
// 新增审批流程抄送人
export const getApprovalProcessCopy = (data) => {
    return api({
        url: "/ERP/editCopy",
        method: "post",
        data
    })
}
// 查看审批内容（按照条件）
export const getApproveContent = (data) => {
    return api({
        url: "/ERP/selApproveTotal",
        method: "post",
        data
    })
}
// 删除
export const postDeleteMsg = (data) => {
    return api({
        url: "/ERP/delApproveOrder",
        method: "post",
        data
    })
}
// 编辑查看
export const getEditApproveDetail = (params) => {
    return api({
        url: "/ERP/selectApproveOrder",
        method: "get",
        params
    })
}
// 编辑回传
export const postEditApproveDetail = (data) => {
    return api({
        url: "/ERP/editApproveOrder",
        method: "post",
        data
    })
}

// 审批管理 审批页面-------------------------------------
// 审批通过
export const getApprovePass = (data) => {
    return api({
        url: "/ERP/agreeApprove",
        method: "post",
        data
    })
}
// 审批驳回
export const getApproveReject = (data) => {
    return api({
        url: "/ERP/disagreeApprove",
        method: "post",
        data
    })
}