import { useRef } from "react";
import AnimatedContent from "../animatedContent";
import { useScrollVisibility } from "../../hooks/useScrollHook";
import jaizLogo from "../../assets/jaizBankLogo.png";
import providusLogo from "../../assets/providusLogo.png";
import titanBank from "../../assets/titanBankLogo.png";
import keystoneLogo from "../../assets/keystoneLogo.png";
import { GetInTouchBTN } from "../button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const heroContentRef = useRef(null);
  const companyScrollRef = useRef(null);

  const { isVisible: isVisibleHeroContent } = useScrollVisibility(
    heroContentRef,
    true
  );

  const { isVisible: companyScrollContainer } =
    useScrollVisibility(heroContentRef);

  const companyLogoData = [
    {
      id: 0,
      img: jaizLogo,
      dimension: "w-[70px]",
    },
    {
      id: 1,
      img: providusLogo,
      dimension: "w-[90px] ",
    },
    {
      id: 2,
      img: titanBank,
      dimension: "w-[70px]",
    },
    {
      id: 3,
      img: keystoneLogo,
      dimension: "w-[90px]",
    },
  ];

  return (
    <section className=" px-8 md:px-16 lg:px-28  ">
      <div className=" absolute top-0 left-0 h-full w-full shadow-overlay"></div>
      <div className=" absolute top-0 left-0 h-full w-full abstract-bg  "></div>
      <AnimatedContent isVisible={isVisibleHeroContent}>
        <div
          ref={heroContentRef}
          className=" mb-24 text-center pt-8 relative z-50"
        >
          <h1 className=" font-cabinet text-xl md:text-2xl lg:text-4xl relative z-20 font-bold mb-8  ">
            Building the Core Infrastructure That <br /> Powers Modern Finance
          </h1>
          <p className=" text-[#737373]">
            From card management to payment processing, CoreInfra delivers the
            essential systems that keep <br /> financial services running. Think
            of us as the engine room of financial services—providing the <br />
            critical infrastructure that powers everything else.
          </p>
          {/* buttons */}
          <div className=" flex gap-x-4 mt-6 mx-auto w-fit">
            <GetInTouchBTN />
            <Link
              to="/about"
              smooth={true}
              duration={500}
              className=" font-instrument bg-[#F9FAFB] text-[#1A1A1A] text-[13px] border border-[#E1E4EB] rounded-xl px-5 py-[14px] font-medium cursor-pointer grid place-items-center "
            >
              Explore more
            </Link>
          </div>
        </div>
      </AnimatedContent>
      {/* company */}
      <AnimatedContent isVisible={companyScrollContainer}>
        <div
          ref={companyScrollRef}
          className=" flex flex-col text-center md:text-xl mb-12 relative z-50 overflow-hidden "
        >
          <p className=" mb-4 font-cabinet text-[#333333] font-bold text-[15px]">
            Our Trusted Partners
          </p>
          <div className=" overflow-hidden  md:w-[416px] mx-auto">
            <div className=" companyContainer  flex   gap-x-8  ">
              <div className=" animate-scroll flex  gap-x-8 items-center logosContainer ">
                {companyLogoData.map(({ img, id, dimension }) => (
                  <div key={id} className={`shrink-0  ${dimension} h-fit `}>
                    <img
                      src={img}
                      alt={`Image ${id}`}
                      className={`w-full ${
                        id == 3 ? "bg-black p-2" : "bg-transparent"
                      } `}
                    />
                  </div>
                ))}
              </div>
              <div className=" animate-scroll flex  gap-x-8   items-center logosContainer">
                {companyLogoData.map(({ img, id, dimension }) => (
                  <div key={id} className={`shrink-0  ${dimension} h-fit `}>
                    <img
                      src={img}
                      alt={`Image ${id}`}
                      className={`w-full ${
                        id == 3 ? "bg-black p-2" : "bg-transparent"
                      } `}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};
