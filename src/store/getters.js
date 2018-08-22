export default {
    app: state => state.app,
    user: state => state.user,

    loading: state => state.app.loading,

    username: state => state.user.username
}
