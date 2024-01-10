import HeroImg from "@assets/images/svg/hero-img.svg";
import BlueCircle from "@components/BlueCircle";
export default function HeroSection() {
  return (
    <div className="flex justify-between gap-16 mt-20">
      <div className="flex flex-col gap-8">
        <BlueCircle className="ml-32" />
        <p className="text-start text-[35px] text-primaryBlue tracking-wider">
          Hi ! <br />
          <span className="font-semibold text-[50px] tracking-wide">
            I’m Berlian Gymnastiar. <br /> a Front-End Developer
          </span>
        </p>
        <p className="text-textBlue text-[23px]">
          I’m a Frontend Developer with 2 years of experience using React and
          NodeJS. Reach out if you’d like to learn more!
        </p>
        <BlueCircle />
      </div>
      <img src={HeroImg} className="max-w-[30%]" alt="hero-pic" />
    </div>
  );
}
