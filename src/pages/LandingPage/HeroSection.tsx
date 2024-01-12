import HeroImg from "@assets/images/svg/hero-img.svg";
import BlueCircle from "@components/BlueCircle";
// import useGlobalHooks from "@hooks/GlobalHooks";
// import useGlobalHooks from "@hooks/GlobalHooks";
// import { motion } from "framer-motion";
export default function HeroSection() {
  // const hooks = useGlobalHooks();
  return (
    <div className="flex md:flex-row  flex-col-reverse md:justify-between justify-center gap-16 mt-20">
      <div className="flex flex-col md:gap-8 gap-2">
        <BlueCircle className="ml-32" />
        <p className="text-start lg:text-[35px] md:text-3xl text-2xl text-primaryBlue tracking-wider">
          Hi ! <br />
          <span className="font-semibold lg:text-[50px] md:text-3xl text-2xl tracking-wider">
            I’m Berlian Gymnastiar. <br /> a Front-End Developer
          </span>
        </p>
        <p className="text-textBlue lg:text-[23px] md:text-lg text-sm">
          I’m a Frontend Developer with 2 years of experience using React and
          NodeJS. Reach out if you’d like to learn more!
        </p>
        <BlueCircle />
      </div>
      <div className="flex justify-center">
        <img src={HeroImg} className=" md:w-full w-[80%]" alt="hero-pic" />
      </div>
    </div>
  );
}
