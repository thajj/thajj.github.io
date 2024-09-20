"use client";
import { useEffect } from "react";
import { motion, useAnimation, useMotionValue, useSpring } from "framer-motion";

function FancyCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 430 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const spring2Config = { damping: 25, stiffness: 300 };
  const cursor2XSpring = useSpring(cursorX, spring2Config);
  const cursor2YSpring = useSpring(cursorY, spring2Config);

  const cursorControls = useAnimation();
  const followerControls = useAnimation();

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };

    const hover = () => {
      cursorControls.start({ scale: 0.5, transition: { duration: 0.3 } });
      followerControls.start({ scale: 3, transition: { duration: 0.3 } });
    };

    const unHover = () => {
      cursorControls.start({ scale: 1, transition: { duration: 0.3 } });
      followerControls.start({ scale: 1, transition: { duration: 0.3 } });
    };
    window.addEventListener("mousemove", moveCursor);

    document.querySelectorAll(".link-effect").forEach((el) => {
      el.addEventListener("mouseenter", hover);
      el.addEventListener("mouseleave", unHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <motion.div
        animate={cursorControls}
        // className="fancy-cursor"
        className={`fancy-cursor fixed w-4 h-4 select-none pointer-events-none z-50`}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
      <motion.div
        animate={followerControls}
        className={`cursorFollower fixed  w-12 h-12 select-none pointer-events-none z-50`}
        // className="fancy-cursor cursorFollower"
        style={{
          translateX: cursor2XSpring,
          translateY: cursor2YSpring,
        }}
      />
    </>
  );
}

export default FancyCursor;
