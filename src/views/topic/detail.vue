<template lang="pug">
.topic-detail-page
    h2.is-2.title.has-text-centered {{detail.title}}
    p.is-6.subtitle.has-text-centered
        router-link(:to='{name: "userPage", params: {uid: detail.uid}}') {{detail.username}}
        | ,
        span {{detail.created_at}}

    .content(v-html='detail.content')

    .divider
    .container
        h4.title.is-4 共 {{replys.length}} 条评论
        section.replys-container
            article.media(v-for='reply in replys', :key='reply.id')
                .media-left
                    figure.image.is-64x64
                        img(:src='reply.avatar')
                .media-content
                    
                    p
                        router-link.has-text-weight-bold(:to='{name: "userPage", params: {uid: reply.uid}}') {{reply.username}}
                        small.tag.is-warning.is-dateline {{reply.created_at}}
                    .content(v-html='reply.content')

    .divider
    .content
        form.reply-box(v-if='isLogin')
            a(href='https://guides.github.com/features/mastering-markdown/') 
                small Styling with Markdown is supported
            b-field(label='添加回复', :error='form.error', :type='form.type')
                b-input(v-model='form.content', maxlength="200", type="textarea")
                
            b-field
                a.button.is-primary(@click='submit') 提交
        .has-text-centered(v-else, style='margin-top:10px;')
            router-link.is-text.is-primary(:to='{name: "github"}') 登录发表评论

</template>

<script>
import {getDetail} from '@/api/topic'
import {getReplys, postNew} from '@/api/reply'
import {INPUT_TYPES} from '@/plugins/consts'
export default {
    data: () => ({
        form: {
            content: ''
        },
        detail: {},
        replys: [],
        id: ''
    }),
    computed: {
        isLogin() {
            return !!this.$store.getters.username
        }
    },
    methods: {
        async getDetail() {
            const detail = await getDetail(this.id)
            console.log(detail)
            this.$set(this.$data, 'detail', detail)
        },
        async getReplys() {
            const replys = await getReplys(this.id)
            console.log(replys)
            this.$set(this.$data, 'replys', replys)
        },
        async init() {
            this.$store.dispatch('app/setLoading', true)
            
            await this.getDetail()
            await this.getReplys()

            this.$store.dispatch('app/setLoading', false)
        },
        check() {
            if (!this.form.content) {
                this.form.error = '请输入回复内容'
                this.form.type = INPUT_TYPES.ERROR
                return false
            } else if (this.form.content.length < 5 || this.form.content.length > 200) {
                this.form.error = '回复内容长度需在 5-200 个字符以内'
                this.form.type = INPUT_TYPES.ERROR
                return false
            }
            this.form.error = ''
            this.form.type = INPUT_TYPES.NORMAL
            return true
        },
        async submit() {
            const res = this.check()
            if (res) {
                this.$store.dispatch('app/setLoading', true)
                const postRes = await postNew(this.detail, this.form.content)
                if (postRes) {
                    this.form.content = ''
                    this.$toast.open({
                        duration: 1500,
                        message: '回复成功',
                        position: 'is-bottom',
                        type: 'is-success'
                    })
                    await this.getReplys()
                    this.$store.dispatch('app/setLoading', false)
                } else {
                    this.$toast.open({
                        duration: 1500,
                        message: '回复失败，请重试',
                        position: 'is-bottom',
                        type: 'is-danger'
                    })
                    this.$store.dispatch('app/setLoading', false)
                }
            }
        }
    },
    mounted() {
        this.id = this.$route.params.id
        this.init()
    }
}
</script>

<style lang="scss" scoped>
.media{
    margin-bottom: 10px;
    .is-dateline{
        margin-left: 5px;
    }
}
</style>
