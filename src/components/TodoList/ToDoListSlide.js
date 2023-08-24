// const initState = [
//     { id: 1, name: 'do homework', completed: false, priority: 'High' },
//     { id: 2, name: 'sleep', completed: true, priority: 'Medium' }
// ]

import { createSlice } from "@reduxjs/toolkit";

// const todoListReducer = (state = initState, action) => {
//     switch (action.type) {
//         case "create":
//             return [...state, action.payload]
//         case "checkTodo":
//             return state.map(todo => todo.id === action.payload 
//                 ? {...todo, completed: !todo.completed } 
//                 : todo)
//         default:
//             return state
//     }
// }
// export default todoListReducer
export const todoListReducer = createSlice({
    name: "toDo",
    initialState: [
        { id: 1, name: 'do homework', completed: false, priority: 'High' },
        { id: 2, name: 'sleep', completed: true, priority: 'Medium' }
    ],
    reducers: {
        createToDo: (state, action) => {
            state.push(action.payload)
        },
        checkToDo: (state, action) => {
            const currentToDo = state.find(todo => todo.id === action.payload)
            currentToDo.completed = !currentToDo.completed;
        }
    }
})