// const initState = {
//     search: '',
//     status: 'All',
//     priority: [],
// }

import { createSlice } from "@reduxjs/toolkit";

// const filtersReducer = (state = initState, action) => {
//     switch (action.type) {
//         case "searchFilter":
//             return { ...state, search: action.payload }
//         case "statusFilter":
//             return { ...state, status: action.payload }
//         case "prioritiesFilter":
//             return { ...state, priority: [...state.priority, action.payload] }
//         default:
//             return state
//     }
// }
// export default filtersReducer
export const filtersReducer = createSlice({
    name: "filters",
    initialState: {
        search: '',
        status: 'All',
        priority: [],
    },
    reducers: {
        searchFilter: (state, action) => {
            state.search = action.payload
        },
        statusFilter: (state, action) => {
            state.status = action.payload
        },
        prioritiesFilter: (state, action) => {
            state.priority = action.payload
        }
    }
})
