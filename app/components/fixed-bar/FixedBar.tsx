import Link from "next/link";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export function FixedBar() {
  return (
    <div className="fixed top-1/2 border-t border-r border-b border-orange-950 z-50 rounded-sm">
      <Link
        href="https://github.com/br1lisboa"
        target="_blank"
        rel="noopener noreferrer"
        className="flex space-x-3 items-center  bg-black/50 p-4 hover:bg-black/90 hover:animate-pulse"
      >
        <FaGithubAlt />
      </Link>

      <Link
        href="https://www.linkedin.com/in/bruno-lisboa-/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex space-x-3 items-center  bg-blue-600/50 p-4 hover:bg-blue-600/90 hover:animate-pulse"
      >
        <FaLinkedinIn />
      </Link>
    </div>
  );
}
