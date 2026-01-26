import { HeroSection } from "../components/homepage/heroSection";
import { WhyCoreInfra } from "../components/homepage/whyCoreInfra";
import { ComprehensiveSolution } from "../components/homepage/comprehensiveSolution";
import AboutCoreinfra from "../components/homepage/aboutCoreinfra";
import { BuiltFor } from "../components/homepage/builtFor";
import { TrustedPartners } from "../components/homepage/trustedPartners";
import { WhoWeWorkWith } from "../components/homepage/whoweworkwith";
import { BuildFoundation } from "../components/homepage/buildFoundation";
import { Newsletter } from "../components/homepage/newsletter";

export const Home = () => {
  return (
    <>
      {/* hero section */}
      <HeroSection />

      <AboutCoreinfra />
      <WhyCoreInfra />
      <ComprehensiveSolution />
      <BuiltFor />
      <TrustedPartners />
      <WhoWeWorkWith />
      <BuildFoundation />
      <Newsletter />
    </>
  );
};
