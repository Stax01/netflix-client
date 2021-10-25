import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./auth/userReducer";
import { listReducer } from "./list/listReducer";
import movieReducer from "./movie/movieReducer";




const rootReducer = combineReducers({
    user: userReducer,
    movie: movieReducer,
    list: listReducer
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(thunk)))