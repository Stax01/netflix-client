import { AuthApi } from "../../api/authApi";
import { LOADING_STATUS, LOGOUT, SET_USER_DATA } from "./userReducer";

export const setLoading = (payload) => ({ type: LOADING_STATUS, payload })
export const logout = () => ({ type: LOGOUT })
export const setUserData = (data) => ({ type: SET_USER_DATA, payload: data })

export const fethcSignIn = (postData) => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        const  data  = await AuthApi.signIn(postData)
        window.localStorage.setItem('token', data.accessToken)
        dispatch(setUserData(data))


    } catch (error) {
        console.log('Ошибка при авторизации')
    }

}

export const fetchRegister = (postData) => async (dispatch) => {
    try {
        const  data  = await AuthApi.register(postData)
        window.localStorage.setItem('token', data.accessToken)
    } catch (error) {
        console.log('Ошибка при регистрации')
    }
}