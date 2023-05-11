import React,{useState} from 'react'
import Sidebar from '../../components/Roleselector/Sidebar'
import googleImg from '../../Assets/Signup/Google Login.png'
import { getAuth, createUserWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { app } from '../../firebase/config';

function Innsignup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const auth = getAuth(app);

  const handleRegister=()=>{
    createUserWithEmailAndPassword(auth,email, password)
      .then(function(user) {
        // User is signed up
        setError(null);
        setName(user.displayName);
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
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
      });
  }

  return (
    <div className='flex w-screen z-[-1] flex-row mr-[-10px]'>
        <div className='z-[-1]'>
        <Sidebar/>
        </div>
        <div className='flex-1 ml-[-1rem] bg-white rounded-l-2xl flex items-center justify-center'>
          <div className='flex flex-col'>
          <p className='font-abc text-4xl text-center font-semibold py-10'> Register your account as a Sponsor </p>
          <div className='flex flex-col gap-2'>
            <input  placeholder='Your name' className='w-full mb-6 px-4 py-2 border  focus:outline-none rounded-2xl' onChange={(e) => setName(e.target.value)}/>
            <input  placeholder='Your company mail' className='w-full mb-6 px-4 py-2 border  focus:outline-none rounded-2xl' onChange={(e) => setEmail(e.target.value)}/>
            <input  placeholder='Create Password' type='password' className='w-full mb-6 px-4 py-2 border  focus:outline-none rounded-2xl' onChange={(e) => setPassword(e.target.value)}/>
            <p className='text-gray-400 text-center w-3/4 flex mx-auto'>By signing up, you confirm that you’ve read and accepted our User Notice and Privacy Policy.</p>
            <button className='w-full my-5 py-2 bg-[#1D263A] hover:bg-[#2C3A4D] text-white font-bold rounded-lg' onClick={handleRegister}>Register</button>
            {error && <p>{error}</p>}
            <a href='/login/role/innovator'className='text-blue-500 font-bold text-md text-center flex mx-auto'>Already have an SponSir account? Log in</a>
            <p className='text-md text-gray-500 mx-auto'>Or</p>
            <img src={googleImg} onClick={handleSigninWithGoogle}/>
          </div>
         </div>
        </div>
      </div>
  )
}

export default Innsignup