<template lang="pug">
section.login-page.main-body.container
    a.button.is-light.is-large.is-fullwidth(:href='href')
        b-icon(icon='github-circle')
        span 通过 Github 登录
</template>

<script>
import {githubLogin, isLogin} from '@/api/user'
export default {
    data: () => ({
        // href: `http://127.0.0.1:7001/github/auth?redirect=${encodeURIComponent(window.location.href)}`,
        href: `https://blog.leungjz.top/github/auth?redirect=${encodeURIComponent(window.location.href)}`,
        haha: ''
    }),
    async mounted() {
        const access_token = this.$route.query.access_token
        if (access_token && access_token !== 'undefined') {
            this.$store.dispatch('app/setLoading', true)
            const res = await this.$axios.get(`https://api.github.com/user?access_token=${access_token}`).catch(() => null)
            if (res) {
                await githubLogin(res)
                const loginRes = isLogin()
                if (loginRes) {
                    const redirect = window.$cookie.get('redirect')
                    this.$toast.open({
                        message: '你好，' + loginRes.get('username'),
                        type: 'is-success'
                    })
                    if (redirect) {
                        window.location.href = redirect
                    } else {
                        this.$router.replace('/')
                    }
                } else {
                    this.$router.replace({name: 'github'})
                }
                // console.log(loginRes)
            } else {
                this.$router.replace({name: 'github'})
            }
            this.$store.dispatch('app/setLoading', false)
        }
    }
}
</script>
