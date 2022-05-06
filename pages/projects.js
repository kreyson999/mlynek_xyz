import Head from "next/head";
import { Carousel, CarouselItem, SectionHeader } from "../components";
import { getProjects, REVALIDATE_PAGE_CONTENT } from "../lib/graphCMS";


const Project = ({project}) => {
  const { name, description, images, url, color } = project
  return (
    <section className="flex flex-col w-full py-12">
      <Carousel color={color}>
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            image={image.url}
            alt={`Screenshot of ${name} website`}
          />
        ))}
      </Carousel>
      <div className="px-6 max-w-screen-md mx-auto mt-16 mb-48">
        <SectionHeader
        title={name}
        withoutMarginTop={true}
        withoutMarginBottom={true}
        left={true}
        />
        <p className="text-base md:text-lg">{description}</p>
      </div>
    </section>
  )
}

export default function Projects({projects}) {
  return (
    <>
      <Head>
        <title>MLYNEK.XYZ - Realizacje</title>
        <meta name="description" content={`
          Znajdziesz tutaj nasze ostatnie realizacje.
        `}/>
        <meta property="og:title" content="MLYNEK.XYZ - Realizacje" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mlynek.xyz/projects" />
        <meta property="og:description" 
          content={`
          Znajdziesz tutaj nasze ostatnie realizacje.
        `}/>
      </Head>
      <header className="container mx-auto px-6 py-12 md:py-16 xl:py-20 space-y-2 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-extrabold text-center uppercase text-custom-black">
          Realizacje
        </h1>
        <p className="text-center text-base lg:text-lg xl:text-xl max-w-xl text-custom-black">
          Tutaj znajdziesz nasze ostatnie projekty.
        </p>
      </header>
      {projects.map((project, index) => (
        <Project key={index} project={project}/>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const projects = await getProjects()

  return {
    props: {
      projects,
    },
    revalidate: REVALIDATE_PAGE_CONTENT,
  }
}