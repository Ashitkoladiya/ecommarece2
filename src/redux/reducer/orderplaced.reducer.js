import * as ActionType from "../ActionType"


export const initalstate = {
    isLoading: false,
    order: [],
    error: ""
}
export const OrderReducer = (state = initalstate, action) => {

    console.log(action.payload, action.type);

    switch (action.type) {

        case ActionType.GET_ORDER:
            return {
                ...state,
                isLoading: false,
                order: action.payload,
                error: ""
            }
        case ActionType.POST_ORDER:
            return {
                ...state,
                isLoading: false,
                order: state.order.concat(action.payload),
                error: ""
            }
        default:
            return state

    }

}