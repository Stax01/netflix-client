
import { instance } from "./authApi"


export const listApi = {
    async getList(type, genre) {
        const { data } = await instance.get(`lists${type ? "?type=" + type : ""}
        ${genre ? "&genre=" + genre : ""
            }`)
        return data
    }
}