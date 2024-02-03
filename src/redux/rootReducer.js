import { combineReducers } from "redux";
import todosReducer from "./todos/todosReducer";
import filterReducer from "./todos/filter/filterReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filterReducer,
});

export default rootReducer;
