// src/hooks/useTypewriter.js

import { useState, useEffect } from "react";

export function useTypewriter(words = [], pauseTime = 3000, typeSpeed = 90, deleteSpeed = 70) {
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const fullText = words[index] || "";
    let timeout;

    if (!isDeleting && currentText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    } else {
      const speed = isDeleting ? deleteSpeed : typeSpeed;
      timeout = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, index, words, pauseTime, typeSpeed, deleteSpeed]);

  return currentText;
}