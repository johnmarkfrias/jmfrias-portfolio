import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scrolls window to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use "smooth" if you prefer an animated glide
    });
  }, [pathname]);

  return null;
}