import React,{useState} from 'react'
import Sidebar from '../Roleselector/Sidebar'
import { auth, db } from '../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDocs, collection} from 'firebase/firestore';
import { useNavigate } from "react-router-dom"
function Sponlogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [userList, setUserList] = useState([]);
  const usersCollectionRef = collection(db, 'users');
  const navigate = useNavigate()

  const handleLoginClick = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("userCredential:", userCredential);

      // Fetch user list from Firestore
      const data = await getDocs(usersCollectionRef);
      const filteredData = data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((doc) => doc.userId === auth.currentUser.uid);
      setUserList(filteredData);

      // Update login state based on user role
      let isRoleFound = false;
      userList.forEach((user) => {
        if (!isRoleFound && user.role === "sponsor" && user.verify==='true') {
          navigate("/dashboard/sponsor")
          isRoleFound = true;
          
        }
        if (!isRoleFound && user.role === "sponsor" && user.verify==='false') {
            navigate("/sponsor/verify")
            isRoleFound = true;
            
          }
      });
    } catch (err) {
      console.error(err);
      setError('Failed to login. Please try again.');
    }
  };

  return (
    <div className='flex w-screen z-[-1] flex-row mr-[-10px]'>
        <div className='z-[-1]'>
            <Sidebar/>
        </div>
        <div className='flex-1 ml-[-1rem] bg-white rounded-l-2xl flex items-center justify-center'>
            <div className='flex flex-col'>
                <p className='font-abc text-4xl text-center font-semibold py-10'> Login to your sponsor account </p>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <input  placeholder='Enter your company mail' className='w-full mb-6 px-4 py-2 border  focus:outline-none rounded-2xl' type='email' onChange={(e) => setEmail(e.target.value)} />
                    <input  placeholder='Enter your Password' type='password' className='w-full mb-6 px-4 py-2 border  focus:outline-none rounded-2xl' onChange={(e) => setPassword(e.target.value)}/>
                    <p className='text-xs text-gray-500 r'>By signing up, you confirm that you’ve read <br/>and accepted our <a className='text-blue-500 cursor-pointer'  href="https://www.example.com/user-notice">User Notice</a> and <a className='text-blue-500 cursor-pointer' href="https://www.example.com/privacy-policy">Privacy Policy</a>.</p>
                    <button className='w-full my-5 py-2 bg-[#1D263A] hover:bg-[#2C3A4D] text-white font-bold rounded-lg' onClick={handleLoginClick} >Login</button>
                    <p className='text-[#ff0000]'>{error}</p>
                    <p className='text-blue-500 cursor-pointer text-sm text-center flex mx-auto'>Don’t  have an SponSir account? Register</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sponlogin
