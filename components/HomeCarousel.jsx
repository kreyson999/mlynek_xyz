import Image from "next/image";
import React, { useState, useEffect, useRef, useCallback } from 'react';


const CarouselItem = ({image, color}) => {
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
          alt="Laptop Design"
          className="object-contain"
        />
      </div>
    </div>
  );
}

const HomeCarousel = () => {
  // const [carouselLeft, setCarouselLeft] = useState(0)
  // const [isIntersecting, setIsIntersecting] = useState(true)
  // const [lastScroll, setLastScroll] = useState(0)
  // const carouselRef = useRef(null)

  // const handleChangingIntersection = (entries) => {
  //   const [ entry ] = entries
  //   setIsIntersecting(entry.isIntersecting)
  // } 

  // const handleScrolling = useCallback((e) => {
  //   if (isIntersecting) {
  //     const newScroll = window.pageYOffset;
  //     if (lastScroll > newScroll) {
  //       setCarouselLeft(state => state - 1)
  //       setLastScroll(newScroll)
  //     } else {
  //       setCarouselLeft(state => state + 1)
  //       setLastScroll(newScroll)
  //     }
  //   }
  // }, [isIntersecting, lastScroll])

  // useEffect(() => {
  //   const ref = carouselRef.current

  //   const observerOptions = {
  //     threshold: 0,
  //   }
  //   const observer = new IntersectionObserver(handleChangingIntersection, observerOptions)

  //   window.addEventListener('scroll', handleScrolling)

  //   if (carouselRef.current) {
  //     observer.observe(carouselRef.current)
  //   } 
    
  //   return () => {
  //     window.removeEventListener('scroll', handleScrolling)
  //     observer.unobserve(ref)
  //   }
  // }, [handleScrolling])

  return (
    <div className="max-w-screen overflow-hidden">
      <div 
      style={{
        left: `50%`,
        transform: 'translateX(-50%)',
      }}
      className="max-w-screen-lg xl:max-w-screen-xl px-12 sm:px-0 2xl:max-w-screen-2xl grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 xl:gap-8 relative">
        <CarouselItem image={'/images/laptop.png'} color={'#F7E64E'}/>
        <CarouselItem image={'/images/pc.png'} color={'#4EF75F'}/>
        <CarouselItem image={'/images/mobile.png'} color={'#F74E4E'}/>
      </div>
    </div>
  );
}
 
export default HomeCarousel;