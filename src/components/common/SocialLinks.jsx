import { FaViber, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function SocialLinks({ className = "" }) {
  return (
    <aside aria-label="Social Media Links" className={`flex items-center gap-4 lg:gap-9 ${className}`}>
      <a
        href="viber://chat?number=%2B639389381538"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Viber"
        className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center text-lg hover:bg-blue-600 transition-colors shadow-sm shrink-0"
        >
        <FaViber />
      </a>
      <a
        href="https://www.linkedin.com/in/john-mark-frias-456738371?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center text-lg hover:bg-blue-600 transition-colors shadow-sm shrink-0"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://github.com/johnmarkfrias"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center text-lg hover:bg-blue-600 transition-colors shadow-sm shrink-0"
      >
        <FaGithub />
      </a>
    </aside>
  );
}