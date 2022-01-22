import { SectionHeader, FAQItem } from ".";

const FrequentlyAskedQuestions = () => {
  return (
    <section className="max-w-screen-lg mx-auto px-6 mb-32">
      <SectionHeader title={"Pytania"} text={`
        Masz jakieś pytanie? Sprawdź, czy nie udzieliliśmy już na nie odpowiedzi poniżej. Jeśli nie znajdziesz to co cię nurtuje nie bój się do nas napisać!
      `}
      withoutMarginBottom={true}
      />
      <div className="space-y-4 mt-12">
        <FAQItem question={'Czy zajmujecie się tworzeniem sklepów internetowych?'}/>
        <FAQItem question={'Czy mogę posiadać bloga na stronie firmy/portfolio?'}/>
        <FAQItem question={'Mam pomysł na ciekawą funkcję, czy możecie ją dodać?'}/>
      </div>
    </section>
  );
}
 
export default FrequentlyAskedQuestions;