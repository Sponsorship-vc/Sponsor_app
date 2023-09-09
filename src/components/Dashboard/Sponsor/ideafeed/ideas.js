import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { ideasData } from '../../../../data/Userdata';
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

function Ideas() {
  const { selectedOptions } = useContext(OptionsContext);
  const [userList, setuserList] = useState([]);
  const [likedIndexes, setLikedIndexes] = useState([]);
  const [ideaList, setIdeaList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState([]);

  const navigate = useNavigate();
  const currentUser = useContext(AuthContext)

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  useEffect(()=>{
    userData.then(
      (value) => {
        setuserList(value);
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

  useEffect(() => {
    const filteredData = Object.values(ideaList).filter((idea) => {
      const ideaCategories = Array.isArray(idea.category) ? idea.category.map((category) => category.toLowerCase()) : [];
      const lowerCaseSelectedIndustry = selectedOptions.Industry ? selectedOptions.Industry.map((option) => option.toLowerCase()) : [];
      const lowerCaseSelectedIdeaType = selectedOptions['Idea type'] ? selectedOptions['Idea type'].map((option) => option.toLowerCase()) : [];
      const lowerCaseSelecteddevStage = selectedOptions['Stage of development'] ? selectedOptions['Stage of development'].map((option) => option.toLowerCase()) : [];

      return (
        (lowerCaseSelectedIndustry.length === 0 || lowerCaseSelectedIndustry.every((option) => ideaCategories.includes(option))) &&
        (lowerCaseSelectedIdeaType.length === 0 || (idea.ideaType && lowerCaseSelectedIdeaType.some((option) => idea.ideaType.toLowerCase().includes(option)))) &&
        (lowerCaseSelecteddevStage.length === 0 || (idea.devStage && lowerCaseSelecteddevStage.some((option) => idea.devStage.toLowerCase().includes(option))))
      );
    });

    setFilteredData(filteredData);
  }, [selectedOptions, ideaList]);

  // const handleLike = (index, idea) => {
  //   try {
  //     const ideaId = idea.id;
  //     const newLikedIdeas = userList && userList[0] && userList[0].likedIdeas ? [...userList[0].likedIdeas] : [];
  //     const newLikedIndexes = [...likedIndexes];
  //     console.log(index)
  
  //     console.log("Idea ID:", ideaId);
  //     console.log("newLikedIdeas:", newLikedIdeas);

  //     console.log("newLikedIndexes:", newLikedIndexes);
  
  //     // Check if `index` is a valid numeric value
  //     if (typeof index === 'number' && isFinite(index)) {
  //       const indexToRemoveFromIndexes = newLikedIndexes.indexOf(index);
  //       console.log("Index to Remove from Indexes:", indexToRemoveFromIndexes);
  //       if (indexToRemoveFromIndexes !== -1) {
  //         newLikedIndexes.splice(indexToRemoveFromIndexes, 1);
  //       }
  //     } else {
  //       console.error("Invalid index:", index);
  //     }
  
  //     if (newLikedIdeas.includes(ideaId)) {
  //       const indexToRemove = newLikedIdeas.indexOf(ideaId);
  //       console.log("Index to Remove:", indexToRemove);
  //       if (indexToRemove !== -1) {
  //         newLikedIdeas.splice(indexToRemove, 1);
  //       }
  //     } else {
  //       newLikedIdeas.push(ideaId);
  //       newLikedIndexes.push(index);
  //       setLikedIndexes(newLikedIndexes)
  //     }
  
  //     // console.log("Updated newLikedIdeas:", newLikedIdeas);
  //     // console.log("Updated newLikedIndexes:", newLikedIndexes);
  
  //     const userDocRef = doc(db, "users", userList[0].id);
  //     updateDoc(userDocRef, { likedIdeas: newLikedIdeas })
  //       .then(() => {
  //         console.log("User document updated successfully");
  //         setLikedIndexes(newLikedIndexes);
  //       })
  //       .catch((error) => {
  //         console.error("Error updating user document: ", error);
  //       });
  //   } catch (error) {
  //     console.error("Error in handleLike: ", error);
  //   }
  // };
  
  
  

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

  return (
    <div className='h-full w-full bg-white ml-auto mr-5 rounded-xl'>
      <div className='flex flex-row mt-10 mb-7'>
        <h2 className='text-[#303972] font-bold flex-initial ml-5'>Idea brief</h2>
        <div className='text-[#303972] font-bold flex flex-row gap-10 ml-auto mr-6'>
          <h2>Categories</h2>
          <h2>Action</h2>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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
                {/* <div className='flex justify-center items-end'>
                  {likedIndexes.includes(index) ? (
                    <AiFillHeart
                      size={30}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent click event from propagating to the parent container
                        handleLike(index, idea);
                      }}
                      fill='red'
                    />
                  ) : (
                    <AiOutlineHeart
                      size={30}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent click event from propagating to the parent container
                        handleLike(index, idea);
                      }}
                    />
                  )}
                </div> */}
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

export default Ideas;
