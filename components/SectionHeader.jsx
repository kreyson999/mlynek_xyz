const SectionHeader = ({title, text, withoutMarginTop, withoutMarginBottom, left}) => {
  return (
    <div className={`flex flex-col text-custom-black ${left ? 'items-left text-left' : 'items-center text-center'} ${!withoutMarginBottom && 'mb-10 lg:mb-16 xl:mb-24'} ${!withoutMarginTop && 'mt-20 lg:mt-32 xl:mt-44'}`}>
      <h2 className="relative w-fit text-2xl lg:text-3xl xl:text-4xl font-extrabold uppercase leading-3 lg:leading-3 xl:leading-very-tight pb-2 after:w-5/6 after:inline-block after:relative after:border-b-2 after:border-blue-light">
        {title}
      </h2>
      {text && <p className="text-base lg:text-lg xl:text-xl max-w-xl">{text}</p>}
    </div>
  );
}
 
export default SectionHeader;