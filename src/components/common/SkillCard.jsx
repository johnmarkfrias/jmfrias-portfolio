// src/components/common/SkillCard.jsx

function SkillCard({ icon: Icon, title, description, isFeatured = false }) {
  return (
    <div
      className={`
        group h-full rounded-2xl p-6 sm:p-7 flex flex-col items-start justify-start
        cursor-pointer transition-all duration-300 ease-in-out
        border select-none
        hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-600/25
        ${isFeatured
          ? "bg-blue-600 border-blue-600 -translate-y-1.5 shadow-xl shadow-blue-600/25"
          : "bg-white border-blue-500 hover:bg-blue-600 hover:border-blue-600"
        }
      `}
    >
      {/* Icon Badge */}
      <div
        className={`
          w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 shrink-0
          transition-colors duration-300 shadow-xs
          ${isFeatured
            ? "bg-white/20 text-white"
            : "bg-blue-50 text-blue-600 group-hover:bg-white/20 group-hover:text-white"
          }
        `}
      >
        {Icon && (
          <Icon className="transition-transform duration-300 group-hover:scale-110" />
        )}
      </div>

      {/* Heading */}
      <h3
        className={`
          text-lg sm:text-xl font-bold mb-1.5 leading-snug transition-colors duration-300
          ${isFeatured ? "text-white" : "text-slate-900 group-hover:text-white"}
        `}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`
          text-sm leading-relaxed m-0 transition-colors duration-300
          ${isFeatured ? "text-blue-50" : "text-slate-600 group-hover:text-blue-50"}
        `}
      >
        {description}
      </p>
    </div>
  );
}

export default SkillCard;