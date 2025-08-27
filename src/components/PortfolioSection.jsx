export default function PortfolioSection() {
  return (
    <section className="flex flex-col justify-center h-full pl-64 font-mono text-amber-50">
      <div className="mt-15">
        <div className="mb-4 text-red-500 text-left text-2xl ">Hey, I am</div>
        <h1 className="text-5xl font-bold mb-4 text-left  text-amber-50">
          Raj Rana<span className="text-red-500">.</span>
        </h1>
        <p className="mb-6 text-left text-2xl  text-amber-50">
          I am a software engineer specializing in
          <br />
          creating web and game development.
          <br />
          Currently I am <span className="text-red-500">unemployed.</span>
        </p>
        <p className="mb-6 text-left text-lg leading-relaxed">
          I’m passionate about continuous learning and rapidly adapting to new
          technologies.
          <br />
          When I’m not coding, I immerse myself in game design, digital art, and
          creative storytelling.
        </p>

        <p className="mb-6 text-left text-lg leading-relaxed">
          Currently I am {""}
          {/* Currently I am{" "} */}
          {/* <span className="text-red-500 font-semibold">unemployed</span>, */}
          seeking exciting opportunities to contribute my skills and grow.
        </p>
      </div>

      <div className="mb-8">
        <button className="mt-2 px-6 py-2 border border-red-500 text-white rounded hover:bg-red-500 hover:text-black  transition">
          Contact
        </button>
      </div>

      <br />
      <br />
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-red-500">
          Skills & Technologies
        </h2>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li>JavaScript /</li>
          <li>Node.js / REST APIs</li>
          <li>Unity / Game Development</li>
          <li>Python / </li>
          <li>Version Control (Git, GitHub)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-red-500">
          Interests & Hobbies
        </h2>
        <p className="text-lg leading-relaxed">
          Beyond programming, I am fascinated by pixel art, concept art, and
          exploring virtual worlds. I also enjoy music production and
          experimenting with synth sounds.
        </p>
      </div>
      {/* Work Experience */}
      <h3 className="text-2xl font-bold text-red-500 mb-4 font-mono">
        Work Experience
      </h3>
      <div className="flex flex-col gap-8 font-mono">
        <div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <span className="font-semibold text-lg text-white">
              Frontend Developer
            </span>
            <span className="text-gray-400 text-sm">
              Acme Corp &ndash; Kathmandu, Nepal
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <span className="text-gray-300 text-sm">
              Jan 2024 &ndash; Jul 2025
            </span>
          </div>
          <ul className="list-disc pl-6 mt-2 text-gray-300 text-base leading-relaxed">
            <li>
              Developed and maintained high-performance React applications for
              internal tools and client dashboards.
            </li>
            <li>
              Optimized UI components, reducing load times by 30% and improving
              Lighthouse scores.
            </li>
            <li>
              Collaborated closely with UI/UX designers, backend engineers, and
              QA for rapid agile releases.
            </li>
          </ul>
        </div>

        <div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <span className="font-semibold text-lg text-white">
              Software Engineering Intern
            </span>
            <span className="text-gray-400 text-sm">
              TechLabs &ndash; Remote
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <span className="text-gray-300 text-sm">
              Jun 2023 &ndash; Dec 2023
            </span>
          </div>
          <ul className="list-disc pl-6 mt-2 text-gray-300 text-base leading-relaxed">
            <li>
              Built core features for a real-time game analytics dashboard using
              TypeScript and React.
            </li>
            <li>
              Wrote unit and integration tests, boosting code coverage from 60%
              to 88%.
            </li>
            <li>
              Assisted in debugging production issues and writing clear
              documentation for new modules.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
