import Link from "next/link";
import Image from 'next/image'
import { CTAButton } from ".";
import { useState } from 'react'


const NavbarLink = ({href, text}) => (
  <Link href={href}>
    <a className="text-2xl c py-2 md:text-base font-semibold bg-white md:py-0 duration-500 hover:text-blue-light">{text}</a>
  </Link>
)

const Navbar = () => {
  const [isNavbarClosed, setIsNavbarClosed] = useState(true)
  

  const handleShowingNavbar = (e) => {
    if (window.innerWidth > 768) return
    setIsNavbarClosed(state => !state)
  }

  return (
    <nav className="relative border-b max-w-screen md:max-w-none z-50">
      <div className="container mx-auto flex justify-between items-center px-2 md:px-6">
        <Link href={'/'}>
          <a className="text-xl md:text-3xl font-bold text-custom-black py-4">MLYNEK.XYZ</a>
        </Link>
        <div className="flex h-full space-x-2 md:space-x-4 items-center text-custom-black">
          <div 
          onClick={handleShowingNavbar} 
          className={`fixed left-0 flex justify-end w-full text-center divide-y md:divide-y-0 flex-col md:flex-row x md:relative md:space-x-4 md:items-center duration-500 ${isNavbarClosed ? '-bottom-full' : 'bottom-0 bg-black-opacity md:bg-white top-0 md:top-auto md:bottom-auto'}`}>
            <NavbarLink href={'/'} text={'Główna'}/>
            <NavbarLink href={'/blog'} text={'Blog'}/>
            <NavbarLink href={'/offer'} text={'Oferta'}/>
            <Link href={'/contact'}>
              <a className="duration-500 bg-white flex justify-center text-2xl md:text-base items-center font-semibold flex space-x-1.5 pt-2 md:pt-0 pb-16 md:pb-0 changesvgcolor hover:text-blue-light">
                <svg 
                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="duration-500">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Kontakt</span>
              </a>
            </Link>
          </div>
          <CTAButton/>
          <button
          onClick={handleShowingNavbar} 
          className="grid place-content-center border-blue-dark rounded-full md:hidden bg-white z-50 p-0.5">
            <Image
              src={isNavbarClosed ? '/icons/menu.svg' : '/icons/close.svg'}
              alt="Menu"
              width={32}
              height={32}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;