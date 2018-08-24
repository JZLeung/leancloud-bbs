# LeanCloud BBS

基于 [LeanCloud](https://leancloud.cn/) 接口实现的一个社区，使用 Github 账号进行登录，0 后台配置。仅需一个 LeanCloud 账号即可。

### 技术栈
前端页面：

主要的框架：
- [vue](https://github.com/vuejs/vue)

主要使用的库：
- [vuex](https://github.com/vuejs/vuex)
- [buefy](https://github.com/buefy/buefy) UI 库

工具库：
- [axios](https://github.com/axios/axios) 热门请求库
- [js-cookie](https://github.com/js-cookie/js-cookie/) cookie 处理
- [markdown-it](https://github.com/markdown-it/markdown-it) 及其插件库 

后台接口：
- [LeanCloud](https://leancloud.cn/docs/leanstorage_guide-js.html)

### 目录结构



### 本地运行
> 本项目基于 [vue-cli@3.0](https://cli.vuejs.org/) 生成的，所以推荐使用 vue-cli 的 3.0 版本运行。

```bash
# install vue-cli 3.0
$ npm install -g @vue/cli
# or `yarn add -g @vue/cli`

# clone project to your workspace
$ git clone git@github.com:JZLeung/leancloud-bbs.git

# cd into the locale project
$ cd leancloud-bbs

# install dependencies
$ npm install
# or `yarn`
```

### 配置 LeanCloud
1. [注册/登录](https://leancloud.cn/dashboard/login.html#/signin) LeanCloud，并进入控制台，创建新应用。
2. 等待两分钟，应用初始化。
3. 编辑 Class
    1. `_User` 表新增两个字段 `username` 和 `avatar`。分别记录用户名和头像。
    2. 新建 `topic` 表。添加字段:
        - uid 为发起人的 id。
        - username 为发起人的 用户名（存起来的目的为了减少前端请求查询的次数）
        - title 话题的标题
        - content 话题内容
    3. 新建 `reply` 表。添加字段：
        - tid 话题 id
        - title 话题标题（存起来的目的为了减少前端请求查询的次数）
        - uid 用户 id
        - username 用户名（存起来的目的为了减少前端请求查询的次数）
        - content 回复内容
4. 进入 **设置 - 应用 Key**，复制应用的 AppID 和 AppKey 至 `src/plugins/leancloud.js` 覆盖已有的应用 ID 和 Key。



#### Compiles and hot-reloads for development
```bash
$ npm run serve
# or `yarn serve`
```

#### Compiles and minifies for production
```bash
$ npm run build
# or `yarn build`
```

##  License
MIT
