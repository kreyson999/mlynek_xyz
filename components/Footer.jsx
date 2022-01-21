import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 md:py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between md:items-center divide-y md:divide-y-0">
        <div className="flex flex-col text-center md:text-left mb-6 md:mb-0">
          <h4 className="font-bold text-xl">MLYNEK.XYZ</h4>
          <p className="text-gray-light">contact@mlynek.xyz</p>
        </div>
        <div className='text-xl md:text-base flex flex-col md:flex-row space-y-2 py-4 md:space-y-0 md:py-0 md:space-x-4 text-center md:text-left'>
          <Link href={'/'}>
            <a className='text-blue-light md:text-base'>Główna</a>
          </Link>
          <Link href={'/about'}>
            <a className=''>O nas</a>
          </Link>
          <Link href={'/offer'}>
            <a className=''>Oferta</a>
          </Link>
          <Link href={'/contact'}>
            <a className=''>Kontakt</a>
          </Link>
          <Link href={'/projects'}>
            <a className=''>Realizacje</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;