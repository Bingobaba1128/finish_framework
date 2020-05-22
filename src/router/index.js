import Vue from 'vue'
import VueRouter from 'vue-router'
//import Login from '../components/page/login.vue'
// const dashboard = resolve => require(['../components/page/dashboard.vue'], resolve);
import ssoLogin from '../components/page/ssologin.vue'
import sale from '../components/page/sale.vue'
import Layout from '../components/page/Layout.vue'
import ssoIndex from '../components/page/ssoIndex.vue'
import dashboard1 from '../components/page/dashboard.vue'

Vue.use(VueRouter);

export const constantRouterMap = [
    {
        path: '/',
        component: ssoIndex,
        meta: { title: 'Index' }
        
    },
    {
        path:'/login',
        component: ssoLogin,
    },
    {
        path:'/loginlocal',
        component: Layout,
        redirect: '/dashboard',
        meta: { title: 'index' },
        children: [
            {
                path:'/dashboard',
                component: dashboard1
            },
            {
                path: '/saleSystem',
                name: 'sale',
                component: sale 
            }

        ]
    },

]

export default new VueRouter ({
    routes: constantRouterMap,
    mode: 'history'
})

// export const asyncRouterMap = [
//     {
//         path: '/preOrder',
//         component: () => import('../components/individualComponent/preOrder.vue'),
//         name: '预测订单通知',
//         meta: {role: ['erp_v:yw']}
//     },
//     {
//         path: '/applyForm',
//         component: () => import('../components/individualComponent/applyForm.vue'),
//         name: '寄版移仓申请单',
//         meta: {role: ['erp_v:yw']}
//     },
//     {
//         path: '/saleStats',
//         component: () => import('../components/individualComponent/saleStats.vue'),
//         name: '销售统计',
//         meta: {role: ['erp_v:yw']}
//     },
//     {
//         path: '/productList',
//         component: () => import('../components/individualComponent/productList.vue'),
//         name: '产品目录',
//         meta: {role: ['erp_v:jczl']}
//     },
//     {
//         path: '/quotation',
//         component: () => import('../components/individualComponent/quotation.vue'),
//         name: '报价单',
//         meta: {role: ['erp_v:jczl']}
//     },
//     {
//         path: '*',
//         redirect: '/404',
//         hidden:true
//     }
// ]

