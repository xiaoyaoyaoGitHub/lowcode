
import { createStore, combineReducers } from "redux"
import homeManagementReducer from "./reducer/homeManagement"

const reducer = combineReducers({
    homeManagement: homeManagementReducer
})

const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;