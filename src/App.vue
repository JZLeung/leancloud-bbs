<template lang="pug">
#container
    common-header
    .main-body.container.is-fullwidth
        router-view
        b-loading(:active.sync='loading')
    common-footer
</template>


<script>
import commonHeader from '@/components/common/header'
import commonFooter from '@/components/common/footer'

import {mapGetters} from 'vuex'
export default {
    components: {
        commonFooter,
        commonHeader
    },
    computed: {
        ...mapGetters(['loading'])
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
