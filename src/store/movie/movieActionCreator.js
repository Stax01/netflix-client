import { movieApi } from "../../api/movie";
import { GET_MOVIE_RANDOM } from "./movieReducer";


const getMovieRandom = (data) => ({ type: GET_MOVIE_RANDOM, payload: data })


export const fetchMovieRandomRequest = (type) => async (dispatch) => {
    try {
        const data = await movieApi.getMovieRandom(type)
        dispatch(getMovieRandom(data))
    } catch (error) {
        console.log('Ошибка при получение рандомного видео')
    }
}