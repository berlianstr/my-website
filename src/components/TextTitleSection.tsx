import React from "react";

interface TextTitleSectionProps {
  title1: string;
  title2: string;
}

const TextTitleSection: React.FC<TextTitleSectionProps> = ({
  title1,
  title2,
}) => {
  return (
    <p className={`text-[35px] text-primaryBlue font-semibold text-center`}>
      <span className="text-secondaryBlue font-normal">{title1}</span> {title2}
    </p>
  );
};

export default TextTitleSection;
