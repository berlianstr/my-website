import TextTitleSection from "@components/TextTitleSection";
import radxImg from "@assets/images/png/radx.png";
import filmImg from "@assets/images/png/film.png";
import adiImg from "@assets/images/png/adi.png";
import Tag from "@components/Tag";
import { Element } from "react-scroll";
import useGlobalHooks from "@hooks/GlobalHooks";
import { motion } from "framer-motion";
import ContainerCard from "@components/Cards/ContainerCard";
import useLandingPageViewModel from "./LandingPageViewModel";

export default function PortfolioSection({
  model,
}: {
  model: ReturnType<typeof useLandingPageViewModel>;
}) {
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
          <ContainerCard className="p-4">
            <img src={radxImg} className="w-fit" alt="radx" />
            <div>
              <label className="font-semibold text-textBlue">
                {model.dataUser?.portfolio[0]?.name}
              </label>
              <p className="text-sm">
                {model.dataUser?.portfolio[0]?.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {model.dataUser?.portfolio[0]?.tag.map((item, index) => (
                <Tag title={item} key={index} />
              ))}
            </div>
            <div className="flex gap-3">
              <div className="relative h-14 w-20">
                <a
                  href="https://radx.sg/"
                  className="bg-secondaryBlue absolute bottom-0 left-0 h-10 w-auto flex items-center px-4 rounded-md text-white hover:opacity-80"
                >
                  Demo
                </a>
              </div>
              <div className="relative h-14 w-20">
                <a
                  href=""
                  className="bg-secondaryBlue absolute bottom-0 left-0 h-10 w-auto flex items-center px-4 rounded-md text-white hover:opacity-80"
                >
                  Source
                </a>
              </div>
            </div>
          </ContainerCard>
          <ContainerCard className="p-4">
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
            <div className="flex gap-3 ">
              <div className="relative h-14 w-20">
                <a
                  href="https://react-vite-film.netlify.app/"
                  className="bg-secondaryBlue absolute bottom-0 left-0 h-10 w-auto flex items-center px-4 rounded-md text-white hover:opacity-80"
                >
                  Demo
                </a>
              </div>
              <div className="relative h-14 w-20">
                <a
                  href="https://github.com/berlianstr/react-vite-movie"
                  className="bg-secondaryBlue absolute bottom-0 left-0 h-10 w-auto flex items-center px-4 rounded-md text-white hover:opacity-80"
                >
                  Source
                </a>
              </div>
            </div>
          </ContainerCard>
          <ContainerCard className="p-4">
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
              <Tag title="Firebase" />
            </div>
            <div className="flex gap-3">
              <div className="relative h-14 w-20">
                <a
                  href="https://webinar.analogdevices.events/"
                  className="bg-secondaryBlue absolute bottom-0 left-0 h-10 w-auto flex items-center px-4 rounded-md text-white hover:opacity-80"
                >
                  Demo
                </a>
              </div>
              <div className="relative h-14 w-20">
                <a
                  href=""
                  className="bg-secondaryBlue absolute bottom-0 left-0 h-10 w-auto flex items-center px-4 rounded-md text-white hover:opacity-80"
                >
                  Source
                </a>
              </div>
            </div>
          </ContainerCard>
        </div>
      </motion.div>
    </Element>
  );
}
