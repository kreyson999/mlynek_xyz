import Image from 'next/image'
import { useEffect, useState, useRef, useMemo } from 'react';
import throttle from 'lodash.throttle';
import LocaleContext from '../locales/localeContext'
import { useContext } from 'react';

const TimelineCard = ({active, isClient, text, gridStyles, icon = '/icons/timeline/mail-lightblue.svg'}) => {
  const t = useContext(LocaleContext)
  return ( 
    <div 
      style={{
        boxShadow: `0px 0px 20px #073A8559`,
        background: active ? '#1A6BE337' : 'transparent',
      }}
      className={`timelineItem relative duration-500 overflow-hidden col-span-3 xl:col-span-2 w-full px-4 py-4 rounded-xl border-2 border-blue-light ${gridStyles} `}>
      <h3 className="font-extrabold text-xl xl:text-2xl mb-1 uppercase">{isClient ? t.home.sections.howIDeliver.workTimeline.client : t.home.sections.howIDeliver.workTimeline.me}</h3>
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
  const t = useContext(LocaleContext)

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

    const setScrollingPercent = () => {
      if(observerTarget) {
        if (!isTimelineIntersecting) return
        const pos = observerTarget.getBoundingClientRect()

        /* substract half of the screen height from height of the element, 
        add the current y position and divide it by height of the element to get percentage */
        const percent = Math.floor(((pos.y + (pos.height - (window.innerHeight / 2))) / pos.height) * 100)
        
        // check if the percent is between 0 and 100 and change state
        if (percent <= 100 && percent > -1) {
          setActiveIndex(Math.floor(4.99 - (percent / 20)))
          setCurrentPosition(100 - percent)
        }
      }
    }

    document.addEventListener('scroll', throttle(setScrollingPercent, 100))
    return () => {
      document.removeEventListener('scroll', throttle(setScrollingPercent, 100))
      if (observerTarget) observer.unobserve(observerTarget)
    }
  }, [isTimelineIntersecting, observerOptions])

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
          <div 
          style={{
            top: -1,
            left: '50%',
            transform: 'translateX(-50%)'
          }}
          className='w-6 h-6 absolute bg-white border-2 border-blue-dark rounded-full'>
          </div>
          <div 
          style={{
            bottom: -1,
            left: '50%',
            transform: 'translateX(-50%)'
          }}
          className='w-6 h-6 absolute bg-white border-2 border-blue-dark rounded-full'>
          </div>
        </div>
      </div>
      <TimelineCard 
        active={activeIndex === 0}
        isClient={true} 
        text={t.home.sections.howIDeliver.workTimeline.items[0]}
        gridStyles={`col-start-2 md:col-start-5  xl:col-start-4`}
      />
      <TimelineCard 
        active={activeIndex === 1}
        isClient={false} 
        text={t.home.sections.howIDeliver.workTimeline.items[1]}
        gridStyles={`col-start-2 md:col-start-1`}
        icon='/icons/timeline/monitor.svg'
      />
      <TimelineCard 
        active={activeIndex === 2}
        isClient={true} 
        text={t.home.sections.howIDeliver.workTimeline.items[2]}
        gridStyles={`col-start-2 md:col-start-5 xl:col-start-4 row-start-3`}
      />
      <TimelineCard
        active={activeIndex === 3} 
        isClient={false} 
        text={t.home.sections.howIDeliver.workTimeline.items[3]}
        gridStyles={`col-start-2 md:col-start-1 row-start-4`}
        icon='/icons/timeline/eye.svg'
      />
      <TimelineCard
        active={activeIndex === 4} 
        isClient={true} 
        text={t.home.sections.howIDeliver.workTimeline.items[4]}
        gridStyles={`col-start-2 md:col-start-5 xl:col-start-4 row-start-5`}
      />
    </div>
  );
}
 
export default WorkTimeline;