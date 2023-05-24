import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducers/mainReducer";


const store = createStore(Reducer, applyMiddleware(thunk));

export default store;