import { useEffect, useState } from "react";

const AnswerBlock = ({ answerOptions, chosenAnswers }) => {
  // initialize state to keep track of the result to display to the user
  const [result, setResult] = useState(null);

  useEffect(() => {
    // iterate over each answer option and check if the user's chosen answers match the combination
    answerOptions.forEach((answer) => {
      if (
        // check if all three combination values exist in the chosenAnswers array using the "includes" method
        chosenAnswers?.includes(answer.combination[0]) &&
        chosenAnswers?.includes(answer.combination[1]) &&
        chosenAnswers?.includes(answer.combination[2])
      ) {
        // if the combination matches, set the result state to the current answer option
        setResult(answer);
      } else if (!result) {
        // if no combination matches and there is no existing result, select a random answer option
        // generate a random index to select a random answer option from the answerOptions array
        const randomIndex = Math.floor(Math.random() * answerOptions.length);
        // set the result state to the randomly selected answer option
        setResult(answerOptions[randomIndex]);
      }
    });
  }, [result]);

  // log the current result state to the console for debugging purposes
  console.log(result);

  return (
    // render the answer block with the result text and image
    <div id="answer-block" className="answer-block">
      <h4>{result?.text}</h4>
      <img src={result?.image} />
    </div>
  );
};

export default AnswerBlock;
