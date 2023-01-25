import { useEffect } from "react";
import { QuestionTypeEnum } from "../../../../enums/questionType";
import { QuestionProps } from "./Question.types";

import * as Styled from "./Question.styles";
import {
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

export const Question = ({
  question,
  setQuestionAnswers,
  questionAnswers,
}: QuestionProps) => {
  const questionAnswer = questionAnswers.find(
    (answer) => answer.questionId === question?.id
  );

  const handleTextInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<unknown>,
    isCheckbox?: boolean
  ) => {
    if (!questionAnswer) {
      setQuestionAnswers([
        ...questionAnswers,
        {
          questionId: question?.id,
          answer: isCheckbox
            ? event.target.value === "on"
              ? true
              : false
            : event.target.value,
        },
      ]);
    } else {
      const newQuestionAnswersArr = questionAnswers.map((answer) =>
        answer.questionId === question?.id
          ? {
              questionId: question?.id,
              answer: isCheckbox ? !answer.answer : event.target.value,
            }
          : answer
      );

      setQuestionAnswers(newQuestionAnswersArr);
    }
  };

  useEffect(() => {
    if (
      question?.questionType === QuestionTypeEnum.BOOLEAN &&
      !questionAnswer
    ) {
      setQuestionAnswers([
        ...questionAnswers,
        {
          questionId: question?.id,
          answer: false,
        },
      ]);
    }
  }, [question?.questionType]);

  const inputMapping = () => {
    switch (question?.questionType) {
      case QuestionTypeEnum.BOOLEAN:
        return (
            <Styled.FormControlLabel
              control={
                <Styled.Checkbox
                  checked={questionAnswer?.answer}
                  required={question.mandatory}
                  onChange={(event) => handleTextInputChange(event, true)}
                />
              }
              label={`${question.mandatory && "*"}${question?.question}`}
            />
        );
      case QuestionTypeEnum.TEXT_INPUT:
        return (
          <Styled.TextField
            label={question?.question}
            required={question.mandatory}
            type="text"
            value={questionAnswer?.answer}
            onChange={handleTextInputChange}
          />
        );
      case QuestionTypeEnum.NUMBER_INPUT:
        return (
          <Styled.TextField
            type="number"
            label={question?.question}
            required={question.mandatory}
            value={questionAnswer?.answer}
            onChange={handleTextInputChange}
          />
        );
      case QuestionTypeEnum.DROPDOWN:
        return (
          <Styled.FormControl>
            <InputLabel>
              {question.mandatory ? `*` : ""}
              {question?.question}
            </InputLabel>
            <Styled.Select
              label={question?.question}
              required={question.mandatory}
              value={questionAnswer?.answer}
              onChange={(event) => handleTextInputChange(event)}
            >
              {question.options.map((option) => (
                <Styled.MenuItem key={option} value={option}>
                  {option}
                </Styled.MenuItem>
              ))}
            </Styled.Select>
          </Styled.FormControl>
        );
    }
  };

  return (
    <div>
      <h1>
        {question?.id}. {question?.question}
      </h1>
      {inputMapping()}
      <p>* indicates required</p>
    </div>
  );
};
