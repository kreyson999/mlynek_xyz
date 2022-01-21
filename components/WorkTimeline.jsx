import Image from 'next/image'

const TimelineCard = ({active, isClient, text, gridStyles, icon = '/icons/timeline/mail-lightblue.svg'}) => {
  return ( 
    <div 
      style={{
        boxShadow: `0px 0px 20px #073A8559`
      }}
      className={`relative overflow-hidden col-span-3 xl:col-span-2 w-full px-4 py-4 rounded-xl border-2 border-blue-light ${gridStyles} `}> {/* ${active && 'bg-blue-dark text-white'} */}
      <h4 className="font-extrabold text-xl xl:text-2xl mb-1 uppercase">{isClient ? 'Klient' : 'MLYNEK.XYZ'}</h4>
      <p className='text-md xl:text-lg w-5/6'>
        {text}
      </p>
      <div className='absolute -bottom-3 -right-3 grid place-content-center p-4 border-2 border-blue-light rounded-full'
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
  return (
    <div className="relative grid grid-cols-4 md:grid-cols-7 xl:grid-cols-5 grid-rows-5 gap-y-4 md:gap-y-0">
      <div className="relative col-start-1 md:col-start-4 xl:col-start-3 row-span-5 flex justify-center">
        <div 
        className="w-4 h-full"
        style={{
          opacity: '0.5',
          background: `rgb(255,255,255)`,
          background: `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(26,107,227,1) 10%, rgba(26,107,227,1) 90%, rgba(255,255,255,1) 100%)`
        }}
        ></div>
        <div className='absolute rotate-180'
          style={{
            top: '70px',
          }}
        >
          <Image 
          src={"/icons/bug-fill.svg"}
          alt='Bug'
          width={48}
          height={48}
          />
        </div>
      </div>
      <TimelineCard 
        active
        isClient={true} 
        text={`
          Wybiera pasującą usługę do jego oczekiwań. 
          Opisuje najważniejsze informacje co do wyglądu strony internetowej.
        `}
        gridStyles={`col-start-2 md:col-start-5  xl:col-start-4`}
      />
      <TimelineCard 
        isClient={false} 
        text={`
          Projektujemy wygląd strony najbardziej pasujący do opisu klienta, 
          wybieramy najlepsze technologie dla danego projektu oraz prezentujemy 
          je klientowi.
        `}
        gridStyles={`col-start-2 md:col-start-1`}
        icon='/icons/timeline/monitor.svg'
      />
      <TimelineCard 
        isClient={true} 
        text={`
          Akceptuje wykonany przez nas prototyp, ewentualnie wypisuje 
          rzeczy, które mu się nie spodobały.
        `}
        gridStyles={`col-start-2 md:col-start-5 xl:col-start-4 row-start-3`}
      />
      <TimelineCard 
        isClient={false} 
        text={`
          Jeśli spełniliśmy oczekiwania klienta zaczynamy programować stronę zwracając 
          szczególną uwagę na wydajność kodu oraz dokładność strony. 
          Po skończeniu wysyłamy demo to klienta.
        `}
        gridStyles={`col-start-2 md:col-start-1 row-start-4`}
        icon='/icons/timeline/eye.svg'
      />
      <TimelineCard 
        isClient={true} 
        text={`
          Potwierdza spełnienie jego oczekiwań. Płaci za usługę. 
          Wspólnie z nami wybiera najlepszą opcję wstawienia strony internetowej do sieci.
        `}
        gridStyles={`col-start-2 md:col-start-5 xl:col-start-4 row-start-5`}
      />
    </div>
  );
}
 
export default WorkTimeline;