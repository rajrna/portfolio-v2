import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="absolute left-10 bottom-10 flex flex-col space-y-6 z-30">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-red-500 transition text-3xl"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-red-500 transition text-3xl"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}
