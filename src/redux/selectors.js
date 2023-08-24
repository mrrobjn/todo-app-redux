import { createSelector } from "@reduxjs/toolkit"
export const searchSelector = (state => {
    console.log(state)
    return state.filters.search
})
export const statusSelector = (state => {
    return state.filters.status
})
export const todoListSelector = (state => {
    return state.toDo
})
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
