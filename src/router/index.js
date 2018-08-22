import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import store from '@/store'

import {isLogin} from '@/api/user'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/topic/new',
            name: 'topicNew',
            meta: {
                userAuth: 1
            },
            component: () => import(/* webpackChunkName: "topicNew" */ '@/views/topic/new.vue')
        },
        {
            path: '/topic/edit/:tid',
            name: 'topicEdit',
            meta: {
                userAuth: 1
            },
            component: () => import(/* webpackChunkName: "topicEdit" */ '@/views/topic/new.vue')
        },
        {
            path: '/topic/:id',
            name: 'topicDetail',
            component: () => import(/* webpackChunkName: "topicDetail" */ '@/views/topic/detail.vue')
        },
        {
            path: '/user/:uid',
            name: 'userPage',
            component: () => import(/* webpackChunkName: "userPage" */ '@/views/user/_uid.vue')
        },
        {
            path: '/passport/github',
            name: 'github',
            component: () => import(/* webpackChunkName: "github" */ '@/views/passport/github.vue')
        }
    ]
})

router.beforeEach(async (to, from, next) => {
    store.dispatch('app/setNavBar', false)
    const loginUser = isLogin()
    if (loginUser && loginUser.getUsername() !== store.getters.username) {
        store.dispatch('user/setUsername', loginUser.getUsername())
    }
    if (to.name === 'github' && !to.query.access_token) {
        // console.log(from)
        // const route = router.resolve(from)
        // console.log(route)
        const redirect = `${window.location.origin}${window.location.pathname}#${from.path}`
        console.log(`redirect is : ${redirect}`)
        window.$cookie.set('redirect', redirect)
    }
    if (to.userAuth) {
        if (loginUser) {
            if (loginUser.getUsername() !== store.getters.username) {
                store.dispatch('user/setUsername', loginUser.getUsername())
            }
            next()
        }
        else next({name: 'github'})
    } else {
        next()
    }
})

export default router
