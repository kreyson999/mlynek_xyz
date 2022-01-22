import { HomeCarousel, ContactButton, SectionHeader, OfferItem, WorkTimeline, DifferenceItem, HomeHeader } from "../components"

export default function Home() {
  return (
    <>
      <HomeHeader/>
      <HomeCarousel/>
      <section className="max-w-screen-xl mx-auto px-6">
        <SectionHeader title={"Oferta"} text={`
        Strony tego typu to nasza specjalność. Staramy się, aby
        były one wykonane profesjonalnie skupiając szczególną
        uwagę na doświadczenie użytkownika jak i właściciela.
        `}/>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          <OfferItem 
          title={"Blog"}
          text={`Chciałbyś podzielić się swoją pasją z innymi? 
          Znasz odpowiedzi na pytania, które niekoniecznie znają inni? 
          Jeśli jesteś jedną z tych osób to blog będzie idealny dla Ciebie!`}
          />
          <OfferItem 
          title={"Portfolio"}
          text={`Jesteś fotografem, a może jesteś uzdolniony graficznie? 
          Wybierając portfolio będziesz mógł dzielić się swoimi pracami ze światem, 
          a to wszystko w jednym miejscu!`}
          />
          <OfferItem 
          title={"Strona firmy"}
          text={`Chcesz, aby Twoi klienci mogli przyjrzeć się Twoim usługom wygodnie z domu? 
          Strona firmy nie tylko zapewni Twoim klientom wygodę, ale także pozwoli trafić Ci
            do większego grona osób.`}
          />
        </div>
      </section>
      <section className="max-w-screen-xl px-6 mx-auto">
        <SectionHeader title={"Praca z nami"} text={`
        Chcemy budować naszą pozycję na rynku po przez dobry kontakt z klientem
        oraz spełnianie jego oczekiwań. Poniżej możesz zobaczyć jak przebiega współpraca z nami.
        `}/>
        <WorkTimeline/>
      </section>
      <section className="relative bg-gray-40 py-20 mt-40">
        <div className="relative pt-0.5 max-w-screen-xl px-6 mx-auto">
        <SectionHeader title={"Co nas wyróżnia?"} text={`
          Nie chcemy być kolejną zwykłą firmą tworzącą strony internetowe
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
          text={`Staramy się, aby nasze projekty wpasowywały się w aktualne trendy.`}
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
          text={`Zawsze piszemy kod strony od nowa, co sprawia ze każda z nich jest innowacyjna.`}
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
