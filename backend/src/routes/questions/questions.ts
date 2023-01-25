import { Request, Response, Router } from "express";
import questions from "../../../database/questions.json";
import { QuestionsPayload } from "./schema";
import fs from "fs";
import GenericError from "../../errors/generic-error";

const getAllQuestions = async (req: Request, res: Response) => {
  return res.json(questions);
};

const postAnswers = async (req: Request, res: Response) => {
  const questionsPayload = QuestionsPayload.parse(req.body);
  const data = JSON.stringify(questionsPayload);

  try {
    fs.appendFileSync("./database/database.txt", data);
  } catch (error) {
    throw new GenericError(
      "Something went wrong when trying to write to database...",
      {
        data,
      }
    );
  }

  return res.json(questionsPayload);
};

export const router = Router();

router.get("/", getAllQuestions);
router.post("/", postAnswers);
