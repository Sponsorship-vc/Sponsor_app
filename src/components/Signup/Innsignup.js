import React,{useState} from 'react'
import Sidebar from '../../components/Roleselector/Sidebar'
import googleImg from '../../Assets/Signup/Google Login.png'
import { getAuth, createUserWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { app } from '../../firebase/config';
import {
  getDocs,
  collection,
  addDoc,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import {useNavigate} from 'react-router-dom'


function Innsignup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const auth = getAuth(app);
  const usersCollectionRef = collection(db, "users");
  const [userList, setuserList] = useState([]);
  const navigate = useNavigate()
  // console.log(auth.currentUser)

  const handleRegister=()=>{
    createUserWithEmailAndPassword(auth,email, password)
      .then(function(user) {
        // User is signed up
        onSubmituser()
        setError(null);
        setName(user.displayName);
        // console.log(user.displayName)
      })
      .catch(function(error) {
        // Error signing up user
        setError(error.message);
      });
  }
  const handleSigninWithGoogle=()=>{
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setName(auth.currentUser.displayName)
        // console.log(name)
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        onSubmituser()
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
      });
  }

  const onSubmituser = async () => {
    try {
      await addDoc(usersCollectionRef, {
        name: name,
        email: auth.currentUser.email,
        role:"innovator",
        userId: auth.currentUser.uid,
      });
      getuserList();
      navigate("/login/role/innovator")
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
      }));
      setuserList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='flex w-screen z-[-1] flex-row mr-[-10px]'>
        <div className='z-[-1]'>
        <Sidebar/>
        </div>
        <div className='flex-1 h-screen ml-[-1rem] bg-white rounded-l-2xl flex items-center justify-center'>
          <div className='flex flex-col'>
          <p className='font-abc text-4xl text-center font-semibold py-10'> Register your account as a Innovator </p>
          <div className='flex flex-col gap-2'>
            <input  placeholder='Your name' className='w-full mb-6 px-4 py-2 border  focus:outline-none rounded-2xl' type='text' onChange={(e) => setName(e.target.value)} />
            <input  placeholder='Your company mail' className='w-full mb-6 px-4 py-2 border  focus:outline-none rounded-2xl' type='email' onChange={(e) => setEmail(e.target.value)} />
            <input  placeholder='Create Password' type='password' className='w-full mb-6 px-4 py-2 border  focus:outline-none rounded-2xl' onChange={(e) => setPassword(e.target.value)} />
            <p className='text-gray-400 text-center w-3/4 flex mx-auto'>By signing up, you confirm that you’ve read and accepted our User Notice and Privacy Policy.</p>
            <button className='w-full my-5 py-2 bg-[#1D263A] hover:bg-[#2C3A4D] text-white font-bold rounded-lg' onClick={handleRegister}>Register</button>
            <a href='/login/role/innovator'className='text-blue-500 cursor-pointer text-sm text-center flex mx-auto'>Already have an SponSir account? Log in</a>
            <p className='text-md text-gray-500 mx-auto'>Or</p>
            <div className='mx-auto'>
            <img src={googleImg} onClick={handleSigninWithGoogle} className='cursor-pointer'/>
            </div>
          </div>
         </div>
        </div>
      </div>
  )
}

export default Innsignup