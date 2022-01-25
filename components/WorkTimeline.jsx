import Image from 'next/image'
import { useEffect, useState, useRef, useMemo } from 'react';

const TimelineCard = ({active, isClient, text, gridStyles, icon = '/icons/timeline/mail-lightblue.svg'}) => {
  return ( 
    <div 
      style={{
        boxShadow: `0px 0px 20px #073A8559`,
        background: active ? '#1A6BE344' : 'transparent',
      }}
      className={`timelineItem relative duration-500 overflow-hidden col-span-3 xl:col-span-2 w-full px-4 py-4 rounded-xl border-2 border-blue-light ${gridStyles} `}>
      <h3 className="font-extrabold text-xl xl:text-2xl mb-1 uppercase">{isClient ? 'Klient' : 'Ja'}</h3>
      <p className='text-md xl:text-lg w-5/6'>
        {text}
      </p>
      <div className='absolute -bottom-3 -right-3 grid bg-white place-content-center p-4 border-2 border-blue-light rounded-full'
      style={{
        boxShadow: `0px 0px 20px #073A8559`
      }}
      >
        <Image
        src={icon}
        alt='isClient'
        width={32}
        height={32}
        />
      </div>
    </div>
  );
}

const WorkTimeline = () => {
  const [currentPosition, setCurrentPosition] = useState(0) 
  const [activeIndex, setActiveIndex] = useState(-1) 
  const [isTimelineIntersecting, setIsTimelineIntersecting] = useState(false) 
  const timelineBarRef = useRef(null)
  
  const observerCallback = (entries) => {
    const [ entry ] = entries
    setIsTimelineIntersecting(entry.isIntersecting)
  }

  const observerOptions = useMemo(() => {
    return {
      threshold: 0.1
    }
  }, [])


  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const observerTarget = timelineBarRef.current
    if (observerTarget) observer.observe(observerTarget)

    const getScrollingPercent = () => {
      if(observerTarget) {
        if (!isTimelineIntersecting) return
        console.log('is intersecting')
        const pos = observerTarget.getBoundingClientRect()

        /* substract half of the screen height from height of the element, 
        add the current y position and divide it by height of the element to get percentage */
        const percentage = Math.floor(((pos.y + (pos.height - (window.innerHeight / 2))) / pos.height) * 100)
        
        // check if the percentage is between 0 and 100 and change state
        if (percentage <= 100 && percentage > -1) {
          setActiveIndex(Math.floor(4.99 - (percentage / 20)))
          setCurrentPosition(100 - percentage)
        }
      }
    }

    document.addEventListener('scroll', getScrollingPercent)
    return () => {
      document.removeEventListener('scroll', getScrollingPercent)
      if (observerTarget) observer.unobserve(observerTarget)
    }
  })

  return (
    <div className="relative grid grid-cols-4 md:grid-cols-7 xl:grid-cols-5 grid-rows-5 gap-y-4 md:gap-y-0">
      <div className="relative col-start-1 md:col-start-4 xl:col-start-3 row-span-5 flex justify-center">
        <div 
        ref={timelineBarRef}
        className="relative w-3 h-full"
        style={{
          background: `#1a6be333`,
        }}
        >
          <div 
          style={{
            height: `${currentPosition}%`,
          }}
          className='absolute top-0 bg-blue-light w-full duration-300 ease-linear'>
          </div>
        </div>
      </div>
      <TimelineCard 
        active={activeIndex === 0}
        isClient={true} 
        text={`
          Opisuję najważniejsze informacje co do wyglądu oraz funkcjonalności strony internetowej.
        `}
        gridStyles={`col-start-2 md:col-start-5  xl:col-start-4`}
      />
      <TimelineCard 
        active={activeIndex === 1}
        isClient={false} 
        text={`
          Projektuję wygląd strony starając jak najbardziej dopasować go do opisu klienta.
          Wybieram najlepsze technologie dla danej strony.
        `}
        gridStyles={`col-start-2 md:col-start-1`}
        icon='/icons/timeline/monitor.svg'
      />
      <TimelineCard 
        active={activeIndex === 2}
        isClient={true} 
        text={`
          Akceptuje wykonany przeze mnie prototyp, ewentualnie wypisuje rzeczy, które mu się nie spodobały.
        `}
        gridStyles={`col-start-2 md:col-start-5 xl:col-start-4 row-start-3`}
      />
      <TimelineCard
        active={activeIndex === 3} 
        isClient={false} 
        text={`
          Zaczynam programować stronę internetową. Zwracam szczególną uwagę na wydajność strony oraz doświadczenia użytkowników.
          Po skończeniu wysyłam demo do klienta.
        `}
        gridStyles={`col-start-2 md:col-start-1 row-start-4`}
        icon='/icons/timeline/eye.svg'
      />
      <TimelineCard
        active={activeIndex === 4} 
        isClient={true} 
        text={`
          Potwierdza spełnienie jego oczekiwań. Płaci za usługę. 
          Razem wybieramy najlepszą opcję wstawienia strony do sieci (konfiguracja hostingu, domeny, CMS).
        `}
        gridStyles={`col-start-2 md:col-start-5 xl:col-start-4 row-start-5`}
      />
    </div>
  );
}
 
export default WorkTimeline;