"use client";
import Portfolio from "@/components/Portfolio";
import InitTransition from "@/components/InitTransition";
import FancyCursor from "@/components/FancyCursor";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  // const { t, i18n } = useTranslation();
  // const location = useLocation();
  const container = {
    hidden: {
      //  opacity: 0, scale: 0.5
    },
    visible: {
      // scale: 1,
      // opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowElement(true);
    }, 2400);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <InitTransition />
      <FancyCursor />

      {/* <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-1]"
        style={{ backgroundImage: "url(/assets/bg.jpg)" }}
      /> */}

      <div
        className="bg-cover bg-[center_center] box-border absolute w-auto h-auto bg-no-repeat z-[-1] opacity-70 -inset-7"
        style={{ backgroundImage: "url(/assets/bg.jpg)" }}
      />
      <motion.div
        variants={container}
        animate={showElement ? "visible" : "hidden"}
        // className="min-h-screen m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 xl:w-10/12"
        className="flex flex-col min-h-screen items-center"
      >
        <div className="flex flex-1 flex-row items-center max-w-[1270px]">
          {/* <AnimatePresence mode="wait"> */}
          <Portfolio />
          {/* </AnimatePresence> */}
        </div>
      </motion.div>
    </div>
  );
}
