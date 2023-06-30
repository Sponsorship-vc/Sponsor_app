import React from 'react';

const Card = (props) => {
  return (
    <div className="rounded-xl w-64 bg-[#F8F8F8] bg-opacity-50 border-2 hover:shadow-xl p-4 -mx-4 mb-4  focus:shadow-3xl h-min">
      <h5 className="mb-3 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-black font-abc">
        {props.title}
      </h5>
      <div className="aspect-w-16 aspect-h-9 max-w-full bg-[#F8F8F8] hover:bg-gray-100 border-gray-200 rounded-lg  ">
        <img className="object-cover rounded-lg" src={props.img} alt="hi" />
      </div>
      <button className="w-full my-5 py-2 bg-[#1D263A] hover:bg-[#2C3A4D] text-white font-bold rounded-md">
        {props.button}
      </button>
    </div>
  );
};

export default Card;
