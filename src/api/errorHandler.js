import {Toast} from 'buefy'
import errorMsgs from './errorMsgs'
// console.log(Toast)
export default promise => promise.catch(err => {
    Toast.open({
        duration: 2000,
        queue: false,
        message: errorMsgs[err.code] || '请求失败',
        position: 'is-top',
        type: 'is-danger'
    })
    return null
})
