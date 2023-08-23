export const addTodo = (data) => {
    return {
        type: "create",
        payload: data
    }
}
export const searchTodo = (data) => {
    return {
        type: "search",
        payload: data
    }
}