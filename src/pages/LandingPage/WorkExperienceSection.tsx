import BlueCircle from "@components/BlueCircle";
import ContainerCard from "@components/Cards/ContainerCard";
import TextTitleSection from "@components/TextTitleSection";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import useLandingPageViewModel from "./LandingPageViewModel";
import useGlobalHooks from "@hooks/GlobalHooks";
import moment from "moment";

export default function WorkExperienceSection({
  model,
}: {
  model: ReturnType<typeof useLandingPageViewModel>;
}) {
  const hooks = useGlobalHooks();
  return (
    <Element name="experience">
      <motion.div
        style={{
          scale: hooks.scaleProgress,
          opacity: hooks.opacityProgress,
        }}
        ref={hooks.ref}
        className="flex flex-col gap-[60px]"
      >
        <div className="flex justify-start">
          <BlueCircle />
        </div>
        <TextTitleSection title1="My" title2="Experience" />
        <div className="flex flex-grow  md:flex-nowrap flex-wrap gap-5">
          {model.dataUser?.experience?.map((item, index) => (
            <ContainerCard className="w-fit" key={index}>
              <label className="font-semibold text-xl">{item.company}</label>
              <div className="bg-secondaryBlue w-fit text-white rounded-md h-auto p-2 text-sm">
                {moment(item.startDate).format("MMMM YYYY")} -{" "}
                {moment(item.endDate).format("MMMM YYYY")}
              </div>
              <div>
                <ul>
                  {item.listJobDetails?.map((job, index) => (
                    <li className="text-sm mb-1" key={index}>
                      • {job}
                    </li>
                  ))}
                </ul>
              </div>
            </ContainerCard>
          ))}
        </div>
        <div className="flex justify-end">
          <BlueCircle />
        </div>
      </motion.div>
    </Element>
  );
}
