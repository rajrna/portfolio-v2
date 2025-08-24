// Remove internal state; accept active & onNav from props for synchronization
const links = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Arts", id: "arts" },
  // { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

export default function Navbar({ active, onNav }) {
  return (
    <nav className="fixed top-4 right-10 flex gap-4 px-4 py-2 z-20 text-xl font-mono">
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => onNav(link.id)}
          className={`
             px-3 py-1 rounded-t rounded-b
             border-t-2 border-b-2 border-transparent
             transition-colors duration-200
            ${
              active === link.id
                ? "text-red-500 border-red-500"
                : "text-gray-200 hover:text-red-500 hover:border-red-500"
            }
          `}
        >
          {link.label}
        </button>
      ))}
    </nav>
  );
}
