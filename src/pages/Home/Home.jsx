import React from 'react';
import imgMain from '../../assets/images/home-img.png';
import img1 from '../../assets/images/home-img1.png';
import img2 from '../../assets/images/home-img2.png';
import img3 from '../../assets/images/home-img3.png';
import Footer from '../../Components/Footer';
import CardComponent from './Card';
import TestimonialsCarousel from './Carousel';


const Home = () => {
  const demoText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dicta quae eius placeat minima, eos, eum quia expedita et saepe perferendis sint necessitatibus ullam similique porro minus illum ab. Dolore!';

    const cardData = [
      {
        image: img1,
        title: "COURSES",
        text: demoText,
      },
      {
        image: img2,
        title: "MEMBERSHIP",
        text: demoText,
      },
      {
        image: imgMain,
        title: "SUPPORT",
        text: demoText,
      },
    ];


  return (
    <>
      <div className="w-screen absolute bg-[#e4f3fb] flex flex-col top-0 gap-14 left-0 py-10 px-10 md:px-20 justify-center items-center overflow-hidden">
        <div className="flex flex-col justify-center items-center mt-10 md:mt-32">
          <h1 className="text-[#66676b] font-normal text-2xl md:text-[58px] py-5 md:py-10">
            Welcome to
          </h1>
          <h1 className="text-[#01abef] md:text-[58px] font-bold text-2xl">
            Bahasa School
          </h1>
        </div>

        <div className="">
          <img src={img3} className="" alt="Main" />
        </div>

        <div className="text-center text-[#66676b] text-lg font-normal px-10 md:px-80">
          <p>{demoText}</p>
        </div>

        {/* Cards section */}
        <div className="w-full md:w-auto md:flex md:flex-row flex-col md:gap-10 justify-center items-center mb-20 md:mb-32 hidden ">
          <div className="flex flex-nowrap overflow-x-auto scrollbar-hide md:flex-row gap-5 w-full">
  {cardData.map((card, index) => (
    <div key={index} className="flex-none w-80">
      <CardComponent image={card.image} title={card.title} text={card.text} />
    </div>


  ))}
</div>
        </div>
        <div className='md:hidden'>

      <TestimonialsCarousel cardData={cardData} />
    </div>


      </div>

      <Footer />
    </>
  );
};

export default Home;
