import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function useGlobalHooks() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return {
    navigate,
    scrollYProgress,
    scaleProgress,
    opacityProgress,
    ref,
  };
}
