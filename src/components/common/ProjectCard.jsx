// src/components/common/ProjectCard.jsx

function ProjectCard({ title, description, tags, image, liveUrl }) {
  return (
    <div className="group relative bg-white border border-slate-200/80 hover:border-blue-500/40 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:shadow-blue-950/8 transition-all duration-300 ease-out flex flex-col h-full text-left select-none">
      
      {/* Visual Media Header */}
      <div className="relative w-full aspect-16/10 bg-slate-100 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Subtle Dark Gradient Fade */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Action Button: Bottom-Right */}
        {liveUrl && (
          <div className="absolute bottom-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600/95 hover:bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-md shadow-md hover:shadow-blue-600/40 hover:scale-105 active:scale-95 transition-all duration-200"
              aria-label={`View live site for ${title}`}
            >
              <span>View Site</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Content Details */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 mb-2 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed m-0 line-clamp-3">
          {description}
        </p>

        {/* Category / Stack Badges (Positioned Below Description) */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 pt-1">
          {tags?.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] sm:text-xs font-medium text-blue-600 bg-blue-50/90 px-2.5 py-0.5 sm:py-1 rounded-md tracking-tight"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;