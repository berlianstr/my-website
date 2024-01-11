import React from "react";
import { twMerge } from "tailwind-merge";

interface TextTitleSectionProps {
  title1: string;
  title2: string;
  classNameTitle1?: string;
  classNameTitle2?: string;
}

const TextTitleSection: React.FC<TextTitleSectionProps> = ({
  title1,
  title2,
  classNameTitle1,
  classNameTitle2,
}) => {
  return (
    <p
      className={twMerge(
        `md:text-[35px] text-3xl text-primaryBlue font-semibold text-center`,
        classNameTitle2
      )}
    >
      <span
        className={twMerge(`text-secondaryBlue font-normal`, classNameTitle1)}
      >
        {title1}
      </span>{" "}
      {title2}
    </p>
  );
};

export default TextTitleSection;
