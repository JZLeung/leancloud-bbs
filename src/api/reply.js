// import * as User from '@/service/user'
// import * as Topic from '@/service/topic'
import * as Reply from '@/service/reply'
import * as User from '@/service/user'
import promise from './errorHandler'

import dayjs from 'dayjs'
import md from '@/plugins/markdown'

export const getReplys = async topicId => {
    const replys = await Reply.getListByTopicId(topicId).catch(err => {
        console.error(err)
        return []
    })
    if (replys.length === 0) return []
    const _users = await User.getUsersByUids(replys.map(reply => reply.get('uid')))
    const users = {}
    _users.forEach(user => {
        users[user.id] = user
    })
    return replys.map(reply => {
        const user = users[reply.get('uid')] || {
            get() {}
        }
        return {
            uid: reply.get('uid'),
            content: md.render(reply.get('content')),
            username: user.get('username'),
            created_at: dayjs(reply.createdAt).format('YYYY-MM-DD HH:mm'),
            avatar: user.get('avatar')
        }
    })
}

export const postNew = async (topic, content) => {
    return promise(Reply.postNew(topic, content))
}

export const getUserReplys = async uid => {
    const replys = await Reply.getListByUserId(uid)
    if (replys.length === 0) return []
    // const _topics = await Topic.getListByTopicIds(replys.map(reply => reply.get('tid')))
    // const topics = {}
    // _topics.list.forEach(topic => {
    //     topics[topic.id] = topic
    // })
    return replys.map(reply => {
        // const topic = topics[reply.get('tid')] || {
        //     get() {}
        // }
        return {
            tid: reply.get('tid'),
            uid: reply.get('uid'),
            content: md.render(reply.get('content')),
            title: reply.get('title'),
            created_at: dayjs(reply.createdAt).format('YYYY-MM-DD HH:mm')
        }
    })
}
