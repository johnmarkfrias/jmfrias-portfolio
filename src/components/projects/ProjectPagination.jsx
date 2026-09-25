// src/components/projects/ProjectPagination.jsx

export default function ProjectPagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Pagination" className="flex items-center justify-start flex-wrap gap-1.5 sm:gap-2 mt-10 sm:mt-16">
      {/* Prev Button */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all select-none ${
          currentPage === 1
            ? "bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed"
            : "bg-white text-slate-600 border-slate-200 hover:border-blue-500 hover:text-blue-600 active:scale-95 shadow-xs cursor-pointer"
        }`}
      >
        Prev
      </button>

      {/* Adaptive Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
        const distance = Math.abs(pageNum - currentPage);
        const isNear = distance <= 1 || pageNum === 1 || pageNum === totalPages;

        if (!isNear) {
          if (pageNum === 2 || pageNum === totalPages - 1) {
            return (
              <span key={pageNum} className="px-1 text-slate-400 font-medium text-xs sm:text-sm">
                ...
              </span>
            );
          }
          return null;
        }

        const isActive = currentPage === pageNum;
        return (
          <button
            key={pageNum}
            type="button"
            onClick={() => onPageChange(pageNum)}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-xs sm:text-sm font-semibold border transition-all select-none flex items-center justify-center cursor-pointer ${
              isActive
                ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                : "bg-white border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-600 active:scale-95 shadow-xs"
            }`}
          >
            {pageNum}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all select-none ${
          currentPage === totalPages
            ? "bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed"
            : "bg-white text-slate-700 border-slate-200 hover:border-blue-500 hover:text-blue-600 active:scale-95 shadow-xs cursor-pointer"
        }`}
      >
        Next
      </button>
    </nav>
  );
}