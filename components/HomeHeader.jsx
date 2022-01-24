import { ContactButton, CTAButton } from '../components'

const HomeHeader = () => {
  return (
    <>
      <header className="container mx-auto px-6 py-12 md:py-16 xl:py-20 space-y-4 md:space-y-6 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-extrabold text-center uppercase text-custom-black">
          Wydajność strony
          <br/>
          to nasza specjalność.
        </h1>
        <p className="text-center text-base lg:text-lg xl:text-xl max-w-xl text-custom-black">
          Wybierając nas masz 100% szansy
          {""} na to, że otrzymasz stronę internetową, która zapewni
          Twoim klientom {""}
          <span className="relative whitespace-nowrap">
            niesamowite doświadczenia
            <svg id='animate-length' className="absolute left-0 -bottom-2.5 w-full" width="230" height="12" viewBox="0 0 420 16" fill="none" preserveAspectRatio="xMidYMax meet">
              <path d="M2 2C25.3232 3.07929 48.5889 4.6047 71.903 5.76081C120.965 8.19371 170.073 9.7166 219.305 9.97162C265.498 10.2109 311.407 8.92785 357.411 6.46797C377.031 5.41888 396.566 4.21724 416 2.28929" stroke="#1A6BE3" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </span>.
        </p>
        <ContactButton/>
        <CTAButton/>
      </header>
      <style jsx>{`
        #animate-length {
          stroke-dasharray: 450;
          stroke-dashoffset: 450;
          animation-name: drawLine;
          animation-duration: 4s;
          animation-delay: 1500ms;
          animation-fill-mode: forwards;
          animation-iteration-count: 1;
        }
        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }
        
      `}</style>
    </>
  );
}
 
export default HomeHeader;