<template lang="pug">
.new-topic-page
    section
        h3.is-3 发表新话题
        b-field(label='标题', :type='types.title', :message='errors.title')
            b-input(v-model='form.title')
        b-field(label='内容', :type='types.content', :message='errors.content')
            b-input(v-model='form.content', maxlength="2048", type="textarea")
        b-field
            a.control(href='https://guides.github.com/features/mastering-markdown/') 
                small Styling with Markdown is supported
        b-field
            a.button.is-primary(@click='submit') 提交
</template>

<script>
import {postNew} from '@/api/topic'
import {INPUT_TYPES} from '@/plugins/consts'
export default {
    data: () => ({
        form: {
            title: '',
            content: ''
        },
        types: {
            title: '',
            content: ''
        },
        errors: {
            title: '',
            content: ''
        }
    }),
    methods: {
        check() {
            const {title, content} = this.form
            const errors = {
                title: true,
                content: true
            }
            if (!title) {
                errors.title = '请输入标题'
            } else {
                if (title.length < 5 || title.length > 20) {
                    errors.title = '标题长度需要在 5-20 个字符内'
                }
            }

            if (!content) {
                errors.content = '请输入话题内容'
            } else {
                if (content.length < 20 || content.length > 2048) {
                    errors.content = '标题长度需要在 20-2048 个字符内'
                }
            }
            return errors
        },
        submit() {
            const errors = this.check()
            if (errors.title !== true || errors.content !== true) {
                this.types.title = errors.title === true ? INPUT_TYPES.SUCCESS : INPUT_TYPES.ERROR
                this.types.content = errors.content === true ? INPUT_TYPES.SUCCESS : INPUT_TYPES.ERROR

                this.errors.title = errors.title === true ? '' : errors.title
                this.errors.content = errors.content === true ? '' : errors.content
                return false
            }

            postNew(this.form).then(topic => {
                console.log(topic)
                const id = topic.id
                this.$router.replace({
                    name: 'topicDetail',
                    params: {
                        id
                    }
                })
            }).catch(err => {
                console.error('postNew error:', err)
            })
        }
    }
}
</script>

<style>

</style>
