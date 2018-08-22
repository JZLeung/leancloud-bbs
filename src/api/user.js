import * as User from '@/service/user'
import promise from './errorHandler'

export const isLogin = () => User.isLogin()

export const login = loginForm => promise(User.login(loginForm))
export const logout = () => promise(User.logOut())

export const githubLogin = res => promise(User.github(res))
export const getUserById = async uid => {
    const user = await promise(User.getOne(uid))
    if (user) {
        return {
            username: user.get('username'),
            uid: user.id,
            avatar: user.get('avatar')
        }
    } else {
        return null
    }
}
