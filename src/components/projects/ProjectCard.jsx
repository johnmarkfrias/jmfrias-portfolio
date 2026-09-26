import { cleanString } from "../../utils/textUtils";

export default function ProjectCard({ project, onOpenLightbox }) {
  const cleanCat = cleanString(project.category);
  const isGraphic = cleanCat === "graphicdesign" || cleanCat === "graphics";
  const isUiUx = cleanCat === "uiux" || cleanCat === "ui";
  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl.trim() !== "");

  let actionLabel = "View Site";
  if (isGraphic) {
    actionLabel = "View Image";
  } else if (isUiUx) {
    actionLabel = "View Figma";
  }

  const cardInnerContent = (
    <>
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white flex items-center justify-center p-3">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="max-w-full max-h-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out pointer-events-none"
        />

        {/* Uniform Action Pill across all project types */}
        <div className="absolute bottom-3 right-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-blue-600 shadow-md">
            <span>{actionLabel}</span>
            {isGraphic ? (
              <svg
                className="w-3.5 h-3.5 stroke-[2] transition-transform duration-200 group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                />
              </svg>
            ) : (
              <svg
                className="w-3.5 h-3.5 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            )}
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
          {project.description}
        </p>
        {project.tags && (
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-100/70 group-hover:text-blue-700 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );

  const cardContainerClass =
    "group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_-8px_rgba(35,95,247,0.14)] hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col h-full";

  return (
    <div className="h-full">
      {isGraphic ? (
        <div
          onClick={onOpenLightbox}
          className={`${cardContainerClass} cursor-pointer select-none`}
        >
          {cardInnerContent}
        </div>
      ) : hasLiveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${cardContainerClass} block cursor-pointer`}
        >
          {cardInnerContent}
        </a>
      ) : (
        <div className={cardContainerClass}>
          {cardInnerContent}
        </div>
      )}
    </div>
  );
}