import React , {  useState , useEffect} from 'react';
import { ideaData } from '../../../data/Userdata';
import { 
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../../firebase/config";
import { Link } from 'react-router-dom';
import { PopoverHandler , Popover  ,PopoverContent ,Typography, Input } from '@material-tailwind/react';




function MyIdeabar() {
    
    const [ideaList, setideaList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState("");
    const length = ideaList.length;



  useEffect (() =>{
      ideaData.then(
        (value) => {
          setideaList(value)
          // console.log(value); // Success!
        },
        (reason) => {
          console.error(reason); // Error!
        },
      );
      },[ideaData])


    const deleteuser = async (id ,name) => {
      if(name === value){
        const userDoc = doc(db, "Ideas", id);
        await deleteDoc(userDoc);
        window.location.reload()
      }
    };

    useEffect(() => {
      let isTimerExpired = false;
      let isDataLoaded = false;
    
      const checkLoadingState = () => {
        if (isTimerExpired && isDataLoaded) {
          setLoading(false);
        }
      };
    
      if (Array.isArray(ideaList) && ideaList.length > 0) {
        isDataLoaded = true;
        checkLoadingState();
      }
    
      const timer = setTimeout(() => {
        isTimerExpired = true;
        checkLoadingState();
      }, 500);
    
      return () => {
        clearTimeout(timer);
      };
    }, [ideaList]);
    
    

    



  return (
    <div className='ml-64 py-8'>
        <div className='mx-8   rounded-xl bg-white'>
            <table className=' w-full  px-4 '>
                <thead className='w-full h-20'>
                <tr>
                    <th><p className='text-sm font-bold text-blue-800'>Title</p></th>
                    <th><p className='text-sm font-bold text-blue-800'>Id</p></th>
                    <th><p className='text-sm font-bold text-blue-800'>Date</p></th>
                    <th><p className='text-sm font-bold text-blue-800'>Patended</p></th>
                    <th><div></div></th>
                    <th><p className='text-sm font-bold text-blue-800'>Sponsorship action</p></th>
                    <th><p className='text-sm font-bold text-blue-800'>Action</p></th>    
                </tr>
                </thead>
                {loading ? (
               <tbody>
               {[1, 2, 3, 4].map((index) => (
                 <tr className='h-20 border-l-4 hover:border-l-blue-800 border-l-white border-t-2' key={index}>
                   <td>
                     <div className='flex justify-center'>
                       <div className='animate-pulse bg-blue-200 h-6 w-32 rounded-md'></div>
                     </div>
                   </td>
                   <td>
                     <div className='flex justify-center'>
                       <div className='animate-pulse bg-blue-200 h-6 w-16 rounded-md'></div>
                     </div>
                   </td>
                   <td>
                     <div className='flex justify-center'>
                       <div className='animate-pulse bg-blue-200 h-6 w-24 rounded-md'></div>
                     </div>
                   </td>
                   <td>
                     <div className='flex justify-center'>
                       <div className='animate-pulse bg-blue-200 h-6 w-20 rounded-md'></div>
                     </div>
                   </td>
                   <td>
                     <div className='flex justify-center'>
                       <div className='animate-pulse bg-blue-200 h-6 w-12 rounded-md'></div>
                     </div>
                   </td>
                   <td>
                     <div className='flex justify-center'>
                       <div className='animate-pulse bg-blue-200 h-6 w-20 rounded-md'></div>
                     </div>
                   </td>
                 </tr>
               ))}
             </tbody>
             
                  ) : (
                    <tbody>
                {ideaList.map((post) => (
                <tr className='h-20 border-l-4 hover:border-l-blue-800 border-l-white border-t-2'>
                    <td><p className='text-sm font-bold flex justify-center align-center text-blue-800'>{post.title}</p></td>
                    <td><p className='text-sm font-bold flex justify-center text-blue-800'>{post.id}</p></td>
                    <td>
                      <p className='text-sm font-normal flex justify-center text-gray-400'>
                        {(() => {
                          const date = post.date.toDate();
                          const formattedDate = date.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          });
                          return formattedDate;
                        })()}
                      </p>
                    </td>
                    <td><p className='text-sm font-bold flex justify-center text-blue-800 capitalize'>{post.patended ? 'yes' : 'no' }</p></td>
                    <td>
                    <Link to={`/dashboard/innovator/myideas/${post.id}`}>
                      <button 
                      className='text-sm w-[80px] mx-auto font-normal flex justify-center text-white bg-[#4D44B5] rounded-full py-2 '
                      >
                        View
                      </button>      
                      </Link>

                    </td>
                    <td><p className='text-sm font-bold flex justify-center text-blue-800'> {post.draft ? "Submitted":"Draft"}</p></td>
                    <td>
                      <Popover placement="left">
                        <PopoverHandler>
                          <button
                          className='text-sm  mx-auto font-normal flex justify-center text-white bg-red-700 rounded-full py-2 px-4'
                          >Delete</button>
                        </PopoverHandler>
                        <PopoverContent className="w-96">
                          <Typography
                          variant="h6"
                          color="blue-gray"
                          className="mb-6"
                          >
                            Type "{post.title}"
                          </Typography>
                          <div className="flex gap-2">
                            <input
                            onChange={(e) => setValue(e.target.value)}
                            />
                            <button
                          className='text-md font-normal flex text-white bg-red-700 rounded-full my-auto py-2 px-4'
                          onClick={() => deleteuser(post.id ,post.title)}
                          >Delete</button>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </td>
                </tr>
                ))}
                </tbody>
                )}

            </table>
            <div className='flex justify-between flex-row px-4 py-4'>
                <div><p className='text-sm text-gray-500'>showing 1-{length} data from {length}</p></div>
            </div>
        </div>
    </div>
  )
}

export default MyIdeabar