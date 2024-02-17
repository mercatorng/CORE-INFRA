import { GreenUnderline } from "../components/greenUnderline";
import { GlobalCTAButton } from "../components/button";
import { DummyImg } from "./bespokePayment";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import { HeroImage } from "../components/heroImage";
import img1 from "../assets/coporateImg1.jpg";
import { SectionTwoImages } from "../components/sectionTwoImages";
import img2 from "../assets/bespokeImg2.png";
import img3 from "../assets/bespokeImg3.png";

export const CoporateDisbursement = () => {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const heroImgRef = useRef();

  const { isVisible: isVisibleSection1 } = useScrollVisibility(
    section1Ref,
    true
  );

  const { isVisible: isVisibleSection2 } = useScrollVisibility(section2Ref);

  const { isVisible: isVisibleSection3 } = useScrollVisibility(section3Ref);

  const { isVisible: isVisibleHeroImg } = useScrollVisibility(heroImgRef);

  return (
    <>
      {/* section 1 */}
      <AnimatedContent isVisible={isVisibleSection1}>
        <section
          ref={section1Ref}
          className=" text-black  px-3 md:px-16 lg:px-28"
        >
          <h1 className=" text-3xl relative z-20 font-bold mb-8 md:text-5xl lg:text-7xl  w-fit ">
            Optimize disbursements with our{" "}
            <span className=" relative inline-block">
              automated
              <GreenUnderline />
            </span>{" "}
            platform
          </h1>
          {/* buttons */}
          <div className=" flex flex-wrap gap-4">
            <GlobalCTAButton text={"Explore More"} style={" bg-gray-200   "} />
            <GlobalCTAButton text={"Get in touch"} style={" bg-ctaGreen   "} />
          </div>
        </section>
      </AnimatedContent>
      {/* black and white boxes */}
      <AnimatedContent isVisible={isVisibleHeroImg}>
        <div ref={heroImgRef}>
          <HeroImage heroImg={img1} altText={"hero"} />
        </div>
      </AnimatedContent>
      {/* section 2 */}
      <AnimatedContent isVisible={isVisibleSection2}>
        <section
          ref={section2Ref}
          className=" text-black  px-3 md:px-16 lg:px-28 mb-16"
        >
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
            Corporate Disbursement
            <br />
            Platform
          </h1>
          <div className=" flex flex-col gap-y-8">
            <p className=" md:text-2xl">
              PayBridge is a corporate disbursement and inflow management
              solution designed to <br /> address the specific needs of
              businesses, especially in the financial services sector such{" "}
              <br /> as insurance companies, micro-loans and lending companies,
              micro-finance banks etc. <br /> It serves as a centralized
              platform that facilitates efficient management of funds by
              seamlessly <br /> integrating and automating both outgoing
              payments (Payouts) and incoming payments (Payin).
            </p>
            <p className=" md:text-2xl">
              PayBridge leverages an inbuilt virtual account management system
              to connect your <br /> internal ledgers to your bank accounts,
              effectively forming a bridge that allows you to <br /> make
              disbursements directly from your internal accounting systems to
              your vendors, <br />
              suppliers, contractors etc.
            </p>
            <p className=" md:text-2xl">
              PayBridge streamlines and optimizes financial transactions,
              offering several key benefits:
              <ul className=" list-disc list-inside flex flex-col gap-y-3 mt-3">
                <li>
                  <span className=" font-medium">
                    Streamlined Payments Management:
                  </span>{" "}
                  PayBridge simplifies, standardizes and <br /> automates the
                  Payout approval workflows, ensuring that payments are made{" "}
                  <br /> accurately and promptly.
                </li>
                <li>
                  <span className=" font-medium">Customizable Workflows:</span>{" "}
                  PayBridge is highly adaptable, allowing <br /> organizations
                  to configure and customize approval workflows to align <br />{" "}
                  with their specific internal processes and operations.
                </li>
                <li>
                  <span className=" font-medium">
                    Efficient End-to-End payment flows:
                  </span>{" "}
                  In addition to Payout, PayBridge provides <br /> a convenient
                  and secure way for funds to flow into the internal financial{" "}
                  <br />
                  system i.e. collections
                </li>
                <li>
                  <span className=" font-medium">Regulatory Compliance:</span>
                  The solution is designed to meet the regulatory <br />{" "}
                  requirements and compliance standards relevant to the
                  financial services <br /> industry. Thereby reducing
                  compliance-related risks.
                </li>
                <li>
                  <span className=" font-medium">Data Security:</span> PayBridge
                  employs advanced data encryption techniques <br /> to secure
                  sensitive financial information. It prioritizes the protection
                  of <br /> financial data to prevent unauthorized access and
                  fraud.
                </li>
              </ul>
            </p>
          </div>
          <GlobalCTAButton
            text={"Request a Demo"}
            style={" bg-ctaGreen  mt-6"}
          />
        </section>
      </AnimatedContent>
      {/* section 3 */}
      <AnimatedContent isVisible={isVisibleSection3}>
        <section
          ref={section3Ref}
          className=" text-black  px-3 md:px-16 lg:px-28 "
        >
          <SectionTwoImages
            img1={img2}
            img2={img3}
            altText={"laptop"}
            altText2={"laptop and debit card"}
          />
        </section>
      </AnimatedContent>
    </>
  );
};
