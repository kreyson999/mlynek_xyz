import { Carousel, CarouselItem, SectionHeader } from "../components";

export default function Projects() {

  return (
    <>
      <header className="container mx-auto px-6 py-12 md:py-16 xl:py-20 space-y-2 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-extrabold text-center uppercase text-custom-black">
          Realizacje
        </h1>
        <p className="text-center text-base lg:text-lg xl:text-xl max-w-xl text-custom-black">
          Tutaj znajdziesz nasze ostatnie projekty.
        </p>
      </header>
      <section className="flex flex-col w-full py-12">
        <Carousel>
          <CarouselItem
          image={'/images/kjmm_desktop.png'}
          color={'bg-carousel-0'}
          />
          <CarouselItem
          image={'/images/kjmm_desktop.png'}
          color={'bg-carousel-1'}
          />
          <CarouselItem
          image={'/images/kjmm_desktop.png'}
          color={'bg-carousel-2'}
          />
          <CarouselItem
          image={'/images/kjmm_desktop.png'}
          color={'bg-carousel-2'}
          />
        </Carousel>
        <div className="px-6 max-w-screen-md mx-auto mt-16 mb-48">
          <SectionHeader
          title={'KJMM.PL'}
          withoutMarginTop={true}
          withoutMarginBottom={true}
          left={true}
          />
          <p className="text-base md:text-lg">Strona blogowa wykonana przez nas dla KJMM.PL. Na stronie miało nie być stron dla kategorii natomiast musieliśmy dodać akutalnie trwające transmisje na platformie, które są brane z API platformy oraz musieliśmy dodać nową podstronę z turniejami gry Fortnite oraz dodać możliwość wstawiania odnośników do nich na blogu.</p>
        </div>
      </section>
    </>
  );
}