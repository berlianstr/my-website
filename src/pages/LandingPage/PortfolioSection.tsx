import TextTitleSection from "@components/TextTitleSection";
import radxImg from "@assets/images/png/radx.png";
import filmImg from "@assets/images/png/film.png";
import adiImg from "@assets/images/png/adi.png";
import Tag from "@components/Tag";
import Button from "@components/Button/Button";
import { Element } from "react-scroll";
import useGlobalHooks from "@hooks/GlobalHooks";
import { motion } from "framer-motion";

export default function PortfolioSection() {
  const hooks = useGlobalHooks();
  return (
    <Element name="portfolio">
      <motion.div
        style={{ scale: hooks.scaleProgress, opacity: hooks.opacityProgress }}
        ref={hooks.ref}
        className="flex flex-col gap-[60px] lg:pb-[134pb] md:pb-20 pb-7"
      >
        <TextTitleSection title1="My" title2="Portfolio" />
        <div className="flex md:flex-nowrap flex-wrap flex-grow gap-4">
          <div className="flex flex-col gap-2 bg-secondaryWhite p-4 border-2 border-secondaryBlue rounded-md shadow-md  ">
            <img src={radxImg} className="w-fit" alt="radx" />
            <div>
              <label className="font-semibold text-textBlue">
                RadX Website
              </label>
              <p className="text-sm">
                This is the website of one of the Singaporean companies where I
                worked. This is a website created using React JS, Tailwind CSS,
                and others.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Tag title="React" />
              <Tag title="Tailwind CSS" />
            </div>
            <div className="flex ">
              <div className="relative h-14 w-20">
                <Button
                  label="Demo"
                  className="absolute bottom-0 left-0 h-10 w-auto rounded-md text-sm"
                />
              </div>
              <div className="relative h-14 w-20">
                <Button
                  label="Source"
                  className="absolute bottom-0 left-0 h-10 w-auto rounded-md text-sm"
                />
              </div>
            </div>
          </div>
          <div className="bg-secondaryWhite p-4 border-2 border-secondaryBlue rounded-md shadow-md">
            <img src={filmImg} className="w-fit" alt="film" />
            <div className="mt-2">
              <label className="font-semibold text-textBlue">
                Film.Id Website
              </label>
              <p className="text-sm">
                This website allow to user to search movies they want to know
                about. They also can view the rating, and the who are the actors
                in the film.
              </p>
            </div>
            <div className="flex flex-wrap mt-2 gap-2">
              <Tag title="React" />
              <Tag title="Tailwind CSS" />
              <Tag title="Vite" />
            </div>
            <div className="flex ">
              <div className="relative h-14 w-20">
                <Button
                  label="Demo"
                  className="absolute bottom-0 left-0 h-10 w-auto rounded-md text-sm"
                />
              </div>
              <div className="relative h-14 w-20">
                <Button
                  label="Source"
                  className="absolute bottom-0 left-0 h-10 w-auto rounded-md text-sm"
                />
              </div>
            </div>
          </div>
          <div className="bg-secondaryWhite p-4 border-2 border-secondaryBlue rounded-md shadow-md">
            <img src={adiImg} className="w-fit" alt="adi" />
            <div className="mt-2">
              <label className="font-semibold text-textBlue">ADI Website</label>
              <p className="text-sm">
                This website allow to users to conduct streaming webinars.
              </p>
            </div>
            <div className="flex flex-wrap mt-2 gap-2">
              <Tag title="React" />
              <Tag title="Tailwind CSS" />
              <Tag title="Ant Design" />
              <Tag title="Redux" />
              <Tag title="Vonage" />
            </div>
            {/* <div className="grid grid-cols-2  place-items-end gap-2 ">
            <Button label="Demo" className="h-10 w-auto rounded-md text-sm" />
            <Button label="Source" className="h-10 w-auto rounded-md text-sm" />
          </div> */}
            <div className="flex ">
              <div className="relative h-14 w-20">
                <Button
                  label="Demo"
                  className="absolute bottom-0 left-0 h-10 w-auto rounded-md text-sm"
                />
              </div>
              <div className="relative h-14 w-20">
                <Button
                  label="Source"
                  className="absolute bottom-0 left-0 h-10 w-auto rounded-md text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Element>
  );
}
