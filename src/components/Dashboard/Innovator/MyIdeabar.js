import React , {  useState } from 'react';
import { ideaData } from '../../../data/Userdata';
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db, auth, storage } from "../../../firebase/config";




function MyIdeabar() {
    
    const [ideaList, setideaList] = useState([]);

    ideaData.then(
      (value) => {
        setideaList(value)
        // console.log(value); // Success!
      },
      (reason) => {
        console.error(reason); // Error!
      },
    );

    const deleteuser = async (id) => {
      const userDoc = doc(db, "Ideas", id);
      await deleteDoc(userDoc);
    };



  return (
    <div className='ml-64 '>
        <div className='mx-8 rounded-xl bg-white'>
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
                    <td><p className='text-sm font-bold flex justify-center text-blue-800'>{post.id}</p></td>
                    <td><p className='text-sm font-normal flex justify-center text-gray-400'>march 14 2003</p></td>
                    <td><p className='text-sm font-bold flex justify-center text-blue-800'>{post.d}</p></td>
                    <td><button className='text-md w-3/4 mx-auto font-normal flex justify-center text-white bg-[#4D44B5] rounded-full py-2 '>View Problem Statement</button></td>
                    <td><p className='text-sm font-bold flex justify-center text-blue-800'>button</p></td>
                    <td>
                    <button 
                    className='text-md  mx-auto font-normal flex justify-center text-white bg-red-700 rounded-full py-1 px-4'
                    onClick={() => deleteuser(post.id)}
                    >Delete</button>
                    </td>
                </tr>
                ))}

            </table>
            <div className='flex justify-between flex-row px-4 py-4'>
                <div><p className='text-sm text-gray-500'>showing 1-5 data from 100</p></div>
            </div>
        </div>
    </div>
  )
}

export default MyIdeabar