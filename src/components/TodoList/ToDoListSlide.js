const initState = [
    { id: 1, name: 'do homework', completed: false, priority: 'High' },
    { id: 2, name: 'sleep', completed: true, priority: 'Medium' }
]

const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case "create":
            return [...state, action.payload]
        default:
            return state
    }
}
export default todoListReducer