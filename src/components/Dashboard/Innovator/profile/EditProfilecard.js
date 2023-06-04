import React , {  useState , useEffect } from 'react';
import { GrLocation } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { userData } from '../../../../data/Userdata';
import { db  } from "../../../../firebase/config";
import tick from '../../../../Assets/Dashboard/Icons/tick.png'
import { doc ,updateDoc } from "firebase/firestore";




function EditProfilecard() {

    const [userList, setuserList] = useState([]);
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [phno, setPhno] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [add1, setAdd1] = useState("");
    const [add2, setAdd2] = useState("");
    const [add3, setAdd3] = useState("");
    const [add4, setAdd4] = useState("");
    const [pin, setPin] = useState("");
    const [bio, setBio] = useState("");
    const [Id, setId] = useState("");


      useEffect(() => {
        userData.then(
          (value) => {
            setuserList(value)
            // console.log(value);
            setName(value[0].name ? value[0].name : "");
            setCity(value[0].City ? value[0].City : "");
            setPhno(value[0].Phoneno ? value[0].Phoneno : "");
            setEmail(value[0].email ? value[0].email : "");
            setDob(value[0].dob ? value[0].dob : "");
            setAdd1(value[0].add1 ? value[0].add1 : "");
            setAdd2(value[0].add2 ? value[0].add2 : "");
            setAdd3(value[0].add3 ? value[0].add3 : "");
            setAdd4(value[0].add4 ? value[0].add4 : "");
            setPin(value[0].pin ? value[0].pin : "");
            setBio(value[0].bio ? value[0].bio : "");
            setId(value[0].id);
          },
          (reason) => {
            console.error(reason); // Error!
          }
        );
      }, []);


      const updateUser = async (id) => {
        const userDoc = doc(db, "users", Id);
        console.log(phno,"this")
        await updateDoc(userDoc, { 
            City: city,
            Phoneno: phno,
            email:email,
            dob:dob,
            add1:add1,
            add2:add2,
            add3:add3,
            add4:add4,
            pin:pin,
            bio:bio,
        });
      };


  return (
    <div className='flex  max-w-full ml-[17rem] rounded-xl flex-col bg-white mr-5 '>
      <div className='bg-[rgb(48,57,114)] h-[6rem] w-full rounded-t-xl justify-start flex flex-row gap-x-[35rem]'>
        <div className='h-[8rem] w-[8rem] rounded-full bg-white m-5 items-center justify-center flex z-0'>
          {/* <label htmlFor='profile-picture-input'>
            {user.pfp ? (
              <img
                src={user.pfp}
                className='m-auto h-[6rem] w-[6rem] rounded-full bg-white cursor-pointer'
                alt='Profile Picture'
                onClick={handleClick}
              />
            ) : (
              <img
                src={pfp}
                className='m-auto h-[7.5rem] w-[7.5rem] rounded-full bg-white cursor-pointer z-[15]'
                alt='Profile Picture'
                onClick={handleClick}
              />
            )}
          </label> */}
          {/* <input
            type='file'
            accept='image/*'
            id='profile-picture-input'
            onChange={handlePictureUpload}
            className='hidden'
          /> */}
        </div>
        <div className='mb-0 flex relative'>
          <div className='w-[10rem] h-[5rem] rounded-b-full bg-[#FCC43E] transform rotate-180 !top-4 left-10 absolute z-10'></div>
          <div className='w-[8rem] h-[4rem] rounded-b-full bg-[#FB7D5B] transform rotate-180  !top-8   absolute z-0'></div>
        </div>
      </div>
      <div className='mt-[4rem] relative h-auto'>
        <div className='flex flex-row justify-between max-h-6 items-start'>
          <h2 className='font-bold text-dark-blue ml-5 text-2xl flex-initial'>{name}</h2>
          <img src={tick} alt='edit' className='h-7 w-7 cursor-pointer mr-10' onClick={updateUser}/>
          {/* <button className="inline-block text-sm px-6 py-3 mr-4 leading-none border rounded-full text-white bg-gray-800 hover:bg-gray-900 lg:mt-0 font-bold" onClick={updateUser}>Submit</button> */}
        </div>
        <h4 className='text-gray-500 ml-5 mt-2'>Innovator</h4>
        <div className='flex flex-wrap gap-44 ml-5 mt-2 gap-y-10'>
          <div className='flex flex-col'>
            <label className='text-[#A098AE]'>Location</label>
            
            <div className='flex flex-row gap-4 mt-3'>
              <GrLocation className='flex my-auto' fill='FB7D5B' />
              <input type="text" className="border h-12 border-gray-300 rounded w-full p-2 resize-none" 
              placeholder='Enter City'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              />

            </div>
          </div>
          <div className='flex flex-col'>
            <label className='text-[#A098AE]'>Phone number</label>
            <div className='flex flex-row gap-4 mt-3'>
              <BsFillTelephoneFill className='flex my-auto' fill='#FB7D5B' />              
              <input type="text" className="border h-12 border-gray-300 rounded w-full p-2 resize-none" 
              placeholder='Enter Phone number'
              value={phno}
              onChange={(e) => setPhno(e.target.value)}/>

            </div>
          </div>
          <div className='flex flex-col'>
            <label className='text-[#A098AE]'>Email id</label>
            <div className='flex flex-row gap-4 mt-3'>
              <MdEmail className='flex my-auto' fill='#FB7D5B ' size={20} />
              <input type="text" className="border h-12 border-gray-300 rounded w-full p-2" 
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>

            </div>
          </div>
          <div className='flex flex-col'>
            <label className='text-[#A098AE]'>Date of birth</label>
            <div className='flex flex-row gap-4 mt-3'>
            <input type="date" className="border h-12 border-gray-300 rounded w-full p-2" 
            value={dob}
            onChange={(e) => setDob(e.target.value)}/>
            </div>
          </div>
          <div className='flex flex-col'>
                <label className='text-[#A098AE]'>Address</label>
                <div className='flex flex-wrap gap-10 pt-3'>
                <div>
                    <label className='text-[#A098AE]'>Address line 1</label>
                    <input type="text" className="border h-12 border-gray-300 rounded w-full p-2" 
                    value={add1}
                    onChange={(e) => setAdd1(e.target.value)}/>
                </div>
                <div>
                    <label className='text-[#A098AE]'>Address line 2 (optional)</label>
                    <input type="text" className="border h-12 border-gray-300 rounded w-full p-2" 
                    value={add2}
                    onChange={(e) => setAdd2(e.target.value)}/>
                </div>
                <div>
                    <label className='text-[#A098AE]'>State</label>
                    <input type="text" className="border h-12 border-gray-300 rounded w-full p-2" 
                    value={add3}
                    onChange={(e) => setAdd3(e.target.value)}/>
                </div>
                <div>
                    <label className='text-[#A098AE]'>PIN</label>
                    <input type="text" id="postalCode" name="postalCode" className="border h-12 border-gray-300 rounded w-full p-2"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)} />
                </div>
                <div>
                    <label className='text-[#A098AE]'>Country</label>
                    <input type="text" className="border h-12 border-gray-300 rounded w-full p-2" 
                    value={add4}
                    onChange={(e) => setAdd4(e.target.value)}/>
                </div>


            </div>
          </div>
        </div>
        <hr className='bg-black w-full mt-5'></hr>
          <div className='flex flex-col ml-5 gap-y-10 mt-5 '>
            <div>
              <label className='text-[#A098AE]'>Bio</label>
              <div className='flex flex-row gap-4 mt-3 pr-4'>
              <textarea type="text" className="border h-28 border-gray-300 rounded w-full p-2 resize-none"
              value={bio}
              onChange={(e) => setBio(e.target.value)} />

              </div>
              <hr className='bg-black w-full mt-5'></hr>
            </div>
            <div className='flex flex-row gap-[30rem] mb-5'>
              <div className='flex flex-col'>
                <label className='text-[#A098AE]'>Resume</label>
                <div className='flex flex-row gap-4 mt-3 relative'>
                  <input
                    type='file'
                    class='opacity-0 absolute inset-0 z-0 h-15 w-[15rem]'
                  />
                  <div class='h-12 w-[15rem] rounded-lg border border-dotted border-gray-400 bg-transparent flex items-center justify-center'>
                    <span class='text-gray-400'>Click here to Upload</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col'>
                <label className='text-[#A098AE]'>Interest</label>
                <div className='flex flex-row gap-4 mt-3'>
                  <p className='font-semibold text-dark-blue'>Use tagify</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default EditProfilecard