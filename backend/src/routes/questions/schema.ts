import { z } from "zod";

export const QuestionsPayload = z.object({
  answers: z.array(
    z.object({
      questionId: z.number(),
      answer: z.any(),
    })
  ),
});
