import db from '@/plugins/leancloud'

// export const checkUsernameValid = username => {
// }

export const isLogin = () => db.User.current()

export const login = ({username, password}) => {
    return db.User.logIn(username, password)
}

export const logOut = () => db.User.logOut()

export const github = async userInfos => {
    await db.User.loginWithAuthData({
        uid: userInfos.node_id,
        access_token: userInfos.node_id,
        username: userInfos.login
    }, 'github')
    const currentUser = await db.User.current()
    if (currentUser) {
        if (currentUser.getUsername() !== userInfos.login) {
            currentUser.set('username', userInfos.login)
            currentUser.set('avatar', userInfos.avatar_url)
            await currentUser.save()
            return true
        } else {
            return true
        }
    } else {
        return false
    }
    // if (currentUser) {
    //     if (currentUser.username !== res.login) {
    //         currentUser.set('username', res.login)
    //         await currentUser.save()
    //         this.$router.replace('/')
    //     } else {
    //         this.$router.replace('/')
    //     }
    // } else {
    //     this.$router.replace({name: 'github'})
    // }
}

export const getUsersByUids = (uids = []) => {
    const query = new db.Query('_User')
    return query.containsAll('objectId', uids).find()
}

export const getOne = id => {
    const query = new db.Query('_User')
    return query.get(id)
}
