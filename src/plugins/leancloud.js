import * as AV from 'leancloud-storage'

const APP_ID = 'sw7KDFbcOU4aThLDo6Mx0EJf-gzGzoHsz'
const APP_KEY = 'GSLNQWMYPMo19gHVlWRoNs4L'

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
})

export default AV
