import { CustomList, OfferPageItem, SectionHeader, FrequentlyAskedQuestions } from "../components";
import Image from 'next/image'
import { getQuestions, REVALIDATE_PAGE_CONTENT } from '../lib/graphCMS'
import Head from "next/head";

export default function Offer({questions}) {
  return (
    <>
      <Head>
        <title>MLYNEK.XYZ - Oferta</title>
        <meta name="description" content={`
          Znajdziesz tutaj moją ofertę stron internetowych.
        `}/>
        <meta property="og:title" content="MLYNEK.XYZ - Oferta" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mlynek.xyz/offer" />
        <meta property="og:description" 
          content={`
          Znajdziesz tutaj moją ofertę stron internetowych.
        `}/>
      </Head>
      <header className="container mx-auto px-6 py-12 md:py-16 xl:py-20 space-y-2 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-extrabold text-center uppercase text-custom-black">
          Nasza oferta
        </h1>
        <p className="text-center text-base lg:text-lg xl:text-xl max-w-xl text-custom-black">
          Sprawdź co mogę dla Ciebie wykonać.
        </p>
      </header>
      <section className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4 mb-24 md:mb-48">
        <OfferPageItem
        title={"Portfolio"}
        desc={`Idealna opcja dla fotografów, grafików lub artystów.`}
        features={['Strona zoptymalizowana pod SEO', 'Intuicyjny system CMS', 'Obsługa kliku języków', 'Nowoczesne technologie', 'Wygląd dopasowany do wyobraźni klienta']}
        />
        <OfferPageItem
        title={"Blog"}
        desc={`Dobra opcja dla pasjonatów, lubiących dzielić się swoją pasją ze światem.`}
        features={['Strona zoptymalizowana pod SEO', 'Intuicyjny system CMS', 'Obsługa kliku języków', 'Nowoczesne technologie', 'Wygląd dopasowany do wyobraźni klienta']}
        primary={true}
        />
        <OfferPageItem
        title={"Strona firmy"}
        desc={`Perfekcyjna opcja dla przedsiębiorców chcących zaprezentować się w sieci.`}
        features={['Strona zoptymalizowana pod SEO', 'Intuicyjny system CMS', 'Obsługa kliku języków', 'Nowoczesne technologie', 'Wygląd dopasowany do wyobraźni klienta']}
        />
      </section>
      <section className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 md:mb-48">
        <div>
          <SectionHeader title={"Blog"} text={`
            Kładę wielki nacisk na nieustanne polepszanie doświadczeń czytelników oraz właściciela bloga.
          `}
          left
          withoutMarginTop={true}
          withoutMarginBottom={true}
          />
          <div>
            <h3 className="text-lg xl:text-xl mt-4 font-bold text-blue-dark">Możliwe funkcje:</h3>
            <CustomList items={['Proste zarządzanie pracami przy użyciu CMS', 'Dodawanie komentarzy pod postami', 'Filtrowanie po kategorii', 'Własna funkcja']}/>
          </div>
          <div>
            <h3 className="text-lg xl:text-xl mt-4 font-bold text-blue-dark">Technologie:</h3>
            <CustomList items={['System zarządzania treścią GraphCMS', 'Framework JavaScript React', 'Framework webowy NextJS']}/>
          </div>
        </div>
        <div className="flex flex-col">
            <div className="relative aspect-video bg-carousel-0 rounded-2xl">
              <Image
              src={'/images/kjmm_desktop.png'}
              alt="Blog Demo"
              layout="fill"
              className="object-contain"
              />
            </div>
            <div className="w-full flex justify-center mt-3">
              <a href="https://kjmm.pl" className="bg-blue-light px-6 xl:px-8 py-1.5 xl:py-2 rounded-full w-fit font-semibold text-white text-lg xl:text-xl" target={'_blank'} rel="noreferrer">DEMO</a>
            </div>
        </div>
      </section>
      <section className="bg-gray-40 py-20 md:py-32 mb-48">
        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="row-start-2 md:row-start-1">
            <div className="relative aspect-video bg-carousel-1 rounded-2xl">
              <Image
              src={'/images/comingsoon.png'}
              alt="Strona Firmy Demo"
              layout="fill"
              className="object-contain"
              />
            </div>
            <div className="w-full flex justify-center mt-3">
              <a href="#" className="bg-blue-light px-6 xl:px-8 py-1.5 xl:py-2 rounded-full w-fit font-semibold text-white text-lg xl:text-xl" target={'_blank'} rel="noreferrer">DEMO</a>
            </div>
          </div>
          <div className="row-start-1">
            <SectionHeader title={"Strona firmy"} text={`
              Na stronie może się znaleźć praktycznie wszystko, limitem jest tylko wyobraźnia klienta.
            `}
            left
            withoutMarginTop={true}
            withoutMarginBottom={true}
            />
            <div>
              <h3 className="text-xl mt-4 font-bold text-blue-dark">Możliwe funkcje:</h3>
              <CustomList items={['Mapa Google', 'Formularz kontaktowy', 'Własna funkcja']}/>
            </div>
            <div>
              <h3 className="text-xl mt-4 font-bold text-blue-dark">Technologie:</h3>
              <CustomList items={['Framework JavaScript React', 'Framework webowy NextJS']}/>
            </div>
          </div>
        </div> 
      </section>
      <section className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 md:mb-48">
        <div>
          <SectionHeader title={"Portfolio"} text={`
            Staram się, aby z każdą wykonanym  portfolio, były one co raz bardziej przyjazne dla właścicieli oraz wygodniejsze dla przeglądajcych.
          `}
          left
          withoutMarginTop={true}
          withoutMarginBottom={true}
          />
          <div>
            <h3 className="text-xl mt-4 font-bold text-blue-dark">Możliwe funkcje:</h3>
            <CustomList items={['Proste zarządzanie pracami przy użyciu CMS', 'Polubianie prac', 'Komentowanie prac', 'Sortowanie po dacie lub ilości polubień', 'Filtrowanie po kategorii']}/>
          </div>
          <div>
            <h3 className="text-xl mt-4 font-bold text-blue-dark">Technologie:</h3>
            <CustomList items={['System zarządzania treścią GraphCMS', 'Framework JavaScript React', 'Framework webowy NextJS']}/>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative aspect-video bg-carousel-2 rounded-2xl">
            <Image
              src={'/images/comingsoon.png'}
              alt="Portfolio Demo"
              layout="fill"
              className="object-contain"
              />
          </div>
          <div className="w-full flex justify-center mt-3">
            <a href="#" className="bg-blue-light px-6 xl:px-8 py-1.5 xl:py-2 rounded-full w-fit font-semibold text-white text-lg xl:text-xl " target={'_blank'} rel="noreferrer">DEMO</a>
          </div>
        </div>
      </section>
      <FrequentlyAskedQuestions questions={questions}/>
    </>
  );
}

export async function getStaticProps() {
  const questions = await getQuestions()

  return {
    props: {
      questions
    },
    revalidate: REVALIDATE_PAGE_CONTENT,
  }
}