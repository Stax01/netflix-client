export const GET_MOVIE_RANDOM = 'GET_MOVIE_RANDOM'

const initialState = {
    movie: {},
    isLoading: false
}


 const movieReducer = (state= initialState, action) => {
    switch( action.type) {
        case GET_MOVIE_RANDOM:
            return{
                ...state,
                movie: action.payload[0]
            }


        default:
            return state
    }
}

export default movieReducer