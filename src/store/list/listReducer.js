export const SET_LIST = 'SET_LIST'

const initialState = {
    list: [],
    isLoading: false
}

export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST:
            return{
                ...state,
                list: action.payload
            }


        default:
            return state
    }
}