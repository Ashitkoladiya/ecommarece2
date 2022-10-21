import * as ActionType from "../ActionTypes"

const initialState = {
    isLoading: false,
    cart: [],
    errors: ''
}

export const cartReducer = (state = initialState, action) => {
    console.log(action.type, action.payload);

    switch (action.type) {
        case ActionType.ADD_CART:
            const Cdata = state.cart.find((s) => s.id === action.payload.id)
            if (Cdata) {
                Cdata.qty++;
            } else {
                state.cart.push(action.payload)
            }
            return {
                ...state,
                isLoading: false,
                // cart: state.cart.concat(action.payload),
                errors: ''
            }
        case ActionType.DELETE_CART:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.filter((d, f) => d.id !== action.payload),
                error: ""
            }
        case ActionType.INCREMENTQNT:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.map((c) => {
                    console.log(c);
                    if (c.id === action.payload) {
                        return (
                            {
                                id: c.id,
                                qty: c.qty + 1
                            }
                        )
                    } else {
                        return c
                    }
                })
            }
        case ActionType.DECREMENTQNT:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.map((c) => {
                    console.log(c);
                    if (c.id === action.payload) {
                        return (
                            {
                                id: c.id,
                                qty: c.qty - 1
                            }
                        )
                    } else {
                        return c
                    }
                })
            }

        default:
            return state
    }
}

