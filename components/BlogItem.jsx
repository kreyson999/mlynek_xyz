import Image from "next/image";
import Link from "next/link";

const BlogItem = ({post}) => {
  const { slug, images, title, createdAt, color} = post
  return (
    <Link href={`/blog/${slug}`}>
      <a className="relative text-center flex flex-col transition duration-500 transform hover:-translate-y-1">
        <div 
          className="md:w-unset aspect-video rounded-xl" 
          style={{
            border: `3px solid ${color.hex}`,
            background: color.hex,
            boxShadow: `0px 0px 20px ${color.hex}59`
          }}>
          <div className="relative w-full h-full ">
              <Image
              src={images[0].url}
              layout="fill"
              alt="Laptop Design"
              className="object-contain rounded-xl"
              priority
            />
          </div>
        </div>
        <div className="py-2 px-2">
          <h2 className="font-semibold text-lg">{title}</h2>
          <p className="mt-0.5 text-gray-dark font-semibold text-sm">{new Date(createdAt).toLocaleString('pl', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })}</p>
        </div>
      </a>
    </Link>
  );
}
 
export default BlogItem;