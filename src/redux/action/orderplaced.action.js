import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore"
import { db, storage } from "../../Firebase"
import * as Actiontype from "../ActionTypes"
export const getorderdata = () => async (dispatch) => {

    try {
        dispatch(loadingMedicin())

        const querySnapshot = await getDocs(collection(db, "Order"));

        let dataget = [];

        querySnapshot.forEach((doc) => {
            dataget.push({ id: doc.id, ...doc.data() })
        });
        dispatch({ type: Actiontype.GET_ORDER, payload: dataget })


        // getDoctordata()
        //   .then((data) => dispatch({ type: Actiontype.GET_DOCTOR, payload: data.data }))

    } catch (error) {
        dispatch(errorMedicin(error.message));
    }
}



export const postorder = (data) => async (dispatch) => {

    try {
        dispatch(loadingMedicin())

        const docRef = await addDoc(collection(db, "Order"), {
            Cart: data.cartDetails,
            User: data.userDetails
        });
        dispatch({ type: Actiontype.POST_ORDER, payload: docRef })

    } catch (error) {
        dispatch(errorMedicin(error.message));
        console.error("Error adding document: ", error);
    }
}





export const loadingMedicin = () => (dispatch) => {
    dispatch({ type: Actiontype.LOADING_MEDICINE })
}

export const errorMedicin = (error) => (dispatch) => {
    dispatch({ type: Actiontype.ERROR_MEDICINE, payload: error })
}