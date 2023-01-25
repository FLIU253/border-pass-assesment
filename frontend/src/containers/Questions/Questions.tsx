import { useEffect } from "react";
import { useQuestion } from "../../hooks/useQuestion";
import { ButtonContainer } from "./components/ButtonContainer";
import { Question } from "./components/Question";
import * as Styled from "./Questions.styles";

export const Questions = () => {
  const {
    questions,
    fetchQuestions,
    currentQuestion,
    setQuestionAnswers,
    questionAnswers,
    setNextQuestion,
    isLoading,
    postAnswers,
    isSubmitted
  } = useQuestion();

  useEffect(() => {
    fetchQuestions();
  }, []);

  const lastQuestion = questions.slice(-1)[0];

  return (
    <Styled.Container>
      {
        isSubmitted && <h1>The questions has been submitted...</h1>
      }
      {
        !currentQuestion && !isLoading && <h1>There are no questions....</h1>
      }
      {!isLoading && currentQuestion && !isSubmitted && (
        <Styled.QuestionContainer>
          <Question
            questionAnswers={questionAnswers}
            question={currentQuestion}
            setQuestionAnswers={setQuestionAnswers}
          />
          <ButtonContainer
            currentQuestion={currentQuestion}
            questionAnswers={questionAnswers}
            setNextQuestion={setNextQuestion}
            isLastQuestion={lastQuestion?.id === currentQuestion.id}
            postAnswers={postAnswers}
          />
        </Styled.QuestionContainer>
      )}
    </Styled.Container>
  );
};
