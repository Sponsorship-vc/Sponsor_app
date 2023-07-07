import React ,{ useEffect, useState } from 'react';
import { ideasData } from '../../data/Userdata'

function Category() {
  const [IdeaList ,setIdeaList] = useState('')
  const colors=['1787FC', 'FDDC70', 'FF794D', '20BFA9', '9447F5', 'A98A6C', 'C4D944' , 'FF4DC2']
  
  useEffect(() => {
    ideasData
      .then((value) => {
        setIdeaList(value);
      })
      .catch((reason) => {
        console.error(reason);
      });
  }, []);
  
  const countCategories = (data) => {
    const categoryCount = {};
  
    data.forEach((item) => {
      if (item.category && Array.isArray(item.category)) {
        item.category.forEach((category) => {
          categoryCount[category] = (categoryCount[category] || 0) + 1;
        });
      }
    });
  
    return categoryCount;
  };
  
  const findCategoriesInOrder = (data) => {
    const categoryCount = countCategories(data);
  
    const categoriesInOrder = Object.keys(categoryCount).sort((a, b) => {
      return categoryCount[b] - categoryCount[a];
    }).map((category) => ({
      category,
      count: categoryCount[category]
    }));
  
    return categoriesInOrder;
  };
  
  let categoriesInOrder = [];
  if (IdeaList.length > 0) {
    categoriesInOrder = findCategoriesInOrder(IdeaList);
  }
  
  return (
    <div className='flex h-full w-full'>
        <div className='mx-[11%] mt-36 h-full w-full'>
            <div className='flex justify-between gap-30 md:gap-[27%]'>
                <p className='flex-1 font-bold text-dark-blue text-4xl'>Explore Ideas by Category </p>
                <p className='flex-1 text-right'>Get the most exciting ideas from all around the world and show your contribution</p>
                
            </div>
            <div className='flex flex-wrap pt-16 gap-[4%] gap-y-10 justify-center'>
            {categoriesInOrder && categoriesInOrder.slice(0, 8).map((idea, index) => (
              <div className="w-[260px] h-[110px] bg-white shadow flex flex-row " key={index}>
                <div className='w-1/3 h-full flex flex-col justify-center items-center mx-auto'>
                <div className='w-6 h-6 rounded ' style={{ backgroundColor: `#${colors[index % colors.length]}` }}></div>
                </div>

                <div className='flex flex-col flex-1 gap-2 h-full justify-center'>
                  <p className="font-bold capitalize">{idea.category}</p>
                  <p className="text-gray-500">{idea.count} Ideas</p>
                </div>
              </div>
              ))}
            </div>
            <h2 className='text-bold py-10 text-right'>View all Categories</h2>
        </div>
    </div>
  )
}

export default Category
