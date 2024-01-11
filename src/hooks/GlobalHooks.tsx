import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function useGlobalHooks() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return {
    scrollYProgress,
    scaleProgress,
    opacityProgress,
    ref,
  };
}
