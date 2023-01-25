import { QuestionTypeEnum } from "../enums/questionType";

export type Question = {
    question: string;
    questionType: QuestionTypeEnum,
    options: string[],
    mandatory: boolean,
    id: number
}