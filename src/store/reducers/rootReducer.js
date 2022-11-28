import {combineReducers} from "redux"
import {modalReducer} from "./modalReducer.js"

export const rootReducer = combineReducers({
    modal: modalReducer
})