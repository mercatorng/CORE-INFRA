import React from "react";

const AboutCoreinfra = () => {
  return (
    <div className="bg-gradient-to-b from-black via-[#333333] to-[#666666]/[0.24] pt-[130px] text-white  ">
      <div className="container flex flex-col items-center px-4 mx-auto">
        <div className="flex flex-col items-center gap-[88px] font-instrument">
          <h1 className="mb-4 text-[40px] font-bold text-white max-w-[680px] leading-[1.1] text-center">
            We Build Financial Infrastructure So You Can Focus on Your Business
          </h1>
          <div className="flex flex-col gap-4 text-lg">
            <p className="text-lg text-white font-instrument ">
              CoreInfra is a financial technology infrastructure company serving
             <span className="font-semibold"> banks, microfinance institutions, fintechs, and regulated
              enterprises.</span> 
            </p>
            
            <div className="block">
                <p>We operate at the <span className="font-semibold">infrastructure layer</span>, designing systems that sit between:</p>
            <ul className="list-disc list-inside">
                <li className="pointer-events-auto">Core banking platforms</li>
                <li>Payment processors and networks</li>
                <li>Customer-facing digital channels</li>
            </ul>
            </div>
            
            <div className="px-12 py-2 rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] self-center mt-4 leading-[1.3] bg-gradient-to-r from-[#0AD266]  to-[#056C34] max-w-[912px]"><p className="text-2xl text-center">We build the technology foundation that enables financial products to
 work—reliably, securely, and at scale.
</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCoreinfra;
