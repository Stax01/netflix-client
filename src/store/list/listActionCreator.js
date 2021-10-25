import { listApi } from "../../api/list"
import { SET_LIST } from "./listReducer"

const setList = (data) => ({ type: SET_LIST, payload: data })


export const fetchListRandomRequest = (type, genre) => async (dispatch) => {
    try {
        const data = await listApi.getList(type, genre)
        dispatch(setList(data))
    } catch (error) {
        console.log('Ошибка при получение списка')
    }


}