import Link from "next/link";
import Image from 'next/image'
import { CTAButton } from ".";
import { useState, useEffect } from 'react'

const Navbar = () => {

  const [isNavbarClosed, setIsNavbarClosed] = useState(true)
  
  const handleShowingNavbar = () => {
    setIsNavbarClosed(state => !isNavbarClosed)
  }

  return (
    <nav className="relative border-b max-w-screen md:max-w-none z-50">
      <div className="container mx-auto flex justify-between items-center px-2 md:px-6 py-2 xl:py-4">
        <div className="text-xl md:text-2xl xl:text-3xl font-bold text-custom-black">MLYNEK.XYZ</div>
        <div className="flex space-x-4 items-center text-custom-black">
          <div className={`fixed left-0 top-0 flex justify-end w-full text-center divide-y md:divide-y-0 flex-col md:flex-row x md:relative md:space-x-4 md:items-center duration-500 ${isNavbarClosed ? '-bottom-full' : 'bottom-0 bg-black-opacity'}`}>
            <Link href={'/'}>
              <a className="text-2xl md:text-base font-semibold py-2 bg-white">Główna</a>
            </Link>
            <Link href={'/about'}>
              <a className="text-2xl md:text-base font-semibold py-2 bg-white">O nas</a>
            </Link>
            <Link href={'/offer'}>
              <a className="text-2xl md:text-base font-semibold py-2 bg-white">Oferta</a>
            </Link>
            <Link href={'/contact'}>
              <a className="bg-white flex justify-center text-2xl md:text-base font-semibold flex space-x-1.5 pt-2 md:pt-0 pb-16 md:pb-0">
                <div className="grid place-content-center">
                  <Image
                    src={'/icons/mail.svg'} 
                    alt="Kontakt"
                    width={21}
                    height={21}
                  />
                </div>
                <span>Kontakt</span>
              </a>
            </Link>
          </div>
          <CTAButton/>
        </div>
      </div>
      <button
      onClick={handleShowingNavbar} 
      style={{
        boxShadow: `0px 0px 20px #073A8559`,
      }}
      className="fixed border-2 grid place-content-center border-blue-dark p-2 rounded-full bottom-0 right-0 m-2 md:hidden bg-white z-50">
        <Image
          src={isNavbarClosed ? '/icons/menu.svg' : '/icons/close.svg'}
          alt="Menu"
          width={32}
          height={32}
        />
      </button>
    </nav>
  );
}
 
export default Navbar;