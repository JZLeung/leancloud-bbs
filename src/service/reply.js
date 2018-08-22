import db from '@/plugins/leancloud'


const Reply = db.Object.extend('reply')

export const getListByTopicId = async topicId => {
    const query = new db.Query('reply')
    const replys = await query.equalTo('tid', topicId).addDescending('createdAt').find()
    if (replys.length > 0) {
        return replys
    } else {
        return []
    }
}

export const getListByUserId = async uid => {
    const query = new db.Query('reply')
    const replys = await query.equalTo('uid', uid).addDescending('createdAt').find()
    if (replys.length > 0) {
        return replys
    } else {
        return []
    }
}

export const postNew = (topicId, content) => {
    const user = db.User.current()
    if (!user) return Promise.reject({code: 4112})
    const newReply = new Reply()
    newReply.set('content', content)
    newReply.set('tid', topicId)
    newReply.set('uid', user.id)
    return newReply.save()
}
