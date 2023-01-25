import { useState } from "react";
import { getAllQuestions, postAnswersToQuestions } from "../api/question";
import { Question } from "../types/question";
import { useToast } from "../stores/toast";

export const useQuestion = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [questionAnswers, setQuestionAnswers] = useState<Record<string, any>[]>(
    []
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fetchQuestions = async () => {
    try {
      setIsLoading(true);
      const { data } = await getAllQuestions();

      setQuestions(data);
      setCurrentQuestion(data[0]);
    } catch (error: Error | any | unknown) {
      toast.open({
        message: "Oops! Something went wrong when trying to fetch the questions",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const postAnswers = async () => {
    try {
      setIsLoading(true);
      await postAnswersToQuestions(questionAnswers);
      setIsSubmitted(true);
      toast.open({
        message: "Successfully submitted the answers!",
        type: "success",
      });
    } catch (error: Error | any | unknown) {
      toast.open({
        message: "Oops! Something went wrong when trying to submit answers",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const setNextQuestion = (questionId: number) => {
    const newQuestion = questions.find(
      (question) => question.id === questionId
    )!;
    setCurrentQuestion(newQuestion);
  };

  return {
    isLoading,
    questions,
    fetchQuestions,
    currentQuestion,
    setQuestionAnswers,
    questionAnswers,
    setNextQuestion,
    postAnswers,
    isSubmitted,
  };
};
