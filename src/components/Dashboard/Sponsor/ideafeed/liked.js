import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { ideasData, getideasList } from '../../../../data/Userdata';
import { OptionsContext, } from '../../../../context/optionContext';
// import '../../../../index.css';
import { useNavigate } from 'react-router-dom';
import { userData } from '../../../../data/Userdata';
import { AuthContext } from '../../../../context/AuthContext';
import ReactPaginate from 'react-paginate';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import { auth,db } from '../../../../firebase/config';
import { updateDoc,doc } from 'firebase/firestore';

function SkeletonLoader() {
  return (
    <div className="animate-pulse bg-gray-200 h-5 w-3/4 mr-4 mb-2 rounded-md"></div>
  );
}

function LikedIdeas() {
  const { selectedOptions } = useContext(OptionsContext);
  const [userList, setuserList] = useState([]);
  const [likedIndexes, setLikedIndexes] = useState([]);
  const [ideaList, setIdeaList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  let filteredIdea
  const [loading, setLoading] = useState([]);

  const navigate = useNavigate();
  const currentUser = useContext(AuthContext)

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
  useEffect(() => {
    // Check a condition, for example, a URL parameter or some state value
    const shouldReload = true; // You can replace this with your condition

    if (localStorage.getItem('reload') == "true") {
    localStorage.setItem("reload", false)
      window.location.reload();
    }
  }, []);
//   useEffect(()=>{

//   window.location.reload();
//   },[1])

//   useEffect(() => {
//     getideasList()
//   }, [])

  useEffect(()=>{
    userData.then(
      (value) => {
        setuserList(value[0]);
      },
      (reason) => {
        console.error(reason);
      }
    );
  },[userData])

  useEffect(() => {
    ideasData
      .then((value) => {
        setIdeaList(value);        
      })
      .catch((reason) => {
        console.error(reason);
      });
  }, []);


  const handleViewIdea = (idea) => {
    navigate(`/dashboard/sponsor/ideafeed/viewidea/${idea.id}`);
  };

  useEffect(() => {
    let isTimerExpired = false;
    let isDataLoaded = false;

    const checkLoadingState = () => {
      if (isTimerExpired && isDataLoaded) {
        setLoading(false);
      }
    };

    if (ideaList) {
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

  useEffect(()=>{
    console.log(userList)
    if(userList.likelist){
    //     filteredIdea = userList?.filter((user) =>
    //   user.likelist.some((id) => ideaList.includes(id))
    //   );
    filteredIdea = ideaList.filter(idea => userList.likelist.includes(idea.id))
    setFilteredData(filteredIdea)
    console.log(filteredIdea)
    }
},[userList.likelist])
//   console.log(userList[0])
//   console.log(filteredData)

  return (
    <div className='h-full w-full ml-64 bg-white px-4 mr-5 rounded-xl'>
      <div className='flex flex-row mt-10 mb-7'>
        <h2 className='text-[#303972] font-bold flex-initial ml-5'>Idea brief</h2>
        <div className='text-[#303972] font-bold flex flex-row gap-10 ml-auto mr-6'>
          <h2>Categories</h2>
          <h2>Action</h2>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        {filteredData &&
          filteredData
            .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            .map((idea, index) => (
              <div
                key={index}
                className='bg-white rounded-lg border p-4 cursor-pointer space-y-3 flex flex-col justify-between w-[80%] ml-7'
                onClick={() => handleViewIdea(idea)}
              >
                {idea.filepath && idea.filepath.endsWith('.pdf') ? (
                  <object
                    data={idea.filepath}
                    type='application/pdf'
                    className='bg-[#C1BBEB] rounded-lg h-16'
                  >
                    <p>This browser does not support PDFs. Please download the PDF to view it.</p>
                  </object>
                ) : idea.filepath && idea.filepath.match(/\.(jpeg|jpg|gif|png)$/) ? (
                  <img
                    src={idea.filepath}
                    alt='Idea Preview'
                    className='bg-[#C1BBEB] rounded-lg h-16'
                  />
                ) : (
                  <div className='bg-[#C1BBEB] rounded-lg h-16'></div>
                )}

                <div>
                  <h1 className='font-bold text-[#303972]'>
                    {loading ? <SkeletonLoader /> : idea.title}
                  </h1>
                  <p className='line-clamp text-[#A098AE] text-sm'>
                    {loading ? <SkeletonLoader /> : idea.Solution}
                  </p>
                </div>
                <div className='flex flex-wrap gap-y-2 gap-x-1'>
                  {Array.isArray(idea.category) && !loading ? (
                    idea.category.map((category, index) => (
                      <p
                        key={index}
                        className='bg-[#C1BBEB] rounded-2xl px-3 py-1 text-xs text-[#303972]'
                      >
                        {category}
                      </p>
                    ))
                  ) : (
                    <SkeletonLoader />
                  )}
                </div>
            
              </div>
            ))}
      </div>
      <hr />
      <div className='flex justify-end align-center my-8'>
        <ReactPaginate
          pageCount={Math.ceil(filteredData.length / itemsPerPage)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={handlePageChange}
          containerClassName={'pagination flex justify-end align-center gap-7  mr-2'}
          activeClassName={'active bg-blue-800 rounded-full text-white '}
          pageClassName={'inline-block '}
          pageLinkClassName={'!p-3  rounded-full '}
          previousLabel={<MdArrowLeft size={30} />}
          nextLabel={<MdArrowRight size={30} />}
        />
      </div>
    </div>
  );
}

export default LikedIdeas;
