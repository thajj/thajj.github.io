"use client";
import useWindowSize from "@/hooks/useWindowSize";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const blackBox = {
  initial: {
    // height: "100vh",
    height: "100%",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

// const InitialTransition = ({ onComplete }) => {
const InitialTransition = () => {
  const { t } = useTranslation();
  const { width, height } = useWindowSize();

  // Scroll user to top to avoid showing the footer
  useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="absolute z-50 flex items-center justify-center w-full bg-black"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() => {
        document.body.classList.remove("overflow-hidden");
        // if (onComplete) onComplete();
      }}
    >
      <motion.svg variants={textContainer} className="absolute z-50 flex">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={width}
          height={height}
          className="text-white"
        >
          <rect className="w-full h-full fill-current" />
          <motion.rect
            variants={text}
            className="w-full h-full text-amber-500 fill-current"
          />
        </pattern>
        <text
          className="text-3xl font-bold"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)" }}
        >
          Toufic Hajj
          {/* {`${t("firstName")} ${t("lastName")}`} */}
        </text>
      </motion.svg>
    </motion.div>
  );
};

export default InitialTransition;
