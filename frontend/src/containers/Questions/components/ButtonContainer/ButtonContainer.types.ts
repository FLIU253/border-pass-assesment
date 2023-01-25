import { Question } from "../../../../types/question";

export type ButtonContainerProps = {
  currentQuestion: Question | null;
  questionAnswers: Record<string, any>[];
  setNextQuestion: (questionId: number) => void;
  isLastQuestion: boolean;
  postAnswers: () => Promise<void>;
};
