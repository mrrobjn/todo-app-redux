export const addTodo = (data) => {
    return {
        type: "create",
        payload: data
    }
}
export const searchTodo = (data) => {
    return {
        type: "searchFilter",
        payload: data
    }
}
export const checkTodo = (id)=>{
    return{
        type: "checkTodo",
        payload: id
    }
}
export const statusTodo = (data)=>{
    return{
        type: "statusFilter",
        payload: data
    }
}
