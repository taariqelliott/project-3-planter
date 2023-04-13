const QuestionBlock = ({
  question,
  quizItemId,
  setChosenAnswerItems,
  chosenAnswerItems,
  unansweredQuestionIds,
  setUnansweredQuestionIds,
}) => {
    
  const handleClick = () => {
    setChosenAnswerItems((prevState) => [...prevState, question.text]);
    setUnansweredQuestionIds(unansweredQuestionIds.filter((id) => id !== quizItemId));
  };

  const validPick = !chosenAnswerItems?.includes(question.text) && !unansweredQuestionIds?.includes(quizItemId);

  return (
    <button
      onClick={handleClick}
      className="question-block"
      disabled={validPick}
    >
      <img src={question.image} alt={question.alt} />
      <h3>{question.text}</h3>
      <p>{question.alt}</p>
    </button>
  );
};

export default QuestionBlock;
