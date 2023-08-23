import { createSelector } from "reselect"
export const searchSelector = (state => state.filters.search)
export const statusSelector = (state => state.filters.status)
export const todoListSelector = (state => state.toDo)
export const filteredTodoList = createSelector(todoListSelector, searchSelector, statusSelector, (toDo, search, status) => {
    return toDo.filter(todo => {
        if (status === "All") {
            return todo.name.includes(search)
        }
        else {
            return todo.name.includes(search)
                && (status !== "All" && status === "Completed" ?
                    todo.completed :
                    !todo.completed)
        }
    })
})
