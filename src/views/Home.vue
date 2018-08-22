<template lang='pug'>
.index-page
    .cards-container
        .card(v-for='topic in list', :key='topic.id')
            .card-content
                p.title
                    router-link(:to='{name: "topicDetail", params: {id: topic.id}}') {{topic.title}}
                p.subtitle.is-6
                    router-link(:to='{name: "userPage", params: {uid: topic.uid}}') {{topic.username}}
                    | |
                    | {{topic.created_at}}
                .summary-content {{topic.content}}
        .has-text-centered.has-text-grey(v-if='list.length === 0') 暂无数据
    b-pagination(
        v-if='pager.all > pager.per'
        :total='pager.all',
        :current.sync='page',
        :per-page='limit',
        @change='setPage'
    )
</template>

<script>
import {getIndexList} from '@/api/topic'
export default {
    name: 'home',
    data() {
        return {
            list: [],
            page: 1,
            limit: 10,
            pager: {
                all: 0,
                per: 10
            }
        }
    },
    methods: {
        async getList() {
            this.$store.dispatch('app/setLoading', true)
            console.log(this.page)
            const result = await getIndexList(this.page)
            this.$set(this.$data, 'list', result.list)
            this.$set(this.$data, 'pager', result.pager)
            // this.list = result.list
            // this.pager = result.pager
            this.$store.dispatch('app/setLoading', false)
        },
        setPage(val) {
            console.log(val)
            this.page = val
            this.getList(0)
        }
    },
    mounted() {
        this.getList()
        // console.log(list)
        // this.list = list
    }
}
</script>

<style lang="scss" scoped>
.index-page{
    min-height: 100vh;
}
.card {
    margin-bottom: 10px;
    .summary-content{
        overflow: hidden;
        text-overflow: ellipsis;
        // white-space: nowrap;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
}
</style>

