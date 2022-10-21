import getStoredState from "redux-persist/es/getStoredState";
import * as ActionType from "../ActionTypes"


export const addCart = (d) => (dispatch) => {
    // console.log("asaasa", getStoredState().cart.cart);
    // dispatch({ type: ActionType.ADD_CART, payload: {id:d.id} })
    dispatch({ type: ActionType.ADD_CART, payload: { id: d.id, qty: 1 } })

}

export const increment = (id) => (dispatch) => {
    dispatch({ type: ActionType.INCREMENTQNT, payload: id })
}

export const decrement = (id) => (dispatch) => {
    console.log(id);
    dispatch({ type: ActionType.DECREMENTQNT, payload: id })
}

export const deletecart = (id) => (dispatch) => {
    dispatch({ type: ActionType.DELETE_CART, payload: id })
}