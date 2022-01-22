import { CustomList } from ".";

const OfferPageItem = ({title, desc, features, primary}) => {
  return (
    <div className={`py-6 px-6 space-y-2 xl:space-y-4 ${primary ? 'bg-blue-dark' : 'bg-gray-40'}`}>
      <h2 className={`font-extrabold text-2xl md:text-3xl xl:text-4xl ${primary ? 'text-white' : 'text-black'}`}>{title}</h2>
      <p className={`text-base md:text-lg xl:text-xl ${primary ? 'text-gray-40' : 'text-gray-dark'}`}>{desc}</p>
      <ul className="py-4">
        <CustomList items={features} primary={primary}/>
      </ul>
      <button className={`w-full py-2 text-base xl:text-lg font-semibold rounded ${primary ? 'bg-white' : 'bg-gray-light'}`}>
        Skontaktuj się z nami
      </button>
    </div>
  );
}
 
export default OfferPageItem;