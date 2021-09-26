import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga"
import {composeWithDevTools} from "redux-devtools-extension";
import {allWatchers} from "./sagas/allSagas";
import pokemonReducer from "./pokemonReducer";
export const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    pokemonPage:pokemonReducer
})


export const store  = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(allWatchers)

