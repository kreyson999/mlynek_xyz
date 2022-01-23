import { SectionHeader, FAQItem } from ".";

const FrequentlyAskedQuestions = ({ questions }) => {
  return (
    <section className="max-w-screen-lg mx-auto px-6 mb-32">
      <SectionHeader title={"Pytania"} text={`
        Masz jakieś pytanie? Sprawdź, czy nie udzieliliśmy już na nie odpowiedzi poniżej. Jeśli nie znajdziesz to co cię nurtuje nie bój się do nas napisać!
      `}
      withoutMarginBottom={true}
      />
      <div className="space-y-4 mt-12">
        {questions.map(({ question, description }, index) => ( 
        <FAQItem key={index} question={question} response={description}/>
        ))}
      </div>
    </section>
  );
}
 
export default FrequentlyAskedQuestions;