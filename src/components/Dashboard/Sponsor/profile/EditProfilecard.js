import React , {  useState , useEffect } from 'react';
import { GrLocation } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { userData } from '../../../../data/Userdata';
import { db , storage } from "../../../../firebase/config";
import { ref, uploadBytes ,getDownloadURL} from "firebase/storage";
import { doc ,updateDoc ,setDoc } from "firebase/firestore";
import { IoPersonCircleOutline } from 'react-icons/io5';





function EditProfilecard() {
    const [fileUploaded, setFileUploaded] = useState(false);
    const [fileName, setFileNames] = useState('');
    const [fileUpload, setFileUpload] = useState(null);
    const [userList, setuserList] = useState([]);
    const [name, setName] = useState("");
    const [iname, setIname] = useState("");
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
    const [web, setWeb] = useState("");
    const [selectedPicture, setSelectedPicture] = useState("");


      useEffect(() => {
        userData.then(
          (value) => {
            setuserList(value)
            // console.log(value);
            setName(value[0].name ? value[0].name : "");
            setIname(value[0].iname ? value[0].iname : "");
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
            setWeb(value[0].website ? value[0].website : "");
            setId(value[0].id);
            setSelectedPicture(value[0].photoURL? value[0].photoURL : "");
          },
          (reason) => {
            console.error(reason); // Error!
          }
        );
      }, []);

      function handleFileSelect(event) {
        const files = event.target.files;
        if (files.length > 0) {
          const fileNames = [];
          fileNames.push(files[0].name);
          setFileUploaded(true);
          setFileNames(fileNames);
          const iconDiv = document.getElementById('iconDiv');
          iconDiv.classList.add('hidden');
          setFileUpload(event.target.files[0])
          console.log(files)
        }
      }

      const handlePictureUpload = async (event) => {
        const imageFile = event.target.files[0];
      
        try {
          // Create a reference to the image in Firebase Storage
          const imageRef = ref(storage, `${userList[0].userId}/${imageFile.name}`);
          const imgLocRef = ref(storage, `UserImages/${userList[0].userId}/${imageFile.name}`);
      
          // Upload the image to Firebase Storage
          await uploadBytes(imgLocRef, imageFile);
      
          // Get the URL of the uploaded image
          const imageUrl = await getDownloadURL(imgLocRef);
          console.log("pfp success");
      
          // Save the URL of the image in the Firestore document
          await setDoc(doc(db, "users", userList[0].id), {
            photoURL: imageUrl
          }, { merge: true });
      
          setSelectedPicture(URL.createObjectURL(imageFile));
        } catch (error) {
          console.error("Error uploading picture:", error);
        }
      };
  
    const handleClick = () => {
      // Trigger the file input when the profile picture is clicked
      document.getElementById('profile-picture-input');
    };


      const updateUser = async (id) => {
        const userDoc = doc(db, "users", Id);
        console.log(phno,"this")
        await updateDoc(userDoc, { 
            City: city,
            iname: iname,
            Phoneno: phno,
            email:email,
            dob:dob,
            add1:add1,
            add2:add2,
            add3:add3,
            add4:add4,
            website:web,
            pin:pin,
            bio:bio,
            filepath:`GST/${name}/${fileName}`,
        });
        uploadFile();
      };

 

    const uploadFile = async () => {
      if (!fileUpload) return;
      const filesFolderRef = ref(storage, `GST/${name}/${fileUpload.name}`);
      try {
        await uploadBytes(filesFolderRef, fileUpload);
        console.log("file success");
        
      } catch (err) {
        console.error(err);
      }
    }


  return (
    <div className='flex  max-w-full ml-[17rem] rounded-xl flex-col bg-white mr-5 mb-5'>
      <div className='bg-[rgb(48,57,114)] h-[6rem] w-full rounded-t-xl justify-start flex flex-row gap-x-[35rem]'>
      <div className='h-[8rem] w-[8rem] rounded-full bg-white m-5 items-center justify-center flex z-0'>
      <label htmlFor='profile-picture-input'>
        { selectedPicture ? (
          <img
            src={selectedPicture}
            className='m-auto h-[7.2rem] w-[7.2rem] rounded-full bg-white cursor-pointer'
            alt='Profile Picture'
            onClick={handleClick}
          />
        ) : (
          <IoPersonCircleOutline className='m-auto h-[8rem] w-[8rem] rounded-full bg-white cursor-pointer' fill='#303972'/>
        )}
      </label>
      <input
        type='file'
        accept='image/*'
        id='profile-picture-input'
        onChange={handlePictureUpload}
        className='hidden'
      />
    </div>
        <div className='mb-0 flex relative'>
          <div className='w-[10rem] h-[5rem] rounded-b-full bg-[#FCC43E] transform rotate-180 !top-4 left-10 absolute z-10'></div>
          <div className='w-[8rem] h-[4rem] rounded-b-full bg-[#FB7D5B] transform rotate-180  !top-8   absolute z-0'></div>
        </div>
      </div>
      <div className='mt-[4rem] relative h-auto'>
        <div className='flex flex-row justify-between max-h-6 items-start'>
          <h2 className='font-bold text-dark-blue ml-5 text-2xl flex-initial'>{name}</h2>
          {/* <img src={edit} alt='edit' className='h-20 w-20 cursor-pointer mr-4' onClick={updateUser}/> */}
          <button className="inline-block text-sm px-6 py-3 mr-4 leading-none border rounded-full text-white bg-gray-800 hover:bg-gray-900 lg:mt-0 font-bold" onClick={updateUser}>Submit</button>
        </div>
        <h4 className='text-gray-500 ml-5 mt-2'>Admin</h4>
        <hr className='bg-black w-full mt-5'></hr>
        <div className='flex flex-wrap gap-44 ml-5 mt-2 gap-y-10'>
        <div className='grid grid-cols-4 gap-20'>

          <div className='col-start-1 col-end-2'>
            <label className='text-[#A098AE]'>Phone </label>
            <div className='flex flex-row gap-4 mt-3'>
              <BsFillTelephoneFill className='flex my-auto' fill='#FB7D5B' />              
              <input type="text" className="border h-12 border-gray-300 rounded w-full p-2 resize-none" 
              placeholder='Enter Phone number'
              value={phno}
              onChange={(e) => setPhno(e.target.value)}/>

            </div>
          </div>
          <div className='col-start-2 col-end-3'>
            <label className='text-[#A098AE]'>Email</label>
            <div className='flex flex-row gap-4 mt-3'>
              <MdEmail className='flex my-auto' fill='#FB7D5B ' size={20} />
              <input type="text" className="border h-12 border-gray-300 rounded w-full p-2" 
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>

            </div>
          </div>
          <div className='col-start-3 col-end-4'>
            <label className='text-[#A098AE]'>Website</label>
            <div className='flex flex-row gap-4 mt-3'>
              <MdEmail className='flex my-auto' fill='#FB7D5B ' size={20} />
              <input type="text" className="border h-12 border-gray-300 rounded w-full p-2" 
              placeholder='Enter Website url'
              value={web}
              onChange={(e) => setWeb(e.target.value)}/>

            </div>
          </div>
          </div>

          <hr className='bg-black w-full mt-5'></hr>

          <div className='grid grid-cols-4 gap-20'>
          
          <div className='col-start-1 col-end-2'>
            <label className='text-[#A098AE]'>Industry</label>
            
            <div className='flex flex-row gap-4 mt-3'>
              <GrLocation className='flex my-auto' fill='FB7D5B' />
              <input type="text" className="border h-12 border-gray-300 rounded w-full p-2 resize-none" 
              placeholder='Enter Industry Name'
              value={iname}
              onChange={(e) => setCity(e.target.value)}
              />

            </div>
          </div>
        

           <div className='col-start-2 col-end-3'>
                <label className='text-[#A098AE]'>Registration Certificate</label>
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

              <div className='col-start-3 '>
              
                <label className='text-[#A098AE]'>GST Certificate
                <div id="iconDiv" className='flex flex-row gap-4 mt-3 relative'>
                <div class='h-12 w-[15rem] rounded-lg border border-dotted border-gray-400 bg-transparent flex items-center justify-center'> 
                 
                   {fileUploaded ? (
                <div className="flex flex-wrap justify-center gap-2 py-4">
                  <p className="text-gray-400 flex justify-center">{fileName}</p>
                </div>
              ) : null}
               <input type="file" id="doc" name="doc" hidden onChange={handleFileSelect}/>
               <span class='text-gray-400'>Click here to Upload</span>
               </div>
               </div>
              </label>
             
                  
                   
                  </div>
               

          <div className='col-start-4 '>
            <label className='text-[#A098AE]'>Office Address</label>
            <div className='flex flex-row gap-4 mt-3'>
            <GrLocation className='flex my-auto' fill='FB7D5B' />
              <input type="text" className="border h-12 border-gray-300 rounded w-full p-2" 
              placeholder='Enter Address'
              value={add1}
              onChange={(e) => setAdd1(e.target.value)}/>

            </div>
          </div>
       

          </div>
          <hr className='bg-black w-full mt-5'></hr>
          
          <div className='grid grid-cols-4 gap-10'>
               
          <label className='text-[#A098AE]'>Company Description</label>
                <div className='col-start-1 col-end-5'> 
                    <input type="text" className="border  h-24 w-full border-gray-300 rounded  p-2" 
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}/>
                </div>
            </div>
          </div>
        </div>
        <hr className='bg-black w-full mt-5'></hr>
      </div>
   
  )
}

export default EditProfilecard