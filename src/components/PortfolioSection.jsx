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
              Backend Intern
            </span>
            <span className="text-gray-400 text-sm">
              XDezo &ndash; Pokhara, Nepal
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <span className="text-gray-300 text-sm">
              Feb 2025 &ndash; Apr 2025
            </span>
          </div>
          <ul className="list-disc pl-6 mt-2 text-gray-300 text-base leading-relaxed">
            <li>
              Developed backend features for an online auction platform using
              Java Spring Boot and PostgreSQL.
            </li>
            <li>
              Implemented RESTful APIs for product listings, bidding, and user
              authentication.
            </li>
            <li>
              Integrated database operations for real-time bid tracking and
              order management.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
