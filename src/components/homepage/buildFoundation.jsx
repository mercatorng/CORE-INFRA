import { CircleCheck } from "lucide-react";
import React, { useRef } from "react";
import { useScrollVisibility } from "../../hooks/useScrollHook";
import AnimatedContent from "../animatedContent";

export const BuildFoundation = () => {
    const headerContentRef = useRef(null);
      const { isVisible: headerContentContainer } =
        useScrollVisibility(headerContentRef);
    
      const contentContainerRef = useRef(null);
      const { isVisible: contentContainer } =
        useScrollVisibility(contentContainerRef);
  return (
    <AnimatedContent isVisible={headerContentContainer}>
    <div ref={headerContentRef} className="text-white text-lg font-instrument max-w-7xl bg-[radial-gradient(50%_50%_at_50%_50%,_#0D607E_0%,_#1E293B_96%)] mx-auto py-11 mt-8 my-16 ">
      <h1 className="text-4xl font-bold text-center text-white font-aileron">
        Let’s Build the Right Foundation
      </h1>
      <AnimatedContent isVisible={contentContainer}>
      <div ref={contentContainerRef} className="flex flex-row justify-between gap-4 px-20">
        <div className="flex flex-col gap-6 py-8">
          <p className="">Whether you are:</p>
          <div className="px-8">
            <ul className="flex flex-col gap-6">
              <li className="flex flex-row items-center gap-4">
                {" "}
                <span className="text-[#1FCF7C]">
                  <CircleCheck />
                </span>
                Modernizing Legacy Infrastructure
              </li>
              <li className="flex flex-row items-center gap-4">
                {" "}
                <span className="text-[#1FCF7C]">
                  <CircleCheck />
                </span>
                Launching new financial products
              </li>
              <li className="flex flex-row items-center gap-4">
                <span className="text-[#1FCF7C]">
                  <CircleCheck />
                </span>
                Scaling securely in a regulated environment
              </li>
            </ul>
          </div>
          <p className="text-lg text-white">
            CoreInfra provides the infrastructure foundation to support your
            growth.
          </p>
        </div>
        
      </div>
      </AnimatedContent>
    </div>
    </AnimatedContent>
  );
};
