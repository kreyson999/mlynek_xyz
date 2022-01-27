import Link from "next/link";
import { useContext } from 'react'
import LocaleContext from '../locales/localeContext'

const CTAButton = () => {
  const t = useContext(LocaleContext)
  return (
    <Link href={'/projects'}>
      <a className="font-semibold bg-blue-dark text-white px-4 md:px-8 py-2 md:py-3 rounded-full hover:bg-blue-light duration-300">{t.shared.ctabutton}</a>
    </Link>
  );
}
 
export default CTAButton;