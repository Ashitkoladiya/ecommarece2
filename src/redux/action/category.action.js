import * as ActionType from "../ActionTypes"
import { db, storage } from "../../Firebase";

import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";



export const getCategory = (data) => async (dispatch) => {
  console.log(data);
    try {
      let data=[]
      // dispatch({type: ActionType.GET_DOCTOR,payload:data});
      const querySnapshot = await getDocs(collection(db, "category"));
  
      
      console.log(data);
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
        // console.log(`${doc.id} => ${doc.data()}`);
  
      });
  
      dispatch({ type: ActionType.GET_CATEGORY, payload: data })
  
    } catch (error) {
      dispatch(errorCategory(error))
    }
  }
  

  export const addCategory = (data) => async (dispatch) => {
    console.log(data);
    try {
      const imgref = Math.floor(Math.random() * 10000000).toString();
      const docref = ref(storage, 'category/' + imgref);
  
  
      uploadBytes(docref, data.file).then((snapshot) => {
        console.log(data);
        getDownloadURL(ref(storage, snapshot.ref))
          .then(async (url) => {
            const docRef = await addDoc(collection(db, "category"), {
              categoryname: data.categoryname,
              url: url,
              fileName: imgref
            });
            dispatch({
              type: ActionType.ADD_CATEGORY, payload: {
                id: docRef.id,
                categoryname: data.categoryname,
                url: url,
                fileName: imgref
  
              }
            })
          });
      })
  
      console.log(data);
  
  
  
    } catch (error) {
      console.error("Error adding document: ", error);
      dispatch(errorCategory(error))
    }
  }

  export const updatecategory = (data) => async (dispatch) => {
    console.log(data);
  
    try {
      const categoryedit = doc(db, "category", data.id);
      console.log(data);
  
  
      if (typeof data.file === "string") {
        console.log("only data");
        //putdoctordata(data)
        // .then((data) => dispatch(({ type: ActionType.UPDATE_DOCTOR, payload: data.data })))
        // .catch(error => dispatch(errorDoctor(error.message)))
  
  
        // Set the "capital" field of the city 'DC'
        await updateDoc(categoryedit, {
          categoryname: data.categoryname,
          url: data.url
        });
  
        dispatch({ type: ActionType.UPDATE_CATEGORY, payload: data })
      } else {
        // console.log("data with img");
  
        const docRefdel = ref(storage, 'category/' + data.fileName);
  
  
        deleteObject(docRefdel).then(async () => {
          const imgref = Math.floor(Math.random() * 1000000).toString();
          const docref = ref(storage, 'category/' + imgref);
  
  
          uploadBytes(docref, data.file).then((snapshot) => {
  
            getDownloadURL(ref(storage, snapshot.ref))
              .then(async (url) => {
                await updateDoc(categoryedit, {
                  categoryname: data.categoryname,
                  url: data.url,
                  fileName: imgref
                });
          
                dispatch({ type: ActionType.UPDATE_CATEGORY, payload: {...data, url: data.url,
                  fileName: imgref} })
              })
           
  
          })
        }
  
        )
      }
    }
    catch (error) {
      dispatch(errorCategory(error))
    }
  }

  export const Deletecategory = (data) => async (dispatch) => {
    try {
      console.log(data);
  
      const docRef = ref(storage, 'category/' + data.fileName);
  
  
      deleteObject(docRef).then(async () => {
        await deleteDoc(doc(db, "category", data.id));
        // deleteDoc(data.id)
        dispatch(({ type: ActionType.REMOVE_CATEGORY, payload: data.id }))
  
      }).catch((error) => {
        dispatch(errorCategory(error.message))
      });
      
  
    }
    catch (error) {
      dispatch(errorCategory(error))
    }
  }

  export const errorCategory = (error) => (dispatch) => {
    dispatch({ type: ActionType.CATEGORY_ERROES, payload: error })
  } 