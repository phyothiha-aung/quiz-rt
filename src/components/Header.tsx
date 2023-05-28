import { motion } from "framer-motion";
import quizLogo from "../assets/quiz-logo.svg";
import { navVarient } from "../data/animation";
const Header = () => {
  return (
    <header className="h-[106px]">
      <motion.div
        variants={navVarient}
        initial="hidden"
        animate="visible"
        className="flex h-[90px] max-w-[1200px] mx-auto items-center px-3 pt-2 md:pt-4"
      >
        <div className="w-[160px]">
          <img
            src={quizLogo}
            alt="quiz logo"
            className="w-full h-full object-contain"
          />
        </div>
        <p className="ml-4 text-base sm:text-xl font-bold text-white border-b border-white pb-2 w-full">
          Exercise Your Brain
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
