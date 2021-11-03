import CounterReducer from "./CounterApp/reducer";
import TodoReducer from "./ToDoListRedux/reducer";

const rootReducer = {
  count: CounterReducer,
  todos: TodoReducer
}

export default rootReducer