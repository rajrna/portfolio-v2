import { useState } from "react";
import Navbar from "./components/Navbar";
import PortfolioSection from "./components/PortfolioSection";
import ScrollIndicator from "./components/ScrollIndicator";
import FlickerCanvas from "./components/FlickerCanvas";
import SocialMedia from "./components/SocialMedia";
import { Projects } from "./components/Projects";
import Arts from "./components/Arts";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function App() {
  const [page, setPage] = useState("about");

  const pageComponents = {
    about: <PortfolioSection />,
    projects: <Projects />,
    arts: <Arts />,
    resume: <Resume />,
    contact: <Contact />,
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navbar active={page} onNav={setPage} />

      {/* Bordered frame */}
      <div
        className="
          fixed
          left-6 top-6 right-6 bottom-6
          border border-white
          bg-black/95
          z-10
          overflow-auto scrollbar-thin
          min-h-[600px]
        "
      >
        {/* Padding inside bordered box */}
        <div className="p-10 md:p-16 lg:p-24">{pageComponents[page]}</div>

        <ScrollIndicator />
        <div className="sticky bottom-10 self-end flex flex-col space-y-6 pl-6">
          <SocialMedia />
        </div>
        <FlickerCanvas />
      </div>
    </div>
  );
}
