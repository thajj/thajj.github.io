import { useMotionValue } from "framer-motion";
import { useEffect } from "react";

const useMousePosition = () => {
  const clientX = useMotionValue(-100);
  const clientY = useMotionValue(-100);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      clientX.set(e.clientX);
      clientY.set(e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return { x: clientX, y: clientY };
};

export default useMousePosition;
