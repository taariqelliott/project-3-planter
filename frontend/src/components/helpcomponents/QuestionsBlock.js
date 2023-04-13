import QuestionBlock from "./QuestionBlock";

const QuestionsBlock = ({
  quizItem,
  setChosenAnswerItems,
  chosenAnswerItems,
  unansweredQuestionIds,
  setUnansweredQuestionIds,
}) => {
  return (
    <>
      <h2 id={quizItem.id} className="question-title">{quizItem.text}</h2>
      <div className="questions-container">
        {quizItem.questions.map((question, _index) => (
          <QuestionBlock
            key={_index}
            quizItemId={quizItem.id}
            question={question}
            setChosenAnswerItems={setChosenAnswerItems}
            chosenAnswerItems={chosenAnswerItems}
            unansweredQuestionIds={unansweredQuestionIds}
            setUnansweredQuestionIds={setUnansweredQuestionIds}
          />
        ))}
      </div>
    </>
  );
};

export default QuestionsBlock;
