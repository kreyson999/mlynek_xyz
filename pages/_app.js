import Head from 'next/head'
import LocaleContext from '../locales/localeContext'
import { useRouter } from 'next/router'

import '../styles/globals.css'
import { Navbar, Footer } from '../components'

import en from '../locales/en'
import pl from '../locales/pl'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { locale } = router 
  const t = locale === 'pl' ? pl : en
  
  return (
    <>
      <LocaleContext.Provider value={t}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta 
            name="keywords"
            content="Jakub Młynek, mlynek, młynek, mlynek xyz, strona internetowe, blog internetowy, strona firmowa, ostrow wielkopolski, portfolio, wydajne strony, nowoczesne strony"
          />
        </Head>
        <Navbar/>
        <div className="grow">
          <Component {...pageProps} />
        </div>
        <Footer/>
      </LocaleContext.Provider>
    </>
  )
}

export default MyApp
