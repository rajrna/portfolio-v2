import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import PortfolioSection from "./components/PortfolioSection";
import VersionIndicator from "./components/VersionIndicator";
import FlickerCanvas from "./components/FlickerCanvas";
import SocialMedia from "./components/SocialMedia";
import Projects from "./components/Projects";
import Arts from "./components/Arts";
// import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Loading from "./components/Loading";

// export default function App() {
//   const [page, setPage] = useState("about");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading delay for demo
//     const timer = setTimeout(() => setLoading(false), 4500);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) return <Loading />;

//   const pageComponents = {
//     about: <PortfolioSection />,
//     projects: <Projects />,
//     arts: <Arts />,
//     // resume: <Resume />,
//     contact: <Contact />,
//   };

//   return (
//     <div className="min-h-screen bg-black relative overflow-hidden">
//       <Navbar active={page} onNav={setPage} />

//       {/* Bordered frame */}
//       <div
//         className="
//           fixed
//           left-6 top-6 right-6 bottom-6
//           border border-white
//           bg-black/95
//           z-10
//           overflow-auto scrollbar-thin
//           min-h-[600px]

//         "
//       >
//         {/* Padding inside bordered box */}
//         <div className="p-10  lg:p-24">{pageComponents[page]}</div>

//         <VersionIndicator />
//         <div className="sticky bottom-10 self-end flex flex-col space-y-6 pl-6">
//           <SocialMedia />
//         </div>
//         <FlickerCanvas />
//       </div>
//     </div>
//   );
// }
export default function App() {
  const [page, setPage] = useState("about");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  const pageComponents = {
    about: <PortfolioSection />,
    projects: <Projects />,
    arts: <Arts />,
    contact: <Contact />,
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navbar active={page} onNav={setPage} />

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className="fixed inset-0 z-50"
          >
            <Loading />
          </motion.div>
        ) : (
          <motion.div
            key="app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed left-6 top-6 right-6 bottom-6 border border-white bg-black/95 z-10 overflow-auto scrollbar-thin min-h-[600px]"
          >
            <div className="p-10 lg:p-24">{pageComponents[page]}</div>
            <VersionIndicator />
            <div className="sticky bottom-10 self-end flex flex-col space-y-6 pl-6">
              <SocialMedia />
            </div>
            <FlickerCanvas />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
