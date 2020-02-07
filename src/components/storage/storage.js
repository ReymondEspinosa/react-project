class Auth {
    login(cb, request){
        localStorage.setItem('_OAUTH_', request)
        cb()
    }

    logout(cb){
        localStorage.clear();
        cb()
    }

    isAuthenticated(){
        return localStorage.getItem('_OAUTH_');
    }
}

export default new Auth();