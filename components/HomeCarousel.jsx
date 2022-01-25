import Image from "next/image";
import React from 'react';


const CarouselItem = ({image, color, alt}) => {
  return (
    <div 
      className="md:w-unset aspect-video rounded-xl py-4" 
      style={{
        background: color,
        boxShadow: `0px 0px 20px ${color}59`
      }}>
      <div className="relative w-full h-full">
          <Image
          src={image}
          layout="fill"
          alt={alt}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}

const HomeCarousel = () => {

  return (
    <div className="max-w-screen overflow-hidden">
      <div 
      style={{
        left: `50%`,
        transform: 'translateX(-50%)',
      }}
      className="max-w-screen-lg xl:max-w-screen-xl px-12 sm:px-0 2xl:max-w-screen-2xl grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 xl:gap-8 relative">
        <CarouselItem image={'/images/shop_laptop.png'} color={'#F7E64E'} alt={'Wygląd strony internetowej na laptopie'}/>
        <CarouselItem image={'/images/kjmm_desktop.png'} color={'#4EF75F'} alt={'Wygląd strony internetowej na komputerze'}/>
        <CarouselItem image={'/images/shop_mobile.png'} color={'#F74E4E'} alt={'Wygląd strony internetowej na telefonie'}/>
      </div>
    </div>
  );
}
 
export default HomeCarousel;