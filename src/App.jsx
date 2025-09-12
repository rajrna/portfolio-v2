import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import PortfolioSection from "./components/PortfolioSection";
import VersionIndicator from "./components/VersionIndicator";
import FlickerCanvas from "./components/FlickerCanvas";
import SocialMedia from "./components/SocialMedia";
import Projects from "./components/Projects";
import Arts from "./components/Arts";
import Contact from "./components/Contact";
import Loading from "./components/Loading";
import TypeWriter from "./components/TypeWriter";
import Clock from "./components/Clock";

const NAVBAR_HEIGHT = "3.5rem";
const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -24, transition: { duration: 0.4, ease: "easeIn" } },
};

export default function App() {
  const [page, setPage] = useState("about");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const pageComponents = {
    about: <PortfolioSection />,
    projects: <Projects />,
    arts: <Arts />,
    contact: <Contact />,
  };

  if (loading)
    return (
      <motion.div
        key="loading"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6 } }}
        className="fixed inset-0 z-50"
      >
        <Loading />
      </motion.div>
    );

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navbar active={page} onNav={setPage} />
      <div className="fixed left-6 top-6 right-6 bottom-6 border border-white bg-black/95 z-10 overflow-auto scrollbar-thin min-h-[600px] flex flex-col ">
        <Clock />
        <div
          className="pointer-events-none absolute left-0 right-0 top-0 h-16 z-20"
          style={{
            background:
              "linear-gradient(to bottom, #000 65%, rgba(0,0,0,0) 100%)",
            backdropFilter: "blur(5px)",
          }}
        />
        <div className="p-10 lg:p-24 flex-1 pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="h-full"
              style={{ minHeight: "100%" }}
            >
              {pageComponents[page]}
            </motion.div>
          </AnimatePresence>
        </div>
        <VersionIndicator />
        <div className="sticky left-8 bottom-8 z-30">
          <SocialMedia />
        </div>
        <FlickerCanvas />
      </div>
    </div>
  );
}
