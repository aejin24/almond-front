import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

export default function PageTransition({ children }: PropsWithChildren) {
  const animate = {
    initial: {
      x: 300,
      opacity: 0,
    },
    animate: {
      x: 150,
      opacity: 1,
    },
    exit: {
      x: 0,
      opacity: 1,
    },
  };

  const transition = { duration: 0.3, ease: "easeInOut" };

  return (
    <motion.div
      style={{ width: "100%" }}
      transition={transition}
      initial={animate.initial}
      animate={animate.exit}
      exit={animate.exit}
    >
      {children}
    </motion.div>
  );
}
