import { applyMiddleware, createStore } from "redux";
import CounterReducer from "./CounterApp/reducer";
import balanceReducer from "./TransferApp/reducer";
import rootReducer from "./rootReducer";
import TodoReducer from "./ToDoListRedux/reducer";
import thunkMiddleware  from "redux-thunk";


// const store = createStore(CounterReducer)
// const store = createStore(balanceReducer)

const composedEnhancer = applyMiddleware(thunkMiddleware)

const store = createStore(TodoReducer, composedEnhancer)

export default store