const initState = {
    search: '',
    status: 'All',
    priority: [],
}

const filtersReducer = (state = initState, action) => {
    switch (action.type) {
        case "searchFilter":
            return { ...state, search: action.payload }
        case "statusFilter":
            return { ...state, status: action.payload }
        default:
            return state
    }
}
export default filtersReducer