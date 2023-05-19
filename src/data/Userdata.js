import {
    getDocs,
    collection,
    getFirestore,
  } from "firebase/firestore";
  import { app ,auth } from '../firebase/config';



const db = getFirestore(app);
const ideaCollectionRef = collection(db, "Ideas");
const usersCollectionRef = collection(db, "users");


const getideaList = async () => {
    try {
      const data = await getDocs(ideaCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })).filter((doc) => doc.userId === auth.currentUser.uid);
      return(filteredData);
    //   console.log(ideaList,userList,"1")
    } catch (err) {
      console.error(err);
    }
  };

  const getuserList = async () => {
    try {
      const data = await getDocs(usersCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })).filter((doc) => doc.userId === auth.currentUser.uid);
      return(filteredData);
      // console.log(userList)
    } catch (err) {
      console.error(err);
    }
  };

  
  export const ideaData = getideaList();
  export const userData = getuserList();