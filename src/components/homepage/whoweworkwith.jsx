import React, { useRef } from "react";
import AnimatedContent from "../animatedContent";
import { useScrollVisibility } from "../../hooks/useScrollHook";

export const WhoWeWorkWith = () => {
  const headerContentRef = useRef(null);
  const { isVisible: headerContentContainer } =
    useScrollVisibility(headerContentRef);

  const contentContainerRef = useRef(null);
  const { isVisible: contentContainer } =
    useScrollVisibility(contentContainerRef);
  return (
    <section className="py-20 bg-[#0D607E] ">
      <div className="px-6 mx-auto max-w-[1121px] text-white text-lg">
        <AnimatedContent isVisible={headerContentContainer}>
          <h1
            className="mb-8 text-4xl font-bold text-center text-white font-aileron"
            ref={headerContentRef}
          >
            Built for Regulated Environments
          </h1>
          <p className="text-lg font-instrument">
            CoreInfra solutions are delivered with enterprise-grade controls
            aligned to regulated operations:{" "}
          </p>
          <ul className="my-5 list-disc list-inside">
            <li>Secure SDLC practices</li>
            <li>Encryption at rest and in transit </li>
            <li>Role-based access control (RBAC)</li>
            <li>Multi-factor authentication for privileged access</li>
            <li>Audit trails and system logs </li>
            <li>PCI-aligned card operations</li>
            <li>Pre-launch VAPT readiness</li>
          </ul>

          <div className="p-4  font-inter font-semibold text-black place-self-center text-center rounded-xl bg-[#D6F0FE] shadow-[0px_4px_4px_0px_#00000040]">
            We work closely with technology, operations, and compliance teams to ensure deployments are sustainable and secure.
          </div>
        </AnimatedContent>
        <AnimatedContent isVisible={contentContainer}>
          <div className="pt-8 my-8" ref={contentContainerRef}>
            <h2 className="mb-8 text-4xl font-bold text-center text-white font-aileron ">
              Proven Delivery
            </h2>
           <p className="text-lg font-instrument">
            CoreInfra has delivered and continues to support infrastructure initiatives across Nigeria’s financial ecosystem spanning:
          </p>
          <ul className="list-disc list-inside my-9">
            <li>digital banking platforms</li>
            <li>transaction middleware and orchestration</li>
            <li>card issuing systems</li>
            <li>collections and payment platforms</li>
            <li>POS and agency banking infrastructure</li>
          </ul>

          <div className="p-4  w-full font-inter font-semibold text-black place-self-center text-center rounded-xl bg-[#D6F0FE] shadow-[0px_4px_4px_0px_#00000040]">
           Client engagements are handled with confidentiality and structured for long-term operational success.
          </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};
