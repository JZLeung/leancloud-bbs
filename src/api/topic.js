// import * as User from '@/service/user'
import * as Topic from '@/service/topic'
import * as User from '@/service/user'
import promise from './errorHandler'

import dayjs from 'dayjs'
import md from '@/plugins/markdown'

export const postNew = async (topic, topicId = false) => {
    // const user = await User.isLogin()
    // // console.log(user)
    // if (!user) return Promise.reject(false)
    return promise(Topic.postNew(topic, topicId))
}

const dealDetail = (detail, mdrender = true) => {
    // const user = users[detail.get('uid')] || {
    //     get() {}
    // }
    return {
        id: detail.id,
        title: detail.get('title'),
        content: mdrender ? md.render(detail.get('content')) : detail.get('content'),
        username: detail.get('username'),
        uid: detail.get('uid'),
        created_at: dayjs(detail.createdAt).format('YYYY-MM-DD HH:mm')
    }
}

const dealList = async (list, mdrender = true) => {
    // const _users = await User.getUsersByUids(list.map(one => one.get('uid')))
    // const users = {}
    // _users.forEach(user => {
    //     users[user.id] = user
    // })
    // console.log(_users, users, list.map(one => one.get('uid')))
    return list.map(one => dealDetail(one, mdrender))
}

export const getDetail = async (id, mdrender = true) => {
    const detailObj = await promise(Topic.detail(id))
    if (detailObj) {
        const one = await dealList([detailObj], mdrender)
        const detail = one[0]
        const user = User.isLogin()
        detail.self = user.id === detail.uid
        return detail
    } else {
        return null
    }
    // const topic = await Topic.detail(id)
    // if (!topic) return Promise.reject('未找到')
    // else return promise(Topic.postNew(topic, user)) 
}

export const getIndexList = async (page, limit = 10) => {
    const result = await promise(Topic.list(page, limit))
    console.log(result)
    if (result && result.count > 0) {
        const lists = await dealList(result.list)
        return {
            list: lists.map(one => {
                one.content = one.content.replace(/<\/?.+?>/g, '')
                return one
            }),
            pager: {
                all: result.count,
                per: limit
            }
        }
    } else {
        return {
            list: [],
            pager: {
                all: 0,
                per: limit
            }
        }
    }
}

export const getUserTopicList = async (uid, limit = 0) => {
    console.log('getUserTopicList', uid, limit)
    const result = await promise(Topic.getListByUser(uid, limit))
    if (result && result.count > 0) {
        const list = await dealList(result.list)
        return {
            list,
            pager: {
                all: result.count,
                per: limit
            }
        }
    } else {
        return {
            list: [],
            pager: {
                all: 0,
                per: limit
            }
        }
    }
}
