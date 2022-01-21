import Link from "next/link";
import Image from 'next/image'
import { CTAButton } from ".";
import { useState, useEffect } from 'react'

const Navbar = () => {

  const [windowWidth, setWindowWidth] = useState(0)
  const [isNavbarClosed, setIsNavbarClosed] = useState(true)
  

  return (
    <nav className="border-b max-w-screen md:max-w-none">
      <div className="container mx-auto flex justify-between items-center px-2 md:px-6 py-2 xl:py-4">
        <div className="text-xl md:text-2xl xl:text-3xl font-bold text-custom-black">MLYNEK.XYZ</div>
        <div className="flex space-x-4 items-center text-custom-black">
          <div className="fixed hidden md:flex md:relative space-x-4 items-center">
            <Link href={'/'}>
              <a className="font-semibold">Główna</a>
            </Link>
            <Link href={'/about'}>
              <a className="font-semibold">O nas</a>
            </Link>
            <Link href={'/offer'}>
              <a className="font-semibold">Oferta</a>
            </Link>
            <Link href={'/contact'}>
              <a className="font-semibold flex space-x-1.5">
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
    </nav>
  );
}
 
export default Navbar;