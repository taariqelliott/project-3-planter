// Importing required components and dependencies
import Title from "../components/helpcomponents/Title";
import { useEffect, useState } from "react";
import QandA from "../components/helpcomponents/QuestionAndAnswerDB";
import QuestionsBlock from "../components/helpcomponents/QuestionsBlock";
import AnswerBlock from "../components/helpcomponents/AnswerBlock";
import "../pages/Help.css";

// Defining the main component, Help
const Help = () => {
  // Initializing state variables using the useState hook
  const [quiz, setQuiz] = useState(false);
  const [chosenAnswerItems, setChosenAnswerItems] = useState([]);
  const [unansweredQuestionIds, setUnansweredQuestionIds] = useState([null]);
  const [showAnswer, setShowAnswer] = useState(false);

  // Function to fetch the QandA data and set the quiz state variable
  const fetchData = () => {
    try {
      setQuiz(QandA);
      console.log(QandA);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect hook to call the fetchData function once when the component is mounted
  useEffect(() => {
    fetchData();
  }, []);

  // useEffect hook to set the unansweredQuestionIds state variable with the list of question ids from the QandA data
  useEffect(() => {
    const unansweredIds = quiz.quiz?.content?.map(({ id }) => id);
    setUnansweredQuestionIds(unansweredIds);
  }, [quiz]);

  // useEffect hook to handle scrolling to the answer block or to the highest unanswered question
  useEffect(() => {
    if (unansweredQuestionIds) {
      if (unansweredQuestionIds.length <= 0 && chosenAnswerItems.length >= 1) {
        // If there are no unanswered questions and at least one answer has been chosen, scroll to the answer block
        setShowAnswer(true);
        const answerBlock = document.getElementById("answer-block");
        answerBlock?.scrollIntoView({ behavior: "smooth" });
      }
      // Otherwise, scroll to the highest unanswered question
      const highestId = Math.min(...unansweredQuestionIds);
      const highestElement = document.getElementById(highestId);
      highestElement?.scrollIntoView({ behavior: "smooth" });
    }
  }, [unansweredQuestionIds, showAnswer, chosenAnswerItems]);

  // Debugging console logs
  // console.log(quiz);
  // console.log(chosenAnswerItems);
  // console.log(unansweredQuestionIds);

  // Returning the JSX code for the Help component
  return (
    <div className="app">
      {quiz && quiz.quiz && (
        <div className="all">
          <Title title={quiz.quiz.title} subtitle={quiz.quiz.subtitle} />
          {quiz?.quiz.content?.map((contentItem) => (
            <QuestionsBlock
              key={contentItem.id}
              quizItem={contentItem}
              setChosenAnswerItems={setChosenAnswerItems}
              chosenAnswerItems={chosenAnswerItems}
              unansweredQuestionIds={unansweredQuestionIds}
              setUnansweredQuestionIds={setUnansweredQuestionIds}
            />
          ))}
          {showAnswer && (
            <AnswerBlock
              answerOptions={quiz.quiz.answers}
              chosenAnswerItems={chosenAnswerItems}
            />
          )}
        </div>
      )}
    </div>
  );
};

// Exporting the Help component as the default export of this module
export default Help;
