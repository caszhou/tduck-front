export default [
    {
        path: '/test',
        meta: {requireLogin: false},
        component: () => import(/* webpackChunkName: 'root' */ '@/views/test')
    },
    {
        path: '/redirect/:type',
        meta: {requireLogin: false},
        component: () => import(/* webpackChunkName: 'root' */ '@/views/redirect')
    },
    {
        path: '/account/validate',
        meta: {requireLogin: false},
        component: () => import(/* webpackChunkName: 'root' */ '@/views/account/validate')
    },
    {
        path: '/',
        meta: {requireLogin: false},
        component: () => import(/* webpackChunkName: 'root' */ '@/views/official/index.vue'),
        children: [
            {
                path: '/',
                meta: {requireLogin: false},
                component: () => import(/* webpackChunkName: 'root' */ '@/views/official/introduction.vue')
            },
            {
                path: '/login',
                meta: {requireLogin: false},
                component: () => import(/* webpackChunkName: 'root' */ '@/views/account/login.vue')
            },
            {
                path: 'forget/password',
                meta: {requireLogin: false},
                component: () => import(/* webpackChunkName: 'root' */ '@/views/account/ForgetPwd')
            },
            {
                path: '/enterprise',
                meta: {requireLogin: false},
                component: () => import(/* webpackChunkName: 'root' */ '@/views/official/enterprise')
            },
            {
                path: '/sources',
                meta: {requireLogin: false},
                component: () => import(/* webpackChunkName: 'root' */ '@/views/official/sources')
            },
            {
                path: '/proposal',
                meta: {requireLogin: false},
                component: () => import(/* webpackChunkName: 'root' */ '@/views/official/proposal')
            }
        ]
    },
    {
        path: '/home1',
        meta: {requireLogin: false},
        component: () => import(/* webpackChunkName: 'root' */ '@/views/home/newIndex')
    },
    {
        path: '/home',
        meta: {requireLogin: true},
        component: () => import(/* webpackChunkName: 'root' */ '@/views/home/index.vue'),
        children: [
            {
                path: '/',
                meta: {requireLogin: true},
                component: () => import(/* webpackChunkName: 'root' */ '@/views/home/HomeView')
            },
            {
                path: 'member',
                meta: {requireLogin: true},
                component: () => import(/* webpackChunkName: 'root' */ '@/views/account/member')
            }
        ]
    }, {
        path: '/project',
        meta: {requireLogin: true},
        component: () => import(/* webpackChunkName: 'root' */ '@/views/home/index.vue'),
        children: [
            {
                path: 'create',
                meta: {requireLogin: true},
                component: () => import(/* webpackChunkName: 'root' */ '@/views/project/create.vue')
            },
            {
                path: 'my',
                meta: {requireLogin: true},
                component: () => import(/* webpackChunkName: 'root' */ '@/views/project/MyProject.vue')
            },
            {
                path: 'recycle',
                meta: {requireLogin: true},
                component: () => import(/* webpackChunkName: 'root' */ '@/views/project/RecycleBin.vue')
            },
            {
                path: 'template/preview',
                meta: {requireLogin: true},
                component: () => import(/* webpackChunkName: 'root' */ '@/views/project/TemplatePreview.vue')
            },
            {
                path: 'form',
                meta: {requireLogin: true},
                component: () => import(/* webpackChunkName: 'root' */ '@/views/form/index.vue')
            }
        ]
    }, {
        path: '/project/preview',
        meta: {requireLogin: false},
        component: () => import(/* webpackChunkName: 'root' */ '@/views/form/PreView.vue')
    }, {
        path: '/project/view',
        meta: {requireLogin: false},
        component: () => import(/* webpackChunkName: 'root' */ '@/views/form/ProjectForm.vue')
    },
    {
        path: '/s/:key',
        meta: {requireLogin: false},
        component: () => import(/* webpackChunkName: 'root' */ '@/views/form/write.vue')
    },
    {
        path: '/project/write',
        meta: {requireLogin: false},
        component: () => import(/* webpackChunkName: 'root' */ '@/views/form/write.vue')
    }
]
