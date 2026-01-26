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
    true,
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
    <section className="w-full px-8 md:px-16 lg:px-28">
      <AnimatedContent isVisible={isVisibleHeroContent}>
        <div
          ref={heroContentRef}
          className="relative z-50 pt-8 mb-24 text-center max-w-[936px] md:px-[120px]  place-self-center "
        >
          <h1 className="relative z-20 mb-4 font-bold tex4t-xl font-aileron md:text-2xl lg:text-4xl ">
            We build the core infrastructure <br /> behind trusted financial
            systems.
          </h1>
          <p className=" text-[#737373] font-instrument">
            Modern financial products are only as strong as the infrastructure
            behind them. <br/> CoreInfra designs and delivers the critical systems that
            power cards, payments, and digital banking so financial institutions
            can launch faster, operate securely, and scale with confidence.
          </p>
          {/* buttons */}
          <div className="flex mx-auto mt-12 gap-x-4 w-fit">
            <GetInTouchBTN />
            <Link
              to="/about"
              className="font-instrument rounded-xl px-5 py-[14px] border  shadow-sm   text-white text-[13px] font-semibold bg-ctaGreen bg-gradient-to-tr from-[#10D46B] to-[#086E38B2]/70 w-fit"
            >
              Explore more
            </Link>
          </div>
        </div>
      </AnimatedContent>
      {/* company */}
     
    </section>
  );
};
