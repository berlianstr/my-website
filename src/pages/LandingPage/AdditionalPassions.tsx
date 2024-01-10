import frontendImg from "@assets/images/svg/frontend.svg";
import backendImg from "@assets/images/svg/backend.svg";
import TextTitleSection from "@components/TextTitleSection";
import BlueCircle from "@components/BlueCircle";

export default function AdditionalPassions() {
  return (
    <div className="flex flex-col gap-[60px]">
      <div className="flex justify-end">
        <BlueCircle />
      </div>
      <TextTitleSection title1="Additional" title2="Passions" />
      <div className="flex flex-grow justify-center gap-12">
        <div className="bg-secondaryWhite max-w-[360px] shadow-lg py-5 px-7">
          <div className="flex justify-center">
            <img src={frontendImg} className="max-w-60" alt="frontend" />
          </div>
          <p className="font-semibold text-2xl mt-4">
            Front-End <span className="font-normal">Developer</span>
          </p>
          <p className="text-lg">
            (React JS, React Native, Tailwind, Bootstrap, etc)
          </p>
        </div>
        <div className="bg-secondaryWhite max-w-[360px] shadow-lg py-5 px-7">
          <div className="flex justify-center">
            <img src={backendImg} className="max-w-60" alt="backend" />
          </div>
          <p className="font-semibold text-2xl mt-4">
            Back-End <span className="font-normal">Developer</span>
          </p>
          <p className="text-lg">(NodeJS, Laravel)</p>
          <div className="flex justify-end">
            <BlueCircle />
          </div>
        </div>
      </div>
    </div>
  );
}
