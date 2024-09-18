import { useState, useEffect } from "react";
import { ArrowUpIcon } from "lucide-react";

const ScrollToTopButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showScrollTop && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300"
      >
        <ArrowUpIcon className="h-6 w-6" />
      </button>
    )
  );
};

export default ScrollToTopButton;
