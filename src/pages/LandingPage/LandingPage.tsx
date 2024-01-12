// import AboutSection from "./AboutSection";
import AdditionalPassions from "./AdditionalPassions";
import Education from "./Education";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import WorkExperienceSection from "./WorkExperienceSection";

export default function LandingPage() {
  return (
    <div className="mt-11 lg:px-[134px] md:px-20 px-7 flex flex-col  overflow-hidden">
      <HeroSection />
      {/* <AboutSection /> */}
      <AdditionalPassions />
      <Education />
      <WorkExperienceSection />
      <PortfolioSection />
    </div>
  );
}
