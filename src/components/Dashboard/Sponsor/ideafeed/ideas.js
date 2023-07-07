import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { ideasData } from '../../../../data/Userdata';
import { OptionsContext } from '../../../../context/optionContext';
import '../../../../index.css';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { MdArrowLeft, MdArrowRight} from 'react-icons/md';

function SkeletonLoader() {
  return (
    <div className="animate-pulse bg-gray-200 h-5 w-3/4 mr-4 mb-2 rounded-md"></div>
  );
}

function Ideas() {
  const { selectedOptions } = useContext(OptionsContext);

  const [likedIndexes, setLikedIndexes] = useState([]);
  const [ideaList, setIdeaList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState([]);

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 7 ; // Replace with your desired number

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

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
  // console.log(filteredData)

  const handleLike = (index) => {
    const newLikedIndexes = [...likedIndexes];

    if (newLikedIndexes.includes(index)) {
      // Unlike if already liked
      const indexToRemove = newLikedIndexes.indexOf(index);
      newLikedIndexes.splice(indexToRemove, 1);
    } else {
      // Like if not already liked
      newLikedIndexes.push(index);
    }

    setLikedIndexes(newLikedIndexes);
  };

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
      {filteredData &&
        filteredData
          .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
          .map((idea, index) => (
<React.Fragment key={index}>
  <hr />
  <div className='flex flex-row mb-3'>
    <div className='bg-[#C1BBEB] rounded-lg h-full w-1/5 cursor-pointer' onClick={() => handleViewIdea(idea)}></div>
    <div className='flex flex-col w-1/2 mt-3 cursor-pointer' onClick={() => handleViewIdea(idea)}>
      <h1 className='font-bold text-[#303972]'>
        {loading ? <SkeletonLoader /> : idea.title}
      </h1>
      <p className='line-clamp text-[#A098AE] text-sm mt-3'>
        {loading ? <SkeletonLoader /> : idea.Solution}
      </p>
    </div>
    <div className='flex flex-col gap-y-3 mt-3 ml-10 cursor-pointer'>
      {Array.isArray(idea.category) ? (
        idea.category.map((category, index) => (
          <p
            key={index}
            className='bg-[#C1BBEB] rounded-2xl min-w-content min-h-content px-3 py-1 text-xs flex mx-auto text-[#303972]'
          >
            {category}
          </p>
        ))
      ) : (
        <SkeletonLoader />
      )}
    </div>
    <div className='ml-auto mr-10 h-full justify-center items-center flex mt-10 cursor-pointer'>
      {likedIndexes.includes(index) ? (
        <AiFillHeart size={30} onClick={() => handleLike(index)} fill='red' />
      ) : (
        <AiOutlineHeart size={30} onClick={() => handleLike(index)} />
      )}
    </div>
  </div>
</React.Fragment>

          ))}
                        <hr />
              <div className='flex justify-end align-center my-8'>
                {/* <div className='bg-[#C1BBEB] rounded-lg h-full w-1/5 cursor-pointer' ></div> */}

                {/* <div className='flex flex-col gap-y-3 mt-3 ml-10 cursor-pointer'> */}
                <ReactPaginate
                pageCount={Math.ceil(filteredData.length / itemsPerPage)}
                pageRangeDisplayed={3} // Number of page links to display
                marginPagesDisplayed={1} // Number of page links to display for margins
                onPageChange={handlePageChange}
                containerClassName={'pagination flex justify-end align-center  gap-7  mr-2'}
                activeClassName={'active bg-blue-800 rounded-full text-white '}
                pageClassName={'inline-block '}
                pageLinkClassName={'!p-3  rounded-full '}
                previousLabel={<MdArrowLeft size={30}/>}
                nextLabel={<MdArrowRight size={30}/>}
                
                />

                {/* </div> */}
                
              </div>
              
      {/* Render the pagination component */}

    </div>
  );
}

export default Ideas;
