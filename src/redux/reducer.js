const initState = {
    filters: {
        search: '',
        status: 'all',
        priority: [],
    },
    toDo: [
        { id: 1, name: 'do homework', completed: false, priority: 'High' },
        { id: 2, name: 'sleep', completed: true, priority: 'Medium' }
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "create":
            return {
                ...state,
                toDo: [
                    ...state.toDo,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        completed: action.payload.completed,
                        priority: action.payload.priority
                    }
                ]
            }
        case "check":
            return{
                ...state,
            }
        case "search":
            return{
                ...state,
                filters:{
                    ...state.filters,
                    search: action.payload
                }
            }
        default:
            return state
    }
}
export default rootReducer