import filtersReducer from "../components/Filters/FiltersSlide"
import todoListReducer from "../components/TodoList/ToDoListSlide"
import { combineReducers } from 'redux'
// const rootReducer = (state={}, action) => {
//     return {
//         toDo: todoListReducer(state.toDo, action),
//         filters: filtersReducer(state.filters, action),
//     }
// }
const rootReducer = combineReducers({
    toDo: todoListReducer,
    filters: filtersReducer,
})

export default rootReducer