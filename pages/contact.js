import { FrequentlyAskedQuestions, SocialMediaLink } from "../components";

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
            title={'contact@mlynek.xyz'}
            platfrom="E-mail"
            link={"mailto:contact@mlynek.xyz"}
            icon={"/icons/mail-blue-light.svg"}
          />
        </div>
        <div className="bg-blue-dark py-8  px-4 md:px-8 rounded-xl col-span-2">
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