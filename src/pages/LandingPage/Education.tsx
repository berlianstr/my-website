import BlueCircle from "@components/BlueCircle";
import TextTitleSection from "@components/TextTitleSection";
import useGlobalHooks from "@hooks/GlobalHooks";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

export default function Education() {
  const hooks = useGlobalHooks();
  return (
    <Element name="education">
      <motion.div
        style={{ scale: hooks.scaleProgress, opacity: hooks.opacityProgress }}
        ref={hooks.ref}
        className="flex flex-col  gap-[60px] mb-3 last:mb-0"
      >
        <div className="flex justify-center">
          <BlueCircle />
        </div>
        <TextTitleSection title2="Education" />
        <div className="contents">
          <div className="box">
            <h4>2018 - 2021</h4>
            <label className="font-semibold text-xl">SMKN 12 Jakarta</label>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem reiciendis odio consectetur laborum animi
              repellendus mollitia! Excepturi veritatis fugit amet omnis
              doloribus, sunt nisi, ab quisquam in velit obcaecati consequatur.
            </p>
          </div>
          <div className="box flex flex-col gap-2">
            <h4>2021-2021</h4>
            <label className="font-semibold text-xl">
              Fazztrack (Fullstack Mobile Developer)
            </label>
            <ul>
              <li className="text-sm mb-1">
                • Studying and creating web and mobile programming with the
                JavaScript language and JavaScript frameworks.
              </li>
              <li className="text-sm mb-1">
                • Creating web and mobile applications such as Vehicle Rental
                and Education App, using React.js, React Native, Node.js, and
                Express.js, along with Socket.IO for real-time chat feature.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </Element>
  );
}
