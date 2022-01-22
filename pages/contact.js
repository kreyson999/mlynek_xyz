import Image from "next/image";
import { FrequentlyAskedQuestions, SectionHeader } from "../components";

function Contact() {
  return (
    <>
      <header className="container mx-auto px-6 py-12 md:py-16 xl:py-20 space-y-2 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-extrabold text-center uppercase text-custom-black">
          Kontakt
        </h1>
        <p className="text-center text-base lg:text-lg xl:text-xl max-w-xl text-custom-black">
          Napisz do używając formularza lub napisz do nas na jednym z naszych social medii znajdujących się poniżej.
        </p>
      </header>
      <section className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 px-6 gap-y-8 md:gap-4 lg:gap-8">
        <div className="flex flex-col space-y-2 row-start-2 md:row-start-1">
          <h2 className="text-xl text-custom-black">Inne formy kontaktu</h2>
          <a href="https://twitter.com/kreysonfn" className="flex items-center space-x-2 px-2 py-2 border-2 border-blue-light rounded-xl">
            <div className="grid place-content-center">
              <Image
                src={'/icons/twitter.svg'}
                alt="Skontaktuj się ze mną na Twitter"
                width={28}
                height={28}
              />
            </div>
            <span className="text-lg sm:text-base md:text-lg">@kreysonfn</span>
          </a>
          <a href="https://www.linkedin.com/in/jakub-m%C5%82ynek-28784522b/" className="flex items-center space-x-2 px-2 py-2 border-2 border-blue-light rounded-xl">
            <div className="grid place-content-center">
              <Image
                src={'/icons/linkedin.svg'}
                alt="Skontaktuj się ze mną na LinkedIn"
                width={28}
                height={28}
              />
            </div>
            <span className="text-lg sm:text-base md:text-lg">Jakub Młynek</span>
          </a>
          <a href="https://www.linkedin.com/in/jakub-m%C5%82ynek-28784522b/" className="flex items-center space-x-2 px-2 py-2 border-2 border-blue-light rounded-xl">
            <div className="grid place-content-center">
              <Image
                src={'/icons/mail-blue-light.svg'}
                alt="Skontaktuj się ze mną przez e-mail"
                width={28}
                height={28}
              />
            </div>
            <span className="text-lg sm:text-base md:text-lg">contact@mlynek.xyz</span>
          </a>
        </div>
        <div className="bg-blue-dark py-8 px-8 rounded-xl col-span-2">
          <form className="flex flex-col">
            <label className="text-base text-white mb-1" htmlFor="name">Twoje imię</label>
            <input className="mb-5 px-2 py-2 focus:outline-2 focus:outline focus:outline-blue-light rounded-lg text-blue-dark border-2 border-white" autoComplete="off" placeholder="Twoje imię" type="text" id="name"/>
            <label className="text-base text-white mb-1" htmlFor="email">Adres e-mail</label>
            <input className="mb-5 px-2 py-2 focus:outline-2 focus:outline focus:outline-blue-light rounded-lg text-blue-dark border-2 border-white" autoComplete="off" placeholder="Adres e-mail" type={'email'} id="email"/>
            <label className="text-base text-white mb-1" htmlFor="message">Wiadomość</label>
            <textarea 
            className="mb-5 px-2 py-2 focus:outline-2 focus:outline focus:outline-blue-light rounded-lg text-blue-dark border-2 border-white" 
            id="message" 
            cols="30" 
            placeholder="Wiadomość"
            rows="10"></textarea>
            <div className="w-full flex justify-center">
              <button className="bg-blue-light px-6 xl:px-8 py-1.5 xl:py-2 rounded-full w-fit font-semibold text-white text-lg xl:text-xl ">Wyślij</button>
            </div>
          </form>
        </div>
      </section>
      <FrequentlyAskedQuestions/>
    </>
  );
}

export default Contact;