import Image from 'next/image';
import React, { useState } from 'react'

export const CarouselItem = ({image, color, width}) => {
  return (
    <div className={`mr-6 relative aspect-video inline-flex items-center justify-center rounded-xl ${color}`} style={{width: width}}>
      <Image
      src={image}
      alt='Kjmm website'
      layout='fill'
      className='object-contain'
      />
    </div>
  );
}

const Carousel = ({children}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangingSlide = (side) => {
    if(!Array.isArray(children)) return
    if (side === 'right' && currentIndex !== children.length - 1) {
      setCurrentIndex(state => state + 1)
    }
    else if (side === 'left' && currentIndex !== 0) {
      setCurrentIndex(state => state - 1)
    }
  }

  return (
    <>
      <div 
      className="relative max-w-screen overflow-hidden">
        <div className='absolute top-0 left-0 bottom-0 right-0 flex z-10'>
          <button onClick={() => handleChangingSlide('left')} className='w-full opacity-60 focus:outline-0'></button>
          <button onClick={() => handleChangingSlide('right')} className='w-full opacity-60 focus:outline-0'></button>
        </div>
        <div className="px-6 mx-auto max-w-screen-md">
          <div 
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 1.5}rem))`,
          }}
          className="whitespace-nowrap duration-500">
            {React.Children.map(children, (child, index) => {
              return React.cloneElement(child, { width: "100%"});
            })}
          </div>
        </div>
      </div>
      <div className='flex justify-center space-x-2'>
        <button className='rounded-full' onClick={() => handleChangingSlide('left')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1A6BE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>
        </button>
        <button className='rounded-full'   onClick={() => handleChangingSlide('right')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1A6BE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        </button>
      </div>
    </>
  );
}
 
export default Carousel;