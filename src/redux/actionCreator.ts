import { ADD_SCORE, NEXT_QUIZ, RETAKE, SELECT_ANSWER } from "./actionType";

export const addScore = () => {
  return {
    type: ADD_SCORE,
  };
};

export const getNextQuiz = () => {
  return {
    type: NEXT_QUIZ,
  };
};

export const retakeQuiz = () => {
  return {
    type: RETAKE,
  };
};

export const selectAnswer = (id: string) => {
  return {
    type: SELECT_ANSWER,
    payload: id,
  };
};
