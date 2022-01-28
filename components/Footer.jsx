import Link from 'next/link'
import { useRouter } from "next/router";

const FooterLink = ({href, text}) => {
  const { asPath } = useRouter()

  const isActive = asPath === href ? true : false
  return (
    <Link href={href}>
      <a className={isActive ? `font-semibold text-blue-light md:text-base` : undefined}>{text}</a>
    </Link>
  )

}

const Footer = () => {

  return (
    <footer className="bg-black text-white py-8 md:py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between md:items-center divide-y md:divide-y-0">
        <div className="flex flex-col text-center md:text-left mb-6 md:mb-0">
          <h4 className="font-bold text-xl">MLYNEK.XYZ</h4>
          <p className="text-gray-light">contact@mlynek.xyz</p>
        </div>
        <div className='text-xl md:text-base flex flex-col md:flex-row space-y-2 py-4 md:space-y-0 md:py-0 md:space-x-4 text-center md:text-left'>
          <FooterLink href={'/'} text={'Główna'}/>
          <FooterLink href={'/blog'} text={'Blog'}/>
          <FooterLink href={'/offer'} text={'Oferta'}/>
          <FooterLink href={'/contact'} text={'Kontakt'}/>
          <FooterLink href={'/projects'} text={'Realizacje'}/>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;