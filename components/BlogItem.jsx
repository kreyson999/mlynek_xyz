import Link from "next/link";

const BlogItem = () => {
  return (
    <Link href={'/'}>
      <a className="relative text-center flex flex-col justify-around aspect-square	bg-red-400 rounded-xl transition duration-500 transform hover:-translate-y-1">
        <h3 className="opacity-80 text-xl uppercase">Projekty</h3>
        <h2 className="text-2xl font-bold opacity-80">Jak zbudowaliśmy bloga KJMM.PL</h2>
        <button className="text-lg">Przeczytaj</button>
      </a>
    </Link>
  );
}
 
export default BlogItem;