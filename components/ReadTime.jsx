import { useState, useEffect } from "react";
import getReadingTime from "../helpers/getReadingTime";

const ReadTime = ({content}) => {
  const [readingTime, setReadingTime] = useState(0)

  useEffect(() => {
    const countWords = () => {
      let currentWords = 0;
      content.raw.children.forEach(child => {
        child.children.forEach(child2 => {
          if (typeof child2.text !== 'string') return
          const wrds = child2.text.split(' ')
          currentWords += wrds.length
        })
      })
      return currentWords
    }
    const wordsNumber = countWords()
    const finalReadingTime = getReadingTime(wordsNumber)
    setReadingTime(finalReadingTime)
  }, [content.raw.children])

  return (
    <p className="text-center font-semibold">{readingTime} minut czytania</p>
  );
}
 
export default ReadTime;