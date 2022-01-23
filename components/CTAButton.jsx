import Link from "next/link";

const CTAButton = () => {
  return (
    <Link href={'/projects'}>
      <a className="font-semibold bg-blue-dark text-white px-4 md:px-8 py-2 xl:py-3 rounded-full hover:bg-blue-light duration-300">Realizacje</a>
    </Link>
  );
}
 
export default CTAButton;