import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  const springAnimation = {
    animate: {
      scale: [0.8, 0.8, 1],
      y: [document.body.scrollHeight, 0, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    exit: {
      scale: [1, 0.8, 0.8],
      y: [0, 0, -document.body.scrollHeight],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  // const rotateAnimation = {
  //   initial: { width: 0, opacity: 0, rotate: 90, transformOrigin: 'bottom right', scale: 0 },
  //   animate: { width: "100%", opacity: 1, rotate: 0, transformOrigin: 'bottom right', scale: [0.5,1] },
  //   exit: { width: 0, opacity: 0, rotate: -90, transformOrigin: 'bottom right', scale: 0 },
  // };

  //   const zoomAnimation = {
  //     initial: { opacity: 0, scale: 0.5 },
  //     animate: { opacity: 1, scale: 1 },
  //     exit: { opacity: 0, scale: 0.5 },
  //   };

  //   const widthAnimation = {
  //     initial: { width: "100%",scale: 0.5, opacity: 0 },
  //     animate: { width: "100%",scale: 1, opacity: 1 },
  //     exit: { width: "100%",scale: 0.5, opacity: 0 },
  //   };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={springAnimation}
    >
      {children}
    </motion.div>
  );
}
