<template lang="pug">
.common-header
    .navbar.is-dark(role='navigation', aria-label='main navigation')
        .container.is-fullwidth
            .navbar-brand
                router-link.navbar-item(to='/')
                    //- img(src='@/assets/logo.png', alt='', style='height: 25px;')
                    | BBS
                #navbarBurger.navbar-burger.burger(data-target='menu', @click='toggle')
                    span
                    span
                    span
            #menu.navbar-menu(:class='{"is-active": showNav}')
                .navbar-start
                    router-link.navbar-item(to='/') 首页
                .navbar-end
                    template(v-if='username')
                        router-link.navbar-item(:to='{name: "topicNew"}') 发表新帖
                        a.navbar-item.has-text-danger(@click='logout') 退出
                    router-link.navbar-item(v-else, :to='{name: "github"}') 登录/注册


</template>

<script>
import {logout} from '@/api/user'
export default {
    computed: {
        username() {
            return this.$store.getters.username
        },
        showNav() {
            return this.$store.getters.app.navbar
        }
    },
    methods: {
        async logout() {
            await logout()
            window.location.reload()
            // const {name, params} = this.$route
            // this.$router.replace({name, params})
        },
        toggle() {
            this.$store.dispatch('app/setNavBar', !this.showNav)
        }
    }
}
</script>
