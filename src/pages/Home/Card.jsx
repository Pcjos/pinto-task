import React from 'react';

const CardComponent = ({ image, title, text }) => {
  return (
    <div className=" flex flex-col justify-center gap-2 items-center hover:bg-[#01abef] bg-white pb-10 hover:text-white text-[#01abef] w-[300px]">
    <img src={image} className='h-[200px] w-full'></img>

    <h1 className="text-[28px] font-semibold "> {title} </h1>
    <p className="text-sm font-normal px-2 ">
     {text}
    </p>
  </div>
  );
};

export default CardComponent;
