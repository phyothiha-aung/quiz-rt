export interface OptionType {
  id: string;
  value: string;
}

export interface QuizType {
  id: string;
  question: string;
  choices: OptionType[];
  correct_answer: string;
}

export interface StateType {
  quizQuestions: QuizType[];
  currentQuizIndex: number;
  score: number;
  selectedAnswer: string;
}
