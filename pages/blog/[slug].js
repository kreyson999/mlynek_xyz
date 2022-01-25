import Image from 'next/image';
import { useEffect, useState, useRef } from 'react'
import { getPost, getPosts, REVALIDATE_PAGE_CONTENT } from '../../lib/graphCMS'
import { Carousel, CarouselItem, PostContent, ReadTime } from '../../components'

import throttle from 'lodash.throttle';

const BlogMain = ({post}) => {
  const {createdAt, content, color, images, author} = post
  
  const [alreadyScrolled, setAlreadyScrolled] = useState(0)

  const getProgressWidth = () => {
    let mainHeight = document.documentElement.scrollTop || document.body.scrollTop
    let progressWidth = (mainHeight / (document.body.scrollHeight - document.documentElement.clientHeight)) * 100;
    return progressWidth
  }

  const handleScrollToTop = () => {
    window.scrollTo({top: 0, left:0, behavior: 'smooth'});
  }

  useEffect(() => {
    const setProgressWidth = () => {
      setAlreadyScrolled(getProgressWidth())
    }
    document.addEventListener('scroll', throttle(setProgressWidth, 500))
    return () => document.removeEventListener('scroll', throttle(setProgressWidth, 500))
  }, [])

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 mb-32 gap-y-8 lg:gap-y-0">
      <aside className="px-6 lg:col-span-3">
        <div className="sticky top-8 space-y-4">
          <button onClick={handleScrollToTop} style={{color: color.hex}} className='hidden lg:block font-semibold duration-500 hover:translate-x-2'>Zabierz mnie do góry</button>
          <div className="flex space-x-2">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-yellow-400">
              <Image
              src={author.profilePicture.url}
              alt={author.fullName}
              layout='fill'
              />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">{author.fullName}</p>
              <p className="text-gray-dark">{author.shortDescription}</p>
            </div>
          </div>
          <hr/>
          <div className="space-y-1.5">
            <ReadTime content={content}/>
            <div className="hidden lg:block relative h-2 w-full">
              <div 
              style={{
                background: color.hex,
                width: `${alreadyScrolled}%`
              }}
              className='absolute h-full duration-300'>

              </div>
              <div
              style={{
                background: `${color.hex}33`
              }} 
              className='h-full w-full'></div>
            </div>
          </div>
          <p className="text-gray-dark text-center lg:text-left font-semibold text-base lg:text-sm">{new Date(createdAt).toLocaleString('pl', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })}</p>
        </div>
      </aside>
      <main className="lg:col-start-5 xl:col-start-5 col-span-7 xl:col-span-6">
        <Carousel color={color}>
          {images.map((image, index) => (
            <CarouselItem key={index} image={image.url}/>
          ))}
        </Carousel>
        <div className='mt-6 px-6 lg:px-0 space-y-7'>
          <PostContent content={content} color={color}/>
        </div>
      </main>
    </div>
  );
}

export default function BlogPost({post}) {
  const { title } = post

  return (
    <>
      <header className="container mx-auto px-6 py-12 md:py-16 xl:py-20 space-y-2 flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight font-extrabold text-center uppercase text-custom-black">
          {title}
        </h1>
      </header>
      <BlogMain post={post}/>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug)

  return {
    props: {
      post,
    },
    revalidate: REVALIDATE_PAGE_CONTENT
  }
}

export async function getStaticPaths() {
  const paths = await getPosts()

  return {
    paths: paths.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: 'blocking',
  }
}