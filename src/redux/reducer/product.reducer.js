import * as ActionType from "../ActionTypes"

const initialState = {
    isLoading: false,
    product: [],
    errors: ''
}

export const productReducer = (state = initialState, action) => {
    console.log(action.type, action.payload, state);
    // console.log(state.category);
    switch (action.type) {
        
        case ActionType.REMOVE_PRODUCT:
            return {
                ...state,
                isLoading: false,
                product: state.product.filter((d, i) => d.id !== action.payload),
                errors: ''
            };
        case ActionType.UPDATE_PRODUCT:
            return {
                ...state,
                isLoading: false,
                product: state.product.map((d) => {
                    console.log(d);
                    if (d.id === action.payload.id) {
                        return action.payload
                    } else {
                        return d;
                    }
                }),
                errors: ''
            };
        case ActionType.LOADING_PRODUCT:
            return {
                ...state,
                isLoading: true,
                errors: ''
            }
        case ActionType.GET_PRODUCT:
            return {
                ...state,
                isLoading: false,
                product: action.payload,
                errors: ''
            }
        case ActionType.ADD_PRODUCT:
            return {
                ...state,
                isLoading: false,
                product: state.product.concat(action.payload),
                errors: ''
            }

        case ActionType.PRODUCT_ERROES:
            return {
                ...state,
                isLoading: false,
                product: [],
                errors: action.payload
            }
        default:
            return state
    }
}