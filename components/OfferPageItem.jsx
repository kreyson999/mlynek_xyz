import Link from 'next/link'
import { CustomList } from ".";

const OfferPageItem = ({title, desc, features, primary}) => {
  return (
    <div className={`py-6 px-6 space-y-2 xl:space-y-4 ${primary ? 'bg-blue-dark' : 'bg-gray-40'}`}>
      <h2 className={`font-bold text-2xl md:text-3xl xl:text-4xl ${primary ? 'text-white' : 'text-black'}`}>{title}</h2>
      <p className={`text-base md:text-lg xl:text-xl ${primary ? 'text-gray-40' : 'text-gray-dark'}`}>{desc}</p>
      <ul className="py-4">
        <CustomList items={features} primary={primary}/>
      </ul>
      <Link href={'/contact'}>
        <a className={`block text-center w-full py-2 text-base xl:text-lg font-semibold rounded ${primary ? 'bg-white' : 'bg-gray-light'} transition duration-500 transform hover:-translate-y-1`}>
          Skontaktuj się ze mną
        </a>
      </Link>
    </div>
  );
}
 
export default OfferPageItem;