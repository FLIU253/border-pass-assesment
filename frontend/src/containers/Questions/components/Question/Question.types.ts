import { Question } from "../../../../types/question";

export type QuestionProps = {
  question: Question | null;
  setQuestionAnswers: React.Dispatch<
    React.SetStateAction<Record<string, any>[]>
  >;
  questionAnswers: Record<string, any>[];
};
