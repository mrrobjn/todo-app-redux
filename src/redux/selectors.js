import { createSelector } from "reselect"
export const searchSelector = (state => state.filters.search)
export const todoListSelector = (state => state.toDo)
export const filteredTodoList = createSelector(todoListSelector, searchSelector, (toDo,search) => {
    return toDo.filter(todo=>{
        return todo.name.includes(search)
    })
})
