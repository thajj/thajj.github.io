import { motion } from "framer-motion";

const animations = {
  hidden: {
    opacity: 0,
    y: 20,
    // transition: {
    //   when: 'afterChildren',
    // },
  },
  visible: {
    opacity: 1,
    // scale: 1,
    y: 0,

    // height: "auto",
    transition: {
      // when: 'beforeChildren',
      delayChildren: 0.3,
      staggerChildren: 0.2,
      // duration: 0.3,
      // type: "spring",
      // stiffness: 260,
      // damping: 20,
      // ease: "easeOut"
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    // height: "auto",
    transition: {
      duration: 0.3,
    },
  },
};

type Props = JSX.Element | JSX.Element[] | string | string[];

const PageTransition = ({
  children,
  noPadding = false,
}: {
  children: Props;
  noPadding: boolean;
}) => {
  return (
    <motion.section
      variants={animations}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={noPadding ? "" : "px-12 py-8"}
    >
      {children}
    </motion.section>
  );
};

export default PageTransition;
