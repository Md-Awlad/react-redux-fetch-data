import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import todoReducer from "./service/reduces/todosReducer";

const store = createStore(todoReducer, applyMiddleware(thunk));

export default store;