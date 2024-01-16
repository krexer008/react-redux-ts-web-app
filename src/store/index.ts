import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk }                                              from "redux-thunk";
import { userReducer }                                        from "./redux/userReducer";


export const store = createStore(userReducer, applyMiddleware(thunk))
