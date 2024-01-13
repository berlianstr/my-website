import frontendImg from "@assets/images/svg/frontend.svg";
import TextTitleSection from "@components/TextTitleSection";
import BlueCircle from "@components/BlueCircle";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import useLandingPageViewModel from "./LandingPageViewModel";
import useGlobalHooks from "@hooks/GlobalHooks";

export default function AdditionalPassions({
  model,
}: {
  model: ReturnType<typeof useLandingPageViewModel>;
}) {
  const hooks = useGlobalHooks();
  return (
    <Element name="passions">
      <motion.div
        style={{
          scale: hooks.scaleProgress,
          opacity: hooks.opacityProgress,
        }}
        ref={hooks.ref}
        className="flex flex-col gap-[60px] mb-3 last:mb-0"
      >
        <div className="flex justify-end">
          <BlueCircle />
        </div>
        <TextTitleSection title1="Additional" title2="Passions" />
        <div className="flex md:flex-row flex-col justify-center gap-12">
          {model.dataUser?.skills?.map((skill, index) => (
            <div
              className="bg-secondaryWhite max-w-[360px] w-full shadow-lg py-5 px-7"
              key={index}
            >
              <div className="flex justify-center">
                <img src={frontendImg} className="max-w-60" alt="frontend" />
              </div>
              <p className="font-semibold md:text-2xl text-xl mt-4">
                {skill.name} <span className="font-normal">Developer</span>
              </p>
              <p className="md:text-lg text-base">
                (
                {skill.stacks.map((stack, stackIndex) => (
                  <span key={stackIndex}>
                    {stack}
                    {stackIndex === skill.stacks.length - 1 ? "." : ","}
                    &nbsp;
                  </span>
                ))}
                )
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </Element>
  );
}
