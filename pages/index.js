import Head from "next/head"
import { HomeCarousel, ContactButton, SectionHeader, WorkTimeline, DifferenceItem, HomeHeader } from "../components"

export default function Home() {
  return (
    <>
      <Head>
        <title>MLYNEK.XYZ - Strony Firmowe, Blogi, Portfolio</title>
        <meta name="description" content={`
          Tworzymy wydajne strony internetowe. Blogi, strony firmowe oraz portfolio to nasza specjalność! Gwarantujemy niesamowite doświadczenia użytkowników na stronie.
        `}/>
        <meta property="og:title" content="MLYNEK.XYZ - Strony Firmowe, Blogi, Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mlynek.xyz/" />
        <meta property="og:description" 
          content={`
          Tworzymy wydajne strony internetowe. Blogi, strony firmowe oraz portfolio to nasza specjalność! Gwarantujemy niesamowite doświadczenia użytkowników na stronie.        `}/>
      </Head>
      <HomeHeader/>
      <HomeCarousel/>
      <section className="max-w-screen-xl px-6 mx-auto">
        <SectionHeader title={"Praca z nami"} text={`
        Chcemy budować swoją pozycję na rynku poprzez dobry kontakt z klientem
        oraz spełnianie jego oczekiwań. Poniżej możesz zobaczyć jak przebiega współpraca.
        `}/>
        <WorkTimeline/>
      </section>
      <section className="relative bg-gray-40 py-20 mt-40">
        <div className="relative pt-0.5 max-w-screen-xl px-6 mx-auto">
        <SectionHeader title={"Co nas wyróżnia?"} text={`
          Nie chcemy być kolejną zwykłą firmą tworzącą strony internetowe,
          dlatego stawiamy na innowacyjność naszych usług.
        `}
        withoutMarginTop
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-6 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
          <DifferenceItem
          title={"Języki"}
          text={`Możliwość wprowadzenia kilku języków na prośbe klienta, aby trafić do jeszcze większej grupy odbiorców.`}
          borderStyles={'sm:border-r border-b'}
          />
          <DifferenceItem
          title={"Technologie"}
          text={`Wybieramy tylko najlepsze technologie, których używają 
          największe firmy na świecie.`}
          borderStyles={'lg:border-r border-b'}
          />
          <DifferenceItem
          title={"Design"}
          text={`Staramy się, aby moje projekty wpasowywały się w aktualne trendy.`}
          borderStyles={'sm:border-r border-b lg:border-r-0'}
          />
          <DifferenceItem
          title={"Gwarancja"}
          text={`U nas to klient decyduje czy końcowy produkt jest warty zapłaty.`}
          borderStyles={'border-b lg:border-b-0 lg:border-r'}
          />
          <DifferenceItem
          title={"Wszechstronność"}
          text={`Wykonane strony są napisane tak, aby w przyszłości możliwa była szybka aktualizacja.`}
          borderStyles={'sm:border-r border-b sm:border-b-0'}
          />
          <DifferenceItem
          title={"Brak szablonów"}
          text={`Zawsze kod strony pisany jest od nowa, co sprawia ze każda z nich jest innowacyjna.`}
          />
        </div>
        </div>
      </section>
      <section className="max-w-screen-lg px-6 mx-auto mb-32 flex space-y-8 flex-col items-center">
      <SectionHeader title={"Przekonaliśmy Cię?"} withoutMarginBottom/>
      <ContactButton/>
      </section>
    </>
  )
}
