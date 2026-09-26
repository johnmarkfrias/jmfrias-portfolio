import { Link } from "react-router-dom";

export default function ProjectCTA() {
  return (
    <section className="mt-16 sm:mt-24 p-8 sm:p-10 rounded-3xl bg-blue-50/70 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-left">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
          Have a project or design in mind?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          Let's discuss your web development requirements, UI layouts, and branding assets.
        </p>
      </div>
      <Link
        to="/contact"
        className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all shadow-xs shrink-0"
      >
        Get In Touch
      </Link>
    </section>
  );
}