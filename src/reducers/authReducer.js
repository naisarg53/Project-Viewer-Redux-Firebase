const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log("Login failed")
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log("Login success")
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log("Signout success")
            return state;
        case 'SIGNOUT_ERROR':
            console.log("Signout failed")
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_FAILED':
            console.log("Signup error")
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}
export default authReducer

