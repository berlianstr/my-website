// import AboutSection from "./AboutSection";
import AdditionalPassions from "./AdditionalPassions";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import WorkExperienceSection from "./WorkExperienceSection";

export default function LandingPage() {
  return (
    <div className="mt-11 px-[134px] flex flex-col gap-32">
      <HeroSection />
      {/* <AboutSection /> */}
      <AdditionalPassions />
      <WorkExperienceSection />
      <PortfolioSection />
    </div>
  );
}
