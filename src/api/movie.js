
import { instance } from "./authApi"



export const movieApi = {
    async getMovieRandom(type) {
        const {data} = await instance.get(`movies/random?type=${type}`)
        return data
    },
    async getMovie(item){
        const {data} = await instance.get("/movies/find/" + item)
        return data
    }
}