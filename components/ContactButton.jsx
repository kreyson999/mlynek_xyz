import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import LocaleContext from '../locales/localeContext'


const ContactButton = () => {
  const t = useContext(LocaleContext)
  return (
    <Link href={'/contact'}>
      <a className="flex items-center space-x-2 transition duration-500 transform hover:-translate-y-0.5">
        <Image
        src={'/icons/mail-blue.svg'}
        alt={t.shared.contactbutton}
        height={24}
        width={24}
        priority
        />
        <span className="text-blue-dark font-semibold text-md xl:text-lg">{t.shared.contactbutton}</span>
      </a>
    </Link>
  );
}
 
export default ContactButton;