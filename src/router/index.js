import Vue from 'vue'
import Router from 'vue-router'
//import Login from '../components/page/login.vue'
// const dashboard = resolve => require(['../components/page/dashboard.vue'], resolve);
import ssoLogin from '../components/page/ssologin.vue'
import sale from '../components/subSystem/saleSystem.vue'
import Layout from '../components/page/Layout.vue'
import dashboard from '../components/page/dashboard.vue'
import localLogin from '../components/page/localLogin.vue'
import localLogout from '../components/page/ssoLogout.vue'
import hrSystem from '../components/subSystem/hrSystem.vue'
import clothSystem from '../components/subSystem/clothProduct.vue'
import caiGouSystem from '../components/subSystem/caiGouSystem.vue'


Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path:'/login',
            component: localLogin,
            meta: { title: 'login' }
        },
        {
            path:'/logout',
            component: localLogout
        },
        {
            path:'/home',
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
                    name: 'dashboard',
                    component: dashboard
                },
                {
                    path: '/saleSystem',
                    name: 'sale',
                    component: sale 
                },
                {
                    path: '/hrSystem',
                    name: 'hrSystem',
                    component: hrSystem 
                },
                {
                    path: '/clothSystem',
                    name: 'clothSystem',
                    component: clothSystem 
                },
                {
                    path: '/采购系统',
                    name: 'caiGouSystem',
                    component: caiGouSystem 
                }      
            ]
        }
    ],
    mode: 'history'
})

// 导航守卫
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        return next();
    } else {
        const code = window.sessionStorage.getItem('access_token')
        if (to.path === '/home') {
            next();
        } else {
            if(!code){
              next('/login');  
            }
            next()
            
        }
    }
  });

export default router;
// export default new VueRouter ({
//     routes: constantRouterMap,
//     mode: 'history'
// })



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

