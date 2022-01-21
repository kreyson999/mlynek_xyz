import Link from 'next/link'
import Image from 'next/image'

const ContactButton = () => {
  return (
    <Link href={'/contact'}>
      <a className="flex items-center space-x-2">
        <Image
        src={'/icons/mail-blue.svg'}
        alt="Kontakt"
        height={24}
        width={24}
        />
        <span className="text-blue-dark font-semibold text-md xl:text-lg">Skontaktuj się z nami</span>
      </a>
    </Link>
  );
}
 
export default ContactButton;