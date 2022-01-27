import { useContext } from "react"

import Head from "next/head"

import { HomeCarousel, ContactButton, SectionHeader, OfferItem, WorkTimeline, DifferenceItem, HomeHeader } from "../components"
import LocaleContext from '../locales/localeContext'

export default function Home() {
  const t = useContext(LocaleContext)

  return (
    <>
      <Head>
        <title>{t.home.title}</title>
        <meta name="description" content={`
          Tworzę wydajne strony internetowe. Blogi, strony firmowe oraz portfolio to moja specjalność! Gwarantuję niesamowite doświadczenia użytkowników na stronie.
        `}/>
        <meta property="og:title" content="MLYNEK.XYZ - Blogi, Strony Firmowe, Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mlynek.xyz/" />
        <meta property="og:description" 
          content={`
          Tworzę wydajne strony internetowe. Blogi, strony firmowe oraz portfolio to moja specjalność! Gwarantuję niesamowite doświadczenia użytkowników na stronie.
        `}/>
      </Head>
      <HomeHeader/>
      <HomeCarousel/>
      <section className="max-w-screen-xl mx-auto px-6">
        <SectionHeader title={t.home.sections.offer.header.title} text={t.home.sections.offer.header.text}/>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          <OfferItem 
          title={t.home.sections.offer.items[0].title}
          text={t.home.sections.offer.items[0].text}
          />
          <OfferItem 
          title={t.home.sections.offer.items[1].title}
          text={t.home.sections.offer.items[1].text}
          />
          <OfferItem 
          title={t.home.sections.offer.items[2].title}
          text={t.home.sections.offer.items[2].text}
          />
        </div>
      </section>
      <section className="max-w-screen-xl px-6 mx-auto">
        <SectionHeader 
        title={t.home.sections.howIDeliver.header.title} 
        text={t.home.sections.howIDeliver.header.text}/>
        <WorkTimeline/>
      </section>
      <section className="relative bg-gray-40 py-20 mt-40">
        <div className="relative pt-0.5 max-w-screen-xl px-6 mx-auto">
        <SectionHeader
        title={t.home.sections.difference.header.title} 
        text={t.home.sections.difference.header.text}
        withoutMarginTop
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-6 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
          <DifferenceItem
          title={t.home.sections.difference.items[0].title}
          text={t.home.sections.difference.items[0].text}
          borderStyles={'sm:border-r border-b'}
          />
          <DifferenceItem
          title={t.home.sections.difference.items[1].title}
          text={t.home.sections.difference.items[1].text}
          borderStyles={'lg:border-r border-b'}
          />
          <DifferenceItem
          title={t.home.sections.difference.items[2].title}
          text={t.home.sections.difference.items[2].text}
          borderStyles={'sm:border-r border-b lg:border-r-0'}
          />
          <DifferenceItem
          title={t.home.sections.difference.items[3].title}
          text={t.home.sections.difference.items[3].text}
          borderStyles={'border-b lg:border-b-0 lg:border-r'}
          />
          <DifferenceItem
          title={t.home.sections.difference.items[4].title}
          text={t.home.sections.difference.items[4].text}
          borderStyles={'sm:border-r border-b sm:border-b-0'}
          />
          <DifferenceItem
          title={t.home.sections.difference.items[5].title}
          text={t.home.sections.difference.items[5].text}
          />
        </div>
        </div>
      </section>
      <section className="max-w-screen-lg px-6 mx-auto mb-32 flex space-y-8 flex-col items-center">
      <SectionHeader title={t.home.sections.convinced.header.title} withoutMarginBottom/>
      <ContactButton/>
      </section>
    </>
  )
}
