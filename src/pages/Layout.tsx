import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Header";
import AnimatedOutlet from "../components/AnimatedOutlet";
import { pageVarient } from "../data/animation";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  return (
    <div className="w-full h-screen bg-gradient-to-br from-fuchsia-300 to-fuchsia-900 overflow-hidden">
      <Header />
      <main className="flex h-3/4 justify-center items-center px-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVarient}
            initial="hidden"
            animate="visible"
            exit={{ x: "-100vw" }}
          >
            <AnimatedOutlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Layout;
