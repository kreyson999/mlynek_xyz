import SmallCircle from "../components/SmallCircle";

const CustomList = ({items, primary}) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className={`flex items-center text-gray-dark space-x-2 text-base xl:text-lg ${primary ? 'text-gray-40' : 'text-gray-dark'}`}>
          <SmallCircle/>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
 
export default CustomList;