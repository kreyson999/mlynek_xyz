const DifferenceItem = ({title, text, borderStyles}) => {
  return (
    <div className={`text-center p-8 border-gray-dark ${borderStyles}`}>
      <h4 className="font-bold text-xl sm:text-2xl text-blue-dark mb-1">{title}</h4>
      <h4 className="sm:text-lg">{text}</h4>
    </div>
  );
}
 
export default DifferenceItem;