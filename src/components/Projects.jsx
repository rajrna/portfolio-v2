const projects = [
  {
    stack: "React JS CSS",
    title: "My Portfolio",
    desc: "Personal portfolio site showcasing my work, built with React and custom CSS.",
    links: [
      {
        label: "Github",
        href: "https://github.com/yourname/portfolio",
        type: "github",
      },
    ],
  },
  {
    stack: "Unity C#",
    title: "Tower Defense Game",
    desc: "A 2D tower defense game with unique enemies and upgrades, built in Unity.",
    links: [{ label: "Demo", href: "https://yourgame.demo", type: "live" }],
  },
  {
    stack: "HTML CSS JavaScript PHP",
    title: "TaskMate",
    desc: "A simple task management web app to organize and track daily tasks.",
    links: [
      {
        label: "Github",
        href: "https://github.com/rajrna/TaskMate",
        type: "github",
      },
    ],
  },
  {
    stack: "React Node.js MongoDB",
    title: "MerchVault",
    desc: "A e-commerce web app with product listings, user auth, and shopping cart.",
    links: [
      {
        label: "Github",
        href: "https://github.com/rajrna/MerchVault",
        type: "github",
      },
    ],
  },
  {
    stack: "React Spring Boot Python PostgreSQL",
    title: "VisuoFind",
    desc: "A visual search engine using image and text embeddings for accurate results.",
    links: [
      {
        label: "Github",
        href: "https://github.com/rajrna/AI-Search-Recommendation",
        type: "github",
      },
    ],
  },
  {
    stack: "Python",
    title: "Relay",
    desc: "An AI agent for automating tasks using natural language commands. Under Construction.",
    links: [
      {
        label: "Github",
        href: "https://github.com/yourname/api-boilerplate",
        type: "github",
      },
    ],
  },
  // ...add more projects here
];

const buttonColors = {
  github: "border-red-500 text-red-500 hover:bg-red-500 hover:text-black",
  live: "border-white text-white hover:bg-white hover:text-black",
};

export default function Projects() {
  return (
    <section className="w-full max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-mono font-bold mb-8 text-left text-amber-50">
        <span className="text-red-500">#</span>projects
      </h2>
      <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <div
            key={proj.title}
            className="border border-white/50 rounded-md px-6 py-5 flex flex-col min-h-[220px] bg-black/60 hover:border-red-500 transition duration-200"
          >
            <div className="text-xs tracking-widest text-gray-400 mb-1 font-mono">
              {proj.stack}
            </div>
            <div className="font-bold text-lg mb-2 text-white font-mono">
              {proj.title}
            </div>
            <div className="flex-grow text-gray-200 mb-4 text-sm font-mono">
              {proj.desc}
            </div>
            <div className="flex gap-3">
              {proj.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block px-4 py-1 border rounded font-mono text-xs transition ${
                    buttonColors[link.type]
                  }`}
                >
                  {link.label} <span className="align-middle">&lt;&gt;</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
