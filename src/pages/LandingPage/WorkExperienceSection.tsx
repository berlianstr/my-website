import BlueCircle from "@components/BlueCircle";
import TextTitleSection from "@components/TextTitleSection";
import useGlobalHooks from "@hooks/GlobalHooks";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

export default function WorkExperienceSection() {
  const hooks = useGlobalHooks();
  return (
    <Element name="experience">
      <motion.div
        style={{ scale: hooks.scaleProgress, opacity: hooks.opacityProgress }}
        ref={hooks.ref}
        className="flex flex-col gap-[60px]"
      >
        <div className="flex justify-start">
          <BlueCircle />
        </div>
        <TextTitleSection title1="My" title2="Experience" />
        <div className="flex flex-grow  md:flex-nowrap flex-wrap gap-5">
          <div className="flex flex-col gap-2 border-2 border-secondaryBlue rounded-md p-5 w-fit">
            <label className="font-semibold text-xl">
              Frontend Developer at RadX Group
            </label>
            <div className="bg-secondaryBlue w-fit text-white rounded-md h-auto p-2 text-sm">
              December 2021 – June 2023
            </div>
            <div>
              <ul>
                <li className="text-sm mb-1">
                  • Creating or developing web and mobile applications using
                  JavaScript, particularly utilizing React.js for web-based
                  applications and React Native for mobile-based applications.
                </li>
                <li className="text-sm mb-1">
                  • Maintenance and update web-application
                </li>
                <li className="text-sm mb-1">
                  • Debugging and troubleshooting applications in case of issues
                  or errors.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-2 border-secondaryBlue rounded-md p-5 w-fit">
            <label className="font-semibold text-xl">
              Frontend Developer at Ragdalion
            </label>
            <div className="bg-secondaryBlue w-fit text-white rounded-md h-auto p-2 text-sm">
              July 2023 – February 2024
            </div>
            <div>
              <ul>
                <li className="text-sm mb-1">
                  • Creating and maintenance web applications such web-admin,
                  web-monitoring, and landing page with ReactJs, NextJs, and
                  Typescript
                </li>
                <li className="text-sm mb-1">
                  • Collaborating with team Design and Backend developer to
                  create applications
                </li>
                <li className="text-sm mb-1">
                  • Creating a web application in a clean code
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <BlueCircle />
        </div>
      </motion.div>
    </Element>
  );
}
