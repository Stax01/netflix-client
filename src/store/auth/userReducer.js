export const SET_USER_DATA = 'SET_USER_DATA'
export const LOADING_STATUS = 'LOADING_STATUS'
export const LOGOUT = 'LOGOUT'

const initialStatie = {
    user: null,
    isAuth: false,
    isLoading: true,
    error: false
}

export const userReducer = (state = initialStatie, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                user: action.payload,
                isAuth: true,
                isLoading: false,
            }

        case LOADING_STATUS:
            return {
                ...state,
                isLoading: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                user: undefined,
                isLoading: false,
                isAuth: false
            }

        default:
            return state
    }

}