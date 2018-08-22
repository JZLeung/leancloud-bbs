import db from '@/plugins/leancloud'
// import * as User from './user'

const Topic = db.Object.extend('topic')

export const postNew = (topic) => {
    const user = db.User.current()
    if (!user) return Promise.reject({code: 4112})
    const newTopic = new Topic()
    newTopic.set('content', topic.content)
    newTopic.set('title', topic.title)
    newTopic.set('uid', user.id)
    return newTopic.save()
}

export const detail = async id => {
    const query = new db.Query('topic')
    const detail = await query.get(id)
    if (detail) {
        // const author = await User.getOne(detail.get('uid'))
        // detail.set('username', author.get('username'))
        return detail
    } else {
        return {}
    }
}

// export const list = async (createdAt = 0, limit = 20) => {
//     const now = createdAt || new Date()
//     const query = new db.Query('topic')
//     return query.lessThanOrEqualTo('createdAt', now).limit(limit)
// }

export const list = async (page = 1, limit = 20) => {
    const query = new db.Query('topic')
    const skip = (page - 1) * limit
    console.log(skip, limit)
    const list = await query
        .skip(skip)
        .limit(limit)
        .addDescending('createdAt')
        .find()
    const count = await query.count()
    return {
        list,
        count
    }
}

export const getListByUser = async (uid, limit = 5) => {
    const query = new db.Query('topic')
    query.equalTo('uid', uid)
    const list = await query
        .limit(limit)
        .addDescending('createdAt')
        .find()
    const count = await query.count()
    return {
        list,
        count
    }
}

export const getListByTopicIds = async (topicIds, limit = 5) => {
    const query = new db.Query('topic')
    query.containsAll('objectId', topicIds)
    const list = await query
        .limit(limit)
        .addDescending('createdAt')
        .find()
    const count = await query.count
    return {
        list,
        count
    }
}
