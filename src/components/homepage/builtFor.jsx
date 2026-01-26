import React, { useRef } from "react";
import { LockKeyhole, Shield, TrendingUp } from 'lucide-react';
import AnimatedContent from "../animatedContent";
import { useScrollVisibility } from "../../hooks/useScrollHook";



export const BuiltFor = () => {
  const headerContentRef = useRef(null);
    const { isVisible: headerContentContainer } =
      useScrollVisibility(headerContentRef);
  return (
    <section className="py-20 bg-emerald-50 ">
      
      <AnimatedContent isVisible={headerContentContainer}>
      <div ref={headerContentRef} className="px-6 mx-auto max-w-[1121px]">
        <h2 className="mb-12 text-3xl font-bold text-center">
          Built for Regulated Financial Environments
        </h2>
        <p className="mx-auto mb-12 text-center text-gray-600">
          CoreInfra solutions are designed for <span className="font-semibold">regulated financial institutions </span>
          operating in complex risk and compliance environments.
        </p>
        <p className="mx-auto mb-12 text-gray-600 text-start">
          Our delivery approach aligns with:{" "}
        </p>
        <div className="grid gap-[90px] md:grid-cols-3 lg:px-12">
          <div className="flex flex-col items-center p-8 bg-white border rounded-lg shadow-sm border-[#068A43]/75">
            <div className="flex items-center justify-center w-12 h-12 mb-8 border rounded-lg bg-emerald-100 border-[#128034]/14">
              <span className="text-2xl text-[#128034]/75"><LockKeyhole /></span>
            </div>
            <p className="text-center text-gray-600">
              Institutional security standards
            </p>
          </div>

          <div className="flex flex-col items-center p-8 px-6 bg-white border rounded-lg shadow-sm border-[#068A43]/75">
            <div className="flex items-center justify-center w-12 h-12 mb-8 border rounded-lg bg-emerald-100 border-[#128034]/14">
              <span className="text-2xl text-[#128034]/75"><TrendingUp /></span>
            </div>
            <p className="text-center text-gray-600">
              Risk and Audit requirements
            </p>
          </div>

          <div className="flex flex-col items-center p-8 bg-white border rounded-lg shadow-sm border-[#068A43]/75">
            <div className="flex items-center justify-center w-12 h-12 mb-8 border rounded-lg bg-emerald-100 border-[#128034]/14">
              <span className="text-2xl text-[#128034]/75"><Shield /></span>
            </div>
            <p className="text-center text-gray-600">
              Regulatory expectations common to banks and licensed financial service providers
            </p>
          </div>
        </div>

        <p className="mx-auto mt-12 text-center text-gray-600 ">
          We work closely with client technology, operations, and compliance teams to ensure systems are deployed responsibly and sustainably.
        </p>
      </div>
      </AnimatedContent>
    </section>
  );
};
