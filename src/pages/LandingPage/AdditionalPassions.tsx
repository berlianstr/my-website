import frontendImg from "@assets/images/svg/frontend.svg";
import backendImg from "@assets/images/svg/backend.svg";
import TextTitleSection from "@components/TextTitleSection";
import BlueCircle from "@components/BlueCircle";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import useGlobalHooks from "@hooks/GlobalHooks";

export default function AdditionalPassions() {
  const hooks = useGlobalHooks();
  return (
    <Element name="passions">
      <motion.div
        style={{ scale: hooks.scaleProgress, opacity: hooks.opacityProgress }}
        ref={hooks.ref}
        className="flex flex-col gap-[60px] mb-3 last:mb-0"
      >
        <div className="flex justify-end">
          <BlueCircle />
        </div>
        <TextTitleSection title1="Additional" title2="Passions" />
        <div className="flex md:flex-row flex-col justify-center gap-12">
          <div className="bg-secondaryWhite max-w-[360px] w-full shadow-lg py-5 px-7">
            <div className="flex justify-center">
              <img src={frontendImg} className="max-w-60" alt="frontend" />
            </div>
            <p className="font-semibold md:text-2xl text-xl mt-4">
              Front-End <span className="font-normal">Developer</span>
            </p>
            <p className="md:text-lg text-base">
              (React JS, React Native, Tailwind, Bootstrap, etc)
            </p>
          </div>
          <div className="bg-secondaryWhite md:max-w-[360px] w-full shadow-lg py-5 px-7">
            <div className="flex justify-center">
              <img src={backendImg} className="max-w-60" alt="backend" />
            </div>
            <p className="font-semibold md:text-2xl text-xl mt-4">
              Back-End <span className="font-normal">Developer</span>
            </p>
            <p className="md:text-lg text-base">(NodeJS, Laravel)</p>
            <div className="flex justify-end">
              <BlueCircle />
            </div>
          </div>
        </div>
      </motion.div>
    </Element>
  );
}
