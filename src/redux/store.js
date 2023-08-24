// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import {filtersReducer} from "../components/Filters/FiltersSlide"
import {todoListReducer} from "../components/TodoList/ToDoListSlide"


// const composedEnhancers = composeWithDevTools()
// const store = createStore(rootReducer, composedEnhancers);

const store = configureStore({
    reducer: {
        filters: filtersReducer.reducer,
        toDo: todoListReducer.reducer,
    }
})
export default store;