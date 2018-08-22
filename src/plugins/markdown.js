import markdown from 'markdown-it'
import markdownEmoji from 'markdown-it-emoji'
import markdownCheckbox from 'markdown-it-task-lists'

const md = markdown({
    linkify: true
})
    .use(markdownEmoji)
    .use(markdownCheckbox)

// window.$markdown = md
export default md

