import { useState } from "react";
import Head from 'next/head'

import { FrequentlyAskedQuestions, SocialMediaLink } from "../components";
import { getQuestions, REVALIDATE_PAGE_CONTENT } from '../lib/graphCMS'

function validateEmail(mail) 
{
  if (mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    console.log('email jest poprawny')
    return true
  } else {
    return false
  }  
}

const ContactForm = () => {
  const [error, setError] = useState({name: false, email: false, message: false })
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleOnChangeInput = (e) => {
    switch(e.target.id) {
      case 'name':
        setName(e.target.value)
        break
      case 'email':
        setEmail(e.target.value)
        break
      case 'message':
        setMessage(e.target.value)
        break
    }
  }

  const handleSubmitingForm = (e) => {
    if (name.length <= 4) {
      e.preventDefault();
      setError(state => ({...state, name: true}))
    } else {
      setError(state => ({...state, name: false}))
    }
    if (!validateEmail(email)) {
      e.preventDefault();
      setError(state => ({...state, email: true}))
    } else {
      setError(state => ({...state, email: false}))
    }
    if (message.length <= 12) {
      e.preventDefault();
      setError(state => ({...state, message: true}))
    } else {
      setError(state => ({...state, message: false}))
    }
  }

  return (
    <form target="_blank" action="https://formsubmit.co/0c7c727f618c8174184105d0aa8e722c" method="POST" className="flex flex-col">
      <label className="text-base text-white mb-1" htmlFor="name">Twoje imię</label>
      <input 
      className="px-2 py-2 focus:outline-2 focus:outline focus:outline-blue-light rounded-lg text-blue-dark border-2 border-white" 
      autoComplete="off" 
      placeholder="Twoje imię" 
      type="text" 
      id="name"
      name="name"
      required
      value={name}
      onChange={handleOnChangeInput}
      />
      <p className="mb-5 text-red-400 text-sm">{error.name && 'Imię musi składać się z co najmniej 4 znaków!'}</p>
      <label className="text-base text-white mb-1" htmlFor="email">Adres e-mail</label>
      <input 
      className="px-2 py-2 focus:outline-2 focus:outline focus:outline-blue-light rounded-lg text-blue-dark border-2 border-white" 
      autoComplete="off" 
      placeholder="Adres e-mail" 
      type={'email'} 
      id="email"
      name="email"
      required
      value={email}
      onChange={handleOnChangeInput}
      />
      <p className="mb-5 text-red-400 text-sm">{error.email && 'Proszę podać prawidłowy adres e-mail!'}</p>
      <label className="text-base text-white mb-1" htmlFor="message">Wiadomość</label>
      <textarea 
      className="mb-1 px-2 py-2 focus:outline-2 focus:outline focus:outline-blue-light rounded-lg text-blue-dark border-2 border-white" 
      id="message" 
      name="message"
      cols="30" 
      placeholder="Wiadomość"
      rows="10"
      required
      value={message}
      onChange={handleOnChangeInput}
      ></textarea>
      <p className="mb-5 text-red-400 text-sm">{error.message && 'Wiadomość musi być dłuższa niż 12 znaków!'}</p>
      <div className="w-full flex justify-center">
        <button onClick={handleSubmitingForm} type={'submit'} className="bg-blue-light px-6 xl:px-8 py-1.5 xl:py-2 rounded-lg w-fit font-semibold text-white text-lg hover:bg-white hover:text-blue-light duration-500">Wyślij</button>
      </div>
    </form>
  )
}

export default function Contact({ questions }) {
  return (
    <>
      <Head>
        <title>MLYNEK.XYZ - Kontakt</title>
        <meta name="description" content={`
          Jeśli zdecydowałeś na strone internetowe, możesz się tutaj ze mną skontaktować.
        `}/>
        <meta property="og:title" content="MLYNEK.XYZ - Kontakt" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mlynek.xyz/contact" />
        <meta property="og:description" 
          content={`
            Jeśli zdecydowałeś na strone internetowe, możesz się tutaj ze mną skontaktować.
          `}/>
      </Head>
      <header className="container mx-auto px-6 py-12 md:py-16 xl:py-20 space-y-2 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-extrabold text-center uppercase text-custom-black">
          Kontakt
        </h1>
        <p className="text-center text-base lg:text-lg xl:text-xl max-w-xl text-custom-black">
          Skontaktuj się ze mną używając jednej z poniższych opcji.
        </p>
      </header>
      <section className="max-w-screen-sm mx-auto grid grid-cols-1 px-6 gap-y-8 md:gap-4 lg:gap-8">
        <div className="flex flex-col space-y-2 row-start-2 md:row-start-1">
          {/* <h2 className="text-xl text-custom-black">Inne formy kontaktu</h2> */}
          <SocialMediaLink
            title={'@kreysonfn'}
            platfrom="Twitter"
            link={"https://twitter.com/kreysonfn"}
            icon={"/icons/twitter.svg"}
          />
          <SocialMediaLink
            title={'Jakub Młynek'}
            platfrom="LinkedIn"
            link={"https://www.linkedin.com/in/jakub-m%C5%82ynek-28784522b/"}
            icon={"/icons/linkedin.svg"}
          />
          <SocialMediaLink
            title={'mlynekjakub05@gmail.com'}
            platfrom="E-mail"
            link={"mailto:mlynekjakub05@gmail.com"}
            icon={"/icons/mail-blue-light.svg"}
          />
        </div>
        {/* <div className="bg-blue-dark  py-4 md:py-8  px-4 md:px-8 rounded-xl col-span-2">
          <ContactForm/>
        </div> */}
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