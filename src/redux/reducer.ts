import { StateType } from "../data/types";
import { ADD_SCORE, NEXT_QUIZ, RETAKE, SELECT_ANSWER } from "./actionType";
import quizQuestions from "../data/quizQuestions";

const initialState: StateType = {
  quizQuestions,
  currentQuizIndex: 0,
  score: 0,
  selectedAnswer: "",
};

const reducer = (
  state: StateType = initialState,
  action: { type: string; payload?: string }
) => {
  switch (action.type) {
    case ADD_SCORE:
      return { ...state, score: state.score + 1 };
    case NEXT_QUIZ:
      return {
        ...state,
        currentQuizIndex: state.currentQuizIndex + 1,
        selectedAnswer: "",
      };
    case RETAKE:
      return initialState;
    case SELECT_ANSWER:
      return {
        ...state,
        selectedAnswer: action.payload,
        score:
          quizQuestions[state.currentQuizIndex].correct_answer == action.payload
            ? state.score + 1
            : state.score,
      };
    default:
      return state;
  }
};

export default reducer;
