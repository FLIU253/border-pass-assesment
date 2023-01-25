import * as Styled from "./ButtonContainer.styles";
import { ButtonContainerProps } from "./ButtonContainer.types";

export const ButtonContainer = ({
  currentQuestion,
  questionAnswers,
  setNextQuestion,
  isLastQuestion,
  postAnswers,
}: ButtonContainerProps) => {
  const answer = questionAnswers.find(
    (answer) => answer.questionId === currentQuestion?.id
  )?.answer;
  const hasAnswer = answer !== undefined && answer !== null && answer !== "";

  return (
    <Styled.Container>
      {currentQuestion?.id !== 1 && (
        <Styled.Button
          variant="outlined"
          onClick={() => setNextQuestion(currentQuestion!.id - 1)}
        >
          Previous
        </Styled.Button>
      )}
      {!isLastQuestion ? (
        <Styled.Button
          variant="contained"
          disabled={!hasAnswer && currentQuestion?.mandatory}
          onClick={() => setNextQuestion(currentQuestion!.id + 1)}
        >
          Next
        </Styled.Button>
      ) : (
        <Styled.Button
          variant="contained"
          disabled={!hasAnswer && currentQuestion?.mandatory}
          onClick={postAnswers}
        >
          Submit
        </Styled.Button>
      )}
    </Styled.Container>
  );
};
