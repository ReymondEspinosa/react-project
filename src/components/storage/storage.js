class Auth {
    login(cb){
        localStorage.setItem('_OAUTH_', true)
        cb()
    }

    logout(cb){
        localStorage.setItem('_OAUTH_', false)
        cb()
    }

    isAuthenticated(){
        return localStorage.getItem('_OAUTH_');
    }
}

export default new Auth();