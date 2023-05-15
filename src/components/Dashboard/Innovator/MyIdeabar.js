import React from 'react'
import {
    getDocs,
    collection,
  } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { getAuth } from "firebase/auth"
import { useEffect, useState } from "react";
import { app } from '../../../firebase/config';



function MyIdeabar() {
    
    const [Name ,setName] = useState(`users/errorpath/ideas`);
    const usersCollectionRef = collection(db, "users");
    const ideaCollectionRef = collection(db, Name);
  const [userList, setuserList] = useState([]);
  const [ideaList, setideaList] = useState([]);
  const auth = getAuth(app);


    const getuserList = async () => {
        try {
          const data = await getDocs(usersCollectionRef);
          const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          })).filter((doc) => doc.userId === auth.currentUser.uid);
          setuserList(filteredData);
          setName(`users/${filteredData[0].id}/ideas`)
        //   console.log(ideaList,userList,"21")

        } catch (err) {
          console.error(err);
        }
      };

      const getideaList = async () => {
        try {
          const data = await getDocs(ideaCollectionRef);
          const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
          setideaList(filteredData);
        //   console.log(ideaList,userList,"1")
        } catch (err) {
          console.error(err);
        }
      };
    
      useEffect(() => {
        getuserList();
        getideaList();
        // console.log(ideaList,userList,"1")
      });




  return (
    <div className='ml-64'>
        <div className='mx-8 rounded-xl '>
            <table className=' w-full  px-4 '>
                <thead className='w-full h-14'>
                <tr>
                    <th><p className='text-sm font-bold text-blue-800'>Title</p></th>
                    <th><p className='text-sm font-bold text-blue-800'>Id</p></th>
                    <th><p className='text-sm font-bold text-blue-800'>Date</p></th>
                    <th><p className='text-sm font-bold text-blue-800'>Categtory</p></th>
                    <th><div></div></th>
                    <th><p className='text-sm font-bold text-blue-800'>Sponsorship action</p></th>
                    <th><p className='text-sm font-bold text-blue-800'>Action</p></th>    
                </tr>
                </thead>
                {ideaList.map((post) => (
                <tr className='h-16 hover:border-l-4 hover:border-l-blue-800 border-t-2'>
                    <td><p className='text-sm font-bold flex justify-center align-center text-blue-800'>{post.a}</p></td>
                    <td><p className='text-sm font-bold flex justify-center text-blue-800'>#123456789</p></td>
                    <td><p className='text-sm font-bold flex justify-center text-blue-800'>marcg 14 2003</p></td>
                    <td><p className='text-sm font-bold flex justify-center text-blue-800'>{post.d}</p></td>
                    <td><p className='text-sm font-bold flex justify-center text-blue-800'>button</p></td>
                    <td><p className='text-sm font-bold flex justify-center text-blue-800'>button</p></td>
                    <td></td>
                </tr>
                ))}

            </table>
            <div className='flex justify-between flex-row px-4 py-4'>
                <div><p className='text-sm text-gray-500'>showing 1-5 data from 100</p></div>
                <div>buttons</div>
            </div>
        </div>
    </div>
  )
}

export default MyIdeabar