import BlueCircle from "@components/BlueCircle";
import TextTitleSection from "@components/TextTitleSection";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import useLandingPageViewModel from "./LandingPageViewModel";
import useGlobalHooks from "@hooks/GlobalHooks";

export default function Education({
  model,
}: {
  model: ReturnType<typeof useLandingPageViewModel>;
}) {
  const hooks = useGlobalHooks();
  return (
    <Element name="education">
      <motion.div
        style={{
          scale: hooks.scaleProgress,
          opacity: hooks.opacityProgress,
        }}
        ref={hooks.ref}
        className="flex flex-col  gap-[60px] mb-3 last:mb-0"
      >
        <div className="flex justify-center">
          <BlueCircle />
        </div>
        <TextTitleSection title2="Education" />
        <div className="contents">
          {model.dataUser?.education?.map((item, index) => {
            return (
              <div className="box" key={index}>
                <h4>
                  {item.startDate} - {item.endDate}
                </h4>
                <label className="font-semibold text-xl">
                  {item.schoolName} ({item.major})
                </label>
                {item.description?.map((desc, idx) => (
                  <p className="text-sm mt-1" key={idx}>
                    • {desc}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </motion.div>
    </Element>
  );
}
