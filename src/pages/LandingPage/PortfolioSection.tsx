import TextTitleSection from "@components/TextTitleSection";
import radxImg from "@assets/images/png/radx.png";
import mrpImg from "@assets/images/png/mrp.png";
import adiImg from "@assets/images/png/adi.png";

export default function PortfolioSection() {
  return (
    <div className="flex flex-col gap-[60px]">
      <TextTitleSection title1="My" title2="Portfolio" />
      <div className="flex flex-grow gap-4">
        <div className="bg-secondaryWhite p-4 border border-secondaryBlue rounded-md shadow-md">
          <img src={radxImg} className="w-fit" alt="radx" />
          <div>
            <label className="font-semibold text-textBlue">RadX Website</label>
            <p className="text-sm">
              This is the website of one of the Singaporean companies where I
              worked. This is a website created using React JS, Tailwind CSS,
              and others.
            </p>
          </div>
        </div>
        <div className="bg-secondaryWhite p-4 border border-secondaryBlue rounded-md shadow-md">
          <img src={mrpImg} className="w-fit" alt="mrp" />
          <div>
            <label className="font-semibold text-textBlue">MRP Website</label>
            <p className="text-sm">
              This is a website admin created using React JS, Tailwind CSS, and
              others
            </p>
          </div>
        </div>
        <div className="bg-secondaryWhite p-4 border border-secondaryBlue rounded-md shadow-md">
          <img src={adiImg} className="w-fit" alt="adi" />
          <div>
            <label className="font-semibold text-textBlue">RadX Website</label>
            <p className="text-sm">
              This is a website created using React JS, Tailwind CSS, and others
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
