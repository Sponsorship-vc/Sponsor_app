import {
    getDocs,
    collection,
    getFirestore,
    onSnapshot,
    orderBy,query,
  } from "firebase/firestore";
  import { app ,auth } from '../firebase/config';



const db = getFirestore(app);
const ideaCollectionRef = collection(db, "Ideas");
const orderedDataRef = query(ideaCollectionRef,orderBy("date", "desc"));
const usersCollectionRef = collection(db, "users");


const getideaList = async () => {
  try {
    return new Promise((resolve, reject) => {
      const unsubscribe = onSnapshot(ideaCollectionRef, (snapshot) => {
        const filteredData =  snapshot.docs
          .map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
          .filter((doc) => doc.userId === auth.currentUser?.uid);
        resolve(filteredData);
      }, (error) => {
        console.error(error);
        reject(error);
      });

      // Returning a function to unsubscribe from the snapshot listener
      return () => unsubscribe();
    });
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};


const getUserList = async () => {
    try {
      const data = await getDocs(usersCollectionRef);
      const filteredData = await data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })).filter((doc) => doc.userId === auth.currentUser?.uid);
      return(filteredData);
      // console.log(userList)
    } catch (err) {
      console.error(err);
    }
  }


  export const getideasList = () => {

    try {
      return new Promise((resolve, reject) => {
        const unsubscribe = onSnapshot(orderedDataRef, (snapshot) => {
          const filteredData = snapshot.docs
            .map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
            .filter((doc) => doc.draft === true);
          resolve(filteredData);
        }, (error) => {
          console.error(error);
          reject(error);
        });
  
        // Returning a function to unsubscribe from the snapshot listener
        return () => unsubscribe();
      });
    } catch (err) {
      console.error(err);
      return Promise.reject(err);
    }
  };
  

  
  export const ideaData = getideaList();
  export const userData = getUserList();
  export const ideasData = getideasList();