import React from 'react';
import { FooterIcon } from '../assets/svgIcons';

const Footer = () => {
  return (
    <div className="w-screen md:px-20 py-3 md:py-5 bg-[#0f3d82] absolute bottom-0 left-0 justify-center md:justify-between md:gap-1 inline-flex items-center
     text-[10px] md:text-lg text-white ">

      <div className='hidden md:flex'>
      <FooterIcon/>
        <span className="text-white  font-normal ml-5">
          © Copyrights by&nbsp;
        </span>
        <span className="text-white  font-bold ">
         Bahasa School
        </span>
        <span className="text-white font-normal ">
          . All Rights Reserved.
        </span>
      </div>
      <div className='md:hidden'>
        <p  className=" "> © Copyrights by Bahasa School. All Rights Reserved.  </p>
      </div>
      <div className='hidden md:flex'>
        Terms and Conditions
     </div>
    </div>
  );
};

export default Footer;
