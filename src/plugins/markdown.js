import markdown from 'markdown-it'
import markdownEmoji from 'markdown-it-emoji'

const md = markdown({
    linkify: true
})
    .use(markdownEmoji)

// window.$markdown = md
export default md

