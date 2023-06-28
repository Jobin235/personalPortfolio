import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Reveal({ children, width = "fit-content" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.9 });
  const animationControl = useAnimation();
  const revealControl = useAnimation();

  useEffect(
    () => {
      if (isInView) {
        animationControl.start("visible");
        revealControl.start("visible");
      }
    },
    // eslint-disable-next-line
    [isInView]
  );

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          initial: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="initial"
        animate={animationControl}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          initial: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="initial"
        animate={revealControl}
        transition={{ duration: 0.6, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 6,
          bottom: 6,
          left: 0,
          right: 0,
          background: "grey",
          zIndex: 20,
        }}
      />
    </div>
  );
}
