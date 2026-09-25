import { useEffect, useCallback } from "react";
import { HiXMark, HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function ImageLightbox({ items = [], index = null, onClose, onPrev, onNext }) {
  // Keyboard navigation (Esc to exit, Arrow keys to navigate)
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (index !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [index, handleKeyDown]);

  if (index === null || !items[index]) return null;

  const currentItem = items[index];
  const total = items.length;
  const currentNum = String(index + 1).padStart(2, "0");
  const totalNum = String(total).padStart(2, "0");

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-all duration-300 select-none animate-fadeIn"
    >
      {/* Top Header Bar: Counter & Close Action */}
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="absolute top-0 inset-x-0 h-16 sm:h-20 px-4 sm:px-8 flex items-center justify-between z-50 pointer-events-auto"
      >
        {/* Modern Counter Badge */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs sm:text-sm font-medium tracking-wide text-slate-200 shadow-sm">
          <span className="font-bold text-white">{currentNum}</span>
          <span className="text-white/40">/</span>
          <span className="text-white/70">{totalNum}</span>
        </div>

        {/* Minimalist Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-all duration-200 cursor-pointer shadow-lg"
        >
          <HiXMark className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Left Chevron Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous item"
        className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-all duration-200 cursor-pointer shadow-xl hover:shadow-2xl"
      >
        <HiChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Right Chevron Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next item"
        className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-all duration-200 cursor-pointer shadow-xl hover:shadow-2xl"
      >
        <HiChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Main Image Stage */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-6xl max-h-[82vh] sm:max-h-[86vh] w-full px-12 sm:px-20 md:px-24 flex items-center justify-center bg-transparent border-0 outline-none p-0"
      >
        <img
          key={currentItem.id || currentItem.image}
          src={currentItem.image}
          alt={currentItem.title || "Preview image"}
          className="max-h-[80vh] sm:max-h-[84vh] w-auto max-w-full object-contain select-none border-0 outline-none rounded-none shadow-none bg-transparent"
        />
      </div>
    </div>
  );
}