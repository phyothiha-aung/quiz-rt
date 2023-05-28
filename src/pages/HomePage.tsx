import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col h-[450px] gap-4 justify-center items-center">
      <h1 className="text-white font-extrabold text-3xl min-[550px]:text-4xl md:text-6xl">
        Welcome Visitor!
      </h1>
      <p className="text-white text-lg">Time to test your knowledge</p>
      <button onClick={() => navigate("/quiz")} className="btn w-40 px-8 py-3">
        Let's Start
      </button>
    </section>
  );
};

export default HomePage;
