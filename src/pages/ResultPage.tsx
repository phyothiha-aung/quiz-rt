import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StateType } from "./../data/types";
import { retakeQuiz } from "../redux/actionCreator";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import download from "downloadjs";

const ResultPage = () => {
  const { score, quizQuestions } = useSelector((state: StateType) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const handleDownload = async () => {
    const cardElement = cardRef.current;
    if (!cardElement) return;

    const options = {
      width: cardElement.offsetWidth,
      height: cardElement.offsetHeight,
      scale: window.devicePixelRatio,
      useCORS: true,
    };

    const canvas = await html2canvas(cardElement, options);
    const dataURL = canvas.toDataURL("image/png");
    download(dataURL, "quiz-score.png", "image/png");
  };
  return (
    <section className="flex flex-col justify-center items-center ">
      <div
        ref={cardRef}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          color: "white",
          border: "1px solid white",
          padding: "20px",
          borderRadius: "15px",
          backgroundColor: "#c026d3",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "bolder",
            lineHeight: "36px",
          }}
        >
          Congratulations
        </h1>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "28px",
          }}
        >
          Your score is {score} out of {quizQuestions.length}
        </p>
        <p style={{ fontSize: "14px", lineHeight: "20px" }}>
          Keep up with good work
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => {
            dispatch(retakeQuiz());
            navigate("/");
          }}
          className="btn w-28 px-5 py-1 sm:w-36 sm:px-6 sm:py-2"
        >
          Retake
        </button>
        <button
          onClick={handleDownload}
          className="btn w-28 px-5 py-2 sm:w-36 sm:px-6 "
        >
          Download
        </button>
      </div>
    </section>
  );
};

export default ResultPage;
