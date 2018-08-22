<template lang="pug">
.user-page
    .user-info
        figure.image.is-128x128.is-avatar
            img.is-rounded(:src='user.info.avatar')
        h4.is-4.title.has-text-centered {{user.info.username}}
    .divider
    .user-topics
        h5.is-5.title Ta 的话题
        .topics
            .topic(v-for='topic in user.topics', :key='topic.id')
                h6.is-6.title
                    router-link(:to='{name: "topicDetail", params: {id: topic.id}}') {{topic.title}}
                p.is-6.subtitle
                    small {{topic.created_at}}

    .divider
    .user-replys
        h5.is-5.title Ta 的回复
        .topics
            .topic(v-for='topic in user.replys', :key='topic.id')
                h6.is-6.title
                    router-link(:to='{name: "topicDetail", params: {id: topic.tid}}') {{topic.title}}
                .is-6.subtitle
                    small {{topic.created_at}}
                    .reply-content(v-html='topic.content')
</template>

<script>
import {getUserById} from '@/api/user'
import {getUserTopicList} from '@/api/topic'
import {getUserReplys} from '@/api/reply'
export default {
    data: () => ({
        user: {
            info: {},
            topics: [],
            replys: []
        },
        uid: ''
    }),
    methods: {
        async init() {
            this.$store.dispatch('app/setLoading', true)
            const user = await getUserById(this.uid)
            console.log(user)
            this.$set(this.user, 'info', user)
            const topics = await getUserTopicList(this.uid, 5)
            console.log(topics)
            this.$set(this.user, 'topics', topics.list)

            const replys = await getUserReplys(this.uid)
            console.log(replys)
            this.$set(this.user, 'replys', replys)
            this.$store.dispatch('app/setLoading', false)
        }
    },
    mounted() {
        this.uid = this.$route.params.uid
        this.init()
    }
}
</script>

<style lang="scss" scoped>
.is-avatar{
    margin: auto;
}
.reply-content{
    background: #f5f5f5;
    font-size: 12px;
    padding: 10px 5px;
    border-left: 4px solid #ddd;
}
</style>

