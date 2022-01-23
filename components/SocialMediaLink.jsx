import Image from 'next/image'

const SocialMediaLink = ({link, title, icon, platfrom = 'social mediach'}) => {
  return (
    <a href={link} className="flex items-center space-x-2 px-2 py-2 border-2 border-blue-light rounded-xl transition duration-500 transform hover:translate-x-1">
      <div className="grid place-content-center">
        <Image
          src={icon}
          alt={`Skontaktuj się ze mną na ${platfrom}`}
          width={28}
          height={28}
          priority
        />
      </div>
      <span className="text-lg sm:text-base md:text-lg">{title}</span>
    </a>
  );
}
 
export default SocialMediaLink;