import Link from "next/link";

export function ButtonDownloadCV() {
  return (
    <Link
      href="/CV-LISBOA-BRUNO.pdf"
      target="_blank"
      rel="noopener noreferrer"
      download
      className="py-2 px-4 border-b border-white/30  font-bold hover:border-white/80 transition-all"
    >
      Download my CV
    </Link>
  );
}
