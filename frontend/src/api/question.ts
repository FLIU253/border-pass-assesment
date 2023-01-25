import axios from "axios";

export const getAllQuestions = async () =>
  axios.get("http://localhost:3001/questions");

export const postAnswersToQuestions = async (body: Record<string, any>[]) => {

    console.log("body: ", body)
    return   axios.post("http://localhost:3001/questions", {
        answers: body,
      });
    
}