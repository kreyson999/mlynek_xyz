import Link from 'next/link'
import Image from 'next/image'

const OfferItem = ({title, text}) => {
  return (
    <div className='bg-blue-dark px-4 lg:px-3 xl:px-5 py-6 lg:py-8 xl:py-12 flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 lg:gap-0 '>
      <div className='w-1/2 sm:w-1/2 lg:w-full'>
        <Image
        src={"/images/offer_item.svg"}
        alt={title}
        width={640}
        height={360}
        />
      </div>
      <div className='text-center text-white lg:mt-8 flex flex-col items-center w-full'>
        <h3 className='text-xl lg:text-2xl xl:text-2.5xl font-extrabold uppercase'>
          {title}
        </h3>
        <p className='text-normal xl:text-lg mt-1 xl:mt-2'>{text}</p>
        <Link href={`/offer`}>
          <a className='bg-white text-black w-fit font-semibold w-1/2 px-4 md:px-8 py-2 text-lg mt-6 xl:mt-8 transition duration-500 transform hover:-translate-y-1'>
            Więcej
          </a>
        </Link>
      </div>
    </div>
  );
}
 
export default OfferItem;