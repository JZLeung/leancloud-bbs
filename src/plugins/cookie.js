'use strict'

// import Vue from 'vue'
import Cookie from 'js-cookie'

const COOKIE_OPTS = {
    // expires: 7,
    path: '/',
    domain: window.location.hostname
}

const cookie = {
    set(key, value, expires = 7) {
        Cookie.set(key, value, {expires, ...COOKIE_OPTS})
    },
    get(key) {
        return Cookie.get(key, COOKIE_OPTS)
    },
    rm(key) {
        Cookie.remove(key, COOKIE_OPTS)
    }
}

window.$cookie = cookie
// Plugin.install = function(Vue) {
//     Vue.$cookie = cookie
//     console.log('loaded cookie plugin')
//     Object.defineProperties(Vue.prototype, {
//         $cookie: {
//             get() {
//                 return cookie
//             }
//         },
//     })
// }

// Vue.use(Plugin)
// console.log('load cookie plugin.', window.$cookie)
export default cookie
