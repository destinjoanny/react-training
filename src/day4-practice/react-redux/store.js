import { createStore } from "redux";
import CounterReducer from "./CounterApp/reducer";
import balanceReducer from "./TransferApp/reducer";

// const store = createStore(CounterReducer)
const store = createStore(balanceReducer)

export default store