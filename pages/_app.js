import '../styles/globals.css'
import { Navbar, Footer } from '../components'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
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
    </>
  )
}

export default MyApp
