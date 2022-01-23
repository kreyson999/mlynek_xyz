import { useState } from "react";

const FAQItem = ({question, response = 'Nie znaleźliśmy odpowiedzi na to pytanie w naszej bazie danych!'}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickingOnQuestion = () => {
    setIsOpen(state => !state)
  }

  return (
    <div className="w-full py-2 px-4 border-2 rounded-lg flex flex-col">
      <div onClick={handleClickingOnQuestion} className="cursor-pointer w-full flex justify-between items-center">
        <span className="text-lg">{question}</span>
        <svg className={`${isOpen && 'rotate-180'}`} width="30" height="20" viewBox="0 0 50 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 33L2 2L25 18.1739L48 2L25 33Z" stroke="#1A6BE3" strokeWidth="3"/>
        </svg>
      </div>
      {isOpen && (
        <div className="mt-2 text-custom-black">
          {response}
        </div>
      )}
    </div>
  );
}
 
export default FAQItem;