import { HeroSection } from "../components/homepage/heroSection";
import { WhyCoreInfra } from "../components/homepage/whyCoreInfra";
import { ComprehensiveSolution } from "../components/homepage/comprehensiveSolution";

export const Home = () => {
  return (
    <>
      {/* hero section */}
      <HeroSection />
      {/* why core infra */}
      <div className=" font-manrope">
        <WhyCoreInfra />
        <ComprehensiveSolution />
      </div>
    </>
  );
};
