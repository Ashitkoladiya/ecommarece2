import * as ActionType from "../ActionTypes"
import { db, storage } from "../../Firebase";

import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";



export const getProduct = (data) => async (dispatch) => {
  console.log(data);
    try {
      // dispatch({type: ActionType.GET_DOCTOR,payload:data});
      const querySnapshot = await getDocs(collection(db, "Product"));
      
      let data=[]
      
      console.log(data);
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
        // console.log(`${doc.id} => ${doc.data()}`);
  
      });
  
      dispatch({ type: ActionType.GET_PRODUCT, payload: data })
  
    } catch (error) {
      dispatch(errorProduct(error))
      console.log(error);
    }
  }
  

  export const addProduct = (data) => async (dispatch) => {
    console.log(data);
    try {
      const imgref = Math.floor(Math.random() * 1000000).toString();
      const docref = ref(storage, 'Product/' + imgref);
  
  
      uploadBytes(docref, data.file).then((snapshot) => {
        console.log(data);
        getDownloadURL(ref(storage, snapshot.ref))
          .then(async (url) => {
            console.log(url);   
            const docRef = await addDoc(collection(db, "Product"), {
              productname: data.productname,
              url: url,
              price: data.price,
              categoryname:data.categoryname,
              fileName: imgref
            });
            dispatch({
              type: ActionType.ADD_PRODUCT, payload: {
                id: docRef.id,
                productname: data.productname,
                url: url,
                categoryname:data.categoryname,
                price: data.price,
                fileName: imgref
  
              }
            })
          });
      })
  
      console.log(data);
  
  
  
    } catch (error) {
      console.error("Error adding document: ", error);
      dispatch(errorProduct(error))
    }
  }

  export const updateProduct = (data) => async (dispatch) => {
    console.log(data);
  
    try {
      const Productedit = doc(db, "Product", data.id);
      console.log(data);
  
  
      if (typeof data.file === "string") {
        console.log("only data");
        //putdoctordata(data)
        // .then((data) => dispatch(({ type: ActionType.UPDATE_DOCTOR, payload: data.data })))
        // .catch(error => dispatch(errorDoctor(error.message)))
  
  
        // Set the "capital" field of the city 'DC'
        await updateDoc(Productedit, {
          productname: data.productname,
          url: data.url,
          price:data.price,
          categoryname:data.categoryname
        });
  
        dispatch({ type: ActionType.UPDATE_PRODUCT, payload: data })
      } else {
        // console.log("data with img");
  
        const docRefdel = ref(storage, 'Product/' + data.fileName);
  
  
        deleteObject(docRefdel).then(async () => {
          const imgref = Math.floor(Math.random() * 1000000).toString();
          const docref = ref(storage, 'Product/' + imgref);
  
  
          uploadBytes(docref, data.file).then((snapshot) => {
  
            getDownloadURL(ref(storage, snapshot.ref))
              .then(async (url) => {
                await updateDoc(Productedit, {
                  productname: data.productname,
                  url: data.url,
                  price:data.price,
                  categoryname:data.categoryname,
                  fileName: imgref
                });
          
                dispatch({ type: ActionType.UPDATE_PRODUCT, payload: {
                    ...data, 
                    url: data.url,
                    price:data.price,
                    categoryname:data.categoryname,
                    fileName: imgref,

                } })
              })
           
  
          })
        }
  
        )
      }
    }
    catch (error) {
      dispatch(errorProduct(error))
    }
  }

  export const DeleteProduct = (data) => async (dispatch) => {
    console.log(data);    
    try {
      
  
      const docRef = ref(storage, 'Product/' + data.fileName);
  
  
      deleteObject(docRef).then(async () => {
        await deleteDoc(doc(db, "Product", data.id));
        // deleteDoc(data.id)
        dispatch(({ type: ActionType.REMOVE_PRODUCT, payload: data.id }))
  
      }).catch((error) => {
        dispatch(errorProduct(error.message))
      });
      
  
    }
    catch (error) {
      dispatch(errorProduct(error))
    }
  }

  export const errorProduct = (error) => (dispatch) => {
    dispatch({ type: ActionType.PRODUCT_ERROES, payload: error })
  } 