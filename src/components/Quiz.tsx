import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { getNextQuiz, selectAnswer } from "../redux/actionCreator";
import { StateType } from "../data/types";
import { buttonVarient } from "../data/animation";

const Quiz = () => {
  const {
    currentQuizIndex: index,
    selectedAnswer,
    quizQuestions,
  } = useSelector((state: StateType) => state);
  const [timeLeft, setTimeLeft] = useState(59);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isCorrect = (id: string) => {
    return quizQuestions[index].correct_answer == id;
  };

  const onSelectItem = (id: string) => {
    dispatch(selectAnswer(id));
  };

  const onPressNext = () => {
    setTimeLeft(59);
    dispatch(getNextQuiz());
  };

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    if (selectedAnswer || timeLeft <= 0) clearInterval(interval);
    return () => clearInterval(interval);
  }, [selectedAnswer, timeLeft]);

  return (
    <section className="flex flex-col justify-start text-white p-5">
      <div className="flex flex-col sm:flex-row max-w-[560px] ">
        <div className=" w-full sm:w-1/2 p-2">
          <p>
            <span className="text-3xl">{index + 1}</span>
            <span className="text-sm text-gray-300">
              /{quizQuestions.length}
            </span>
            <span
              className={`ml-3 ${timeLeft ? "text-green-300" : "text-red-600"}`}
            >
              {timeLeft ? `time : ${timeLeft}s` : "Time Out"}
            </span>
          </p>
          <h1 className="text-xl mt-2">{quizQuestions[index].question}</h1>
        </div>
        <div className="flex flex-col w-full sm:w-1/2 gap-3 p-2 pt-5">
          {quizQuestions[index].choices.map((option) => (
            <p
              key={option.id}
              onClick={() =>
                selectedAnswer || !timeLeft ? null : onSelectItem(option.id)
              }
              className={`border  p-2 rounded-lg text-base cursor-pointer ${
                selectedAnswer || !timeLeft ? "" : "hover:border-blue-400"
              } ${
                selectedAnswer && isCorrect(option.id)
                  ? "border-green-300 text-green-300"
                  : selectedAnswer == option.id
                  ? "border-red-400 text-red-400"
                  : "text-white"
              }`}
            >
              {option.value}
            </p>
          ))}
        </div>
      </div>
      <div className="mr-2 w-32 h-16 self-end">
        {(selectedAnswer || !timeLeft) && (
          <motion.div
            variants={buttonVarient}
            initial="hidden"
            animate="visible"
          >
            <button
              onClick={() =>
                index + 1 < quizQuestions.length
                  ? onPressNext()
                  : navigate("/result")
              }
              className="btn w-32 px-6 py-2"
            >
              {index + 1 < quizQuestions.length ? "Next" : "Finish"}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Quiz;
