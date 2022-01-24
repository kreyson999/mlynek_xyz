import BlogItem from "../../components/BlogItem";
import { getPosts, REVALIDATE_PAGE_CONTENT } from '../../lib/graphCMS'

function BlogPage({posts}) {
  return (
    <>
      <header className="container mx-auto px-6 py-12 md:py-16 xl:py-20 space-y-2 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-extrabold text-center uppercase text-custom-black">
          Blog
        </h1>
        <p className="text-center text-base lg:text-lg xl:text-xl max-w-xl text-custom-black">
          Znajdziesz tutaj nasze przemyślenia, poradniki oraz proces tworzenia niektórych projektów.
        </p>
      </header>
      <section className="mx-auto max-w-screen-lg grid grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <BlogItem post={post} key={index}/>
        ))}
      </section>
    </>
  );
}

export default BlogPage;

export async function getStaticProps() {
  const posts = await getPosts()

  return {
    props: {
      posts
    },
    revalidate: REVALIDATE_PAGE_CONTENT
  }
}