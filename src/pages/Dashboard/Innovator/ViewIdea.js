import React,{useState,useEffect} from 'react'
import Header from '../../../components/Dashboard/Header'
import ViewIdeabar from '../../../components/Dashboard/Innovator/ViewIdeabar'
import {userData} from '../../../data/Userdata'
function ViewIdea() {
  const [isSponser , setIsSponsor] = useState(true)
  const [role, setRole] = useState('')

  useEffect(() => {
    userData.then(
      (value) => {
        if(value[0].role==='innovator')
        {
          setIsSponsor(false)
        }
      },
      (reason) => {
        console.error(reason);
      }
    );
  }, [role]);

  
  return (
    <div className='bg-[#F3F4FF] min-h-screen'>
        <Header/>
        <ViewIdeabar isSponser={isSponser}/>
    </div>
  )
}

export default ViewIdea