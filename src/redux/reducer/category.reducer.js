import * as ActionType from "../ActionTypes"

const initialState = {
    isLoading: false,
    category: [],
    errors: ''
}

export const categoryReducer = (state = initialState, action) => {
    console.log(action.type, action.payload, state);
    // console.log(state.category);
    switch (action.type) {
        
        case ActionType.REMOVE_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: state.category.filter((d, i) => d.id !== action.payload),
                errors: ''
            };
        case ActionType.UPDATE_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: state.category.map((d) => {
                    console.log(d);
                    if (d.id === action.payload.id) {
                        return action.payload
                    } else {
                        return d;
                    }
                }),
                errors: ''
            };
        case ActionType.LOADING_CATEGORY:
            return {
                ...state,
                isLoading: true,
                errors: ''
            }
        case ActionType.GET_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: action.payload,
                errors: ''
            }
        case ActionType.ADD_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: state.category.concat(action.payload),
                errors: ''
            }

        case ActionType.CATEGORY_ERROES:
            return {
                ...state,
                isLoading: false,
                category: [],
                errors: action.payload
            }
        default:
            return state
    }
}