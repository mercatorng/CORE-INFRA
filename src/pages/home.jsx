import { useState, useEffect, useRef } from "react";
import { GlobalCTAButton } from "../components/button";
import heroImg1 from "../assets/heroImg1.png";
import companyLogo1 from "../assets/featherdev.png";
import companyLogo2 from "../assets/neizte.png";
import companyLogo3 from "../assets/globalbank.png";
import companyLogo4 from "../assets/spherule.png";
import companyLogo5 from "../assets/lightBox.png";
import companyLogo6 from "../assets/boltShift.png";
import weOfferIconImg from "../assets/we-offer-icon.svg";
import txnMattersImg from "../assets/txn-matters-icon.svg";
import macbookImg from "../assets/Macbook-Pro-16-mockup.png";
import innovationIcon from "../assets/innovation-icon.svg";
import partnershipIcon from "../assets/partnership-icon.svg";
import cuttingEdgeIcon from "../assets/cutting-edge-icon.svg";
import expertiseIcon from "../assets/expertise-icon.svg";
import handShakeImg from "../assets/handshakeImg.png";
import twoBlackPeople from "../assets/two-black-people.png";
import greenHandshakeIcon from "../assets/handShakeGreen.svg";
import peopleIcon from "../assets/peopleIcon.svg";
// import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import checkMark from "../assets/checkmark.svg";
import padlockIcon from "../assets/padlock.svg";
import headPhoneIcon from "../assets/headPhones.svg";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import { useGlobalContext } from "../utils/context";
import { GreenUnderline } from "../components/greenUnderline";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";

export const Home = () => {
  const { dispatch } = useGlobalContext();
  // scroll animation
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  const section5Ref = useRef();
  const section6Ref = useRef();
  const section7Ref = useRef();
  const section8Ref = useRef();
  const section9Ref = useRef();
  const section10Ref = useRef();
  const section11Ref = useRef();

  const { isVisible: isVisibleSection1 } = useScrollVisibility(
    section1Ref,
    true
  );
  const { isVisible: isVisibleSection2 } = useScrollVisibility(section2Ref);
  const { isVisible: isVisibleSection3 } = useScrollVisibility(section3Ref);
  const { isVisible: isVisibleSection4 } = useScrollVisibility(section4Ref);
  const { isVisible: isVisibleSection5 } = useScrollVisibility(section5Ref);
  const { isVisible: isVisibleSection6 } = useScrollVisibility(section6Ref);
  const { isVisible: isVisibleSection7 } = useScrollVisibility(section7Ref);
  const { isVisible: isVisibleSection8 } = useScrollVisibility(section8Ref);
  const { isVisible: isVisibleSection9 } = useScrollVisibility(section9Ref);
  const { isVisible: isVisibleSection10 } = useScrollVisibility(section10Ref);
  const { isVisible: isVisibleSection11 } = useScrollVisibility(section11Ref);

  const section2Data = [
    {
      icon: weOfferIconImg,
      headerText: "Every Transaction Matters",
      text: "Transform every transaction into a meaningful engagement,  even those that falter. Our solution redefines the story of failed transactions, leaving a positive and enduring impression on your customers",
    },
    {
      icon: txnMattersImg,
      headerText: "What We Offer",
      subText1: "Innovation Leadership",
      subText2: "Profound Expertise",
      subText3: "Cutting-Edge Solutions",
      subText4: "Strategic Partnerships",
    },
  ];

  const whyChooseCoreInfraData = [
    {
      icon: innovationIcon,
      headerText: "Innovation Leadership",
      text: "We lead the way in innovation, constantly pushing boundaries to provide you with pioneering solutions that keep you at the forefront of your industry",
    },
    {
      icon: expertiseIcon,
      headerText: "Profound Expertise",
      text: "Benefit from our deep domain knowledge and extensive technological expertise. Our team is equipped with the skills to navigate complex challenges and deliver tailored solutions.",
    },
    {
      icon: cuttingEdgeIcon,
      headerText: "Cutting-Edge Solutions",
      text: "Stay ahead of the competition with our cutting-edge and differentiated solutions. We prioritize staying abreast of the latest technologies to ensure your business remains at the pinnacle of success",
    },
    {
      icon: partnershipIcon,
      headerText: "Strategic Partnerships",
      text: "Partnering with CoreInfra means aligning with a strategic ally. We are committed to being more than just a solution provider; we are your long-term partner in achieving and surpassing your business goals",
    },
  ];

  const section4Data = [
    {
      ref: section8Ref,
      visible: isVisibleSection8,
      img: handShakeImg,
      icon: greenHandshakeIcon,
      text: "As a strategic partner in the payments space, CoreInfra goes beyond being just another traditional solution supplier. We use our extensive knowledge of Payment Software Development to help you negotiate the complexities of today's financial environment and grow your business.",
      linkName: "Explore CoreInfra",
      linkUrl: "#",
    },
    {
      ref: section9Ref,
      visible: isVisibleSection9,
      img: twoBlackPeople,
      icon: peopleIcon,
      text: "We collaborate with your team to develop a personalized plan that is precisely aligned with your company's goals. This customized strategy drives increased profitability for your business by releasing the true power of payments.",
      linkName: "Explore CoreInfra",
      linkUrl: "#",
    },
  ];

  const section5Buttons = [
    {
      id: 0,
      title: "Initiation",
      content: [
        {
          headerText: "Analysis Stage",
        },
        { point: "Project Initiation" },
        { point: "Determine Management Objectives" },
        { point: "Determine team structure with roles and responsibilities" },
        { point: "Develop baseline project plan" },
        { point: "Create Communication Plan" },
      ],
    },
    {
      id: 1,
      title: "Design",
      content: [
        {
          headerText: "Design Stage",
        },
        { point: "Project Initiation" },
        { point: "Determine Management Objectives" },
        { point: "Determine team structure with roles and responsibilities" },
        { point: "Develop baseline project plan" },
        { point: "Create Communication Plan" },
      ],
    },
    {
      id: 2,
      title: "Build",
      content: [
        {
          headerText: "Build Stage",
        },
        { point: "Project Initiation" },
        { point: "Determine Management Objectives" },
        { point: "Determine team structure with roles and responsibilities" },
        { point: "Develop baseline project plan" },
        { point: "Create Communication Plan" },
      ],
    },
    {
      id: 3,
      title: "Monitor",
      content: [
        {
          headerText: "Monitor Stage",
        },
        { point: "Project Initiation" },
        { point: "Determine Management Objectives" },
        { point: "Determine team structure with roles and responsibilities" },
        { point: "Develop baseline project plan" },
        { point: "Create Communication Plan" },
      ],
    },
    {
      id: 4,
      title: "Go-Live",
      content: [
        {
          headerText: "Go-Live Stage",
        },
        { point: "Project Initiation" },
        { point: "Determine Management Objectives" },
        { point: "Determine team structure with roles and responsibilities" },
        { point: "Develop baseline project plan" },
        { point: "Create Communication Plan" },
      ],
    },
  ];

  const [activeButtonID, setActiveButton] = useState(0);

  const activeButtonContent = section5Buttons[activeButtonID].content;

  const serviceSecurityData = [
    {
      icon: padlockIcon,
      headerText: "Cutting Edge Security",
      point1:
        "Continually respond to new threats to retain the trust of your customers.",
      point2:
        "Security: DES, 3DES, AES, RSA, MAC, VISA PVV/CVV/CVV2, IBM PIN Offset.",
      point3:
        "Maintain compliance with global payment card industry mandates with guaranteed updates and continuous compliance",
      point4:
        "Custom Security Implementation to meet customers needs: 2FA, Security Questions, Device and Profile Locking etc",
    },
    {
      icon: headPhoneIcon,
      headerText: "Unparalleled Customer Service",
      point1:
        "Our partnership driven approach means that we are with you every step of the way until you win",
      point2: "Get the help you need whenever you need it",
      point3: "24/7 round the clock help",
    },
  ];

  const companyLogoData = [
    {
      id: 0,
      img: companyLogo1,
    },
    {
      id: 1,
      img: companyLogo2,
    },
    {
      id: 2,
      img: companyLogo3,
    },
    {
      id: 3,
      img: companyLogo4,
    },
    {
      id: 4,
      img: companyLogo5,
    },
    {
      id: 5,
      img: companyLogo6,
    },
  ];

  useEffect(() => {
    // set active page to empty string
    dispatch({ type: "CHANGE_ACTIVE_PAGE", payload: "" });
  }, []);

  const [activeLogoIndex, setActiveLogoIndex] = useState(0);
  useEffect(() => {
    // const interval = setInterval(() => {
    //   companyContainer.current.classList.add("translate-x-[100%]");
    //   setActiveLogoIndex(
    //     (prevIndex) => (prevIndex + 2) % companyLogoData.length
    //   );
    //   setInterval(() => {
    //     companyContainer.current.classList.add("-translate-x-[100%]");
    //   }, 4000);
    // }, 5000); // Adjust the interval as needed
    // return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className=" px-3 md:px-16 lg:px-24">
        <AnimatedContent isVisible={isVisibleSection1}>
          <div ref={section1Ref} className=" mb-12">
            <h1 className=" text-3xl relative z-20 font-bold mb-8 md:text-5xl lg:text-7xl  w-fit">
              Transforming transactions, <br /> Elevating{" "}
              <span className=" relative inline-block">
                possibilities
                <GreenUnderline />
              </span>
            </h1>
            <p className=" md:text-2xl">
              Empowering Financial Institutions with Secure, Efficient,
              and <br /> Insightful Payment Solutions: From Processing to Engagement
            </p>
            {/* buttons */}
            <div className=" flex gap-x-4 mt-12">
              <Link
                to="aboutSection"
                smooth={true}
                duration={500}
                className=" bg-white text-black rounded-md px-2 py-1 font-medium cursor-pointer "
              >
                {" "}
                Explore more{" "}
              </Link>
              <GlobalCTAButton
                text={"Get in touch"}
                style={" bg-ctaGreen text-black "}
              />
            </div>
          </div>
        </AnimatedContent>
        {/* hero image */}
        <AnimatedContent isVisible={isVisibleSection2}>
          <div ref={section2Ref} className=" mb-16">
            <img
              src={heroImg1}
              alt="hero"
              className=" w-full h-full object-cover"
            />
          </div>
        </AnimatedContent>
        {/* company */}
        <AnimatedContent isVisible={isVisibleSection3}>
          <div
            ref={section3Ref}
            className=" flex flex-col text-center md:text-xl mb-8"
          >
            <p className=" mb-4">Trusted Partnership</p>
            <p>A trusted partner you can rely on</p>
            <div className=" mt-8 relative border overflow-hidden w-fit mx-auto">
              <p className=" absolute h-full w-full bg-black bg-opacity-70 border z-10"></p>
              <div className=" flex gap-8 items-center justify-center  mx-auto w-fit border border-red-500">
                <div
                  className={` w-[10rem] px-2 border logo-box  transition duration-200 ease-in `}
                >
                  <img src={companyLogo1} alt="company" />
                </div>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </section>
      {/* section 2 white */}
      <section className=" bg-white pt-12 text-black">
        <AnimatedContent isVisible={isVisibleSection4}>
          <div ref={section4Ref} className=" text-center mb-12 px-4 md:px-16">
            <h1 className=" text-2xl md:text-5xl font-bold mb-4">
              Modern Payment Infrastructure
            </h1>
            <p className=" font-medium  md:text-2xl ">
              CoreInfra helps financial institutions to modernize their core{" "}
              <br />
              payment infrastructure. With years of experience and passion for{" "}
              <br />
              innovation, we have delivered many industry first solutions that
              drive <br /> growth and increase efficiency
            </p>
          </div>
        </AnimatedContent>
        {/* content and  macbook */}
        <AnimatedContent isVisible={isVisibleSection5}>
          <div
            ref={section5Ref}
            className=" flex flex-col lg:flex-row gap-8   pb-8 md:py-16"
          >
            <div className=" lg:pr-8 flex flex-col gap-y-8 lg:w-[50%]">
              {section2Data.map(
                ({
                  icon,
                  text,
                  headerText,
                  subText1,
                  subText2,
                  subText3,
                  subText4,
                }) => {
                  return (
                    <div
                      key={headerText}
                      className="pl-3 md:px-16 lg:pl-24 lg:pr-0"
                    >
                      <img src={icon} alt="message icon" className=" mb-4" />
                      <h2 className=" font-bold text-lg md:text-2xl">
                        {headerText}
                      </h2>
                      {text && (
                        <p className="  md:text-2xl w-[80vw] md:w-[70%] lg:w-full">
                          {text}
                        </p>
                      )}
                      {subText1 && (
                        <ul className=" list-disc list-inside  md:text-2xl ">
                          <li>{subText1}</li>
                          <li>{subText2}</li>
                          <li>{subText3}</li>
                          <li>{subText4}</li>
                        </ul>
                      )}
                    </div>
                  );
                }
              )}
            </div>
            <div className=" bg-gray-200 rounded-l-3xl py-8 md:grid md:place-items-center ml-3 md:ml-16 lg:ml-0">
              <img src={macbookImg} alt="mackbook" />
            </div>
          </div>
        </AnimatedContent>
      </section>
      {/*section 3 why choose core infra */}
      <Element name="aboutSection">
        <section className=" dot-grid-bg relative px-3 md:px-16 py-16 lg:px-24 ">
          {/* content */}
          <AnimatedContent isVisible={isVisibleSection6}>
            <div ref={section6Ref} className=" mb-12">
              <h1 className=" text-2xl md:text-5xl font-bold mb-4">
                Why Choose CoreInfra ?
              </h1>
              <p className="  md:text-2xl">
                At CoreInfra, we transcend conventional offerings, forging
                pathways to innovation, reliability, and success. Leveraging our
                profound domain knowledge and technological expertise. We
                deliver cutting-edge and distinctive solutions crafted to propel
                your business into the forefront of the finance and technology
                landscape, ensuring you stay ahead of the competition
              </p>
              <p className=" font-bold md:text-xl mt-4 mb-4">
                Ready to enhance your payment infrastructure?
              </p>
              <GlobalCTAButton
                text={"Get started"}
                style={" bg-ctaGreen text-black"}
              />
            </div>
          </AnimatedContent>
          <AnimatedContent isVisible={isVisibleSection7}>
            <div
              ref={section7Ref}
              className=" grid gap-4 md:grid-cols-2 lg:grid-cols-4"
            >
              {whyChooseCoreInfraData.map(
                ({ headerText, text, icon }, index) => {
                  return (
                    <div
                      key={headerText}
                      className={` p-4 grid gap-2 rounded-3xl text-[#2F405E] ${
                        index === 1 || index === 2
                          ? " bg-[#F8F8F8] "
                          : "bg-[#F9F3ED]"
                      }`}
                    >
                      <div className=" h-[32px] w-[32px] p-2 bg-white rounded-full shadow-lg">
                        <img
                          src={icon}
                          alt={headerText}
                          className=" w-full h-full object-cover"
                        />
                      </div>
                      <h2 className=" font-bold text-lg md:text-2xl">
                        {headerText}
                      </h2>
                      <p className=" font-semibold md:text-lg">{text}</p>
                    </div>
                  );
                }
              )}
            </div>
          </AnimatedContent>
        </section>
      </Element>
      {/* SECTION 4 */}
      <section className=" px-3 md:px-16 lg:px-24 py-16 bg-white">
        <div className=" flex flex-col  gap-12">
          {section4Data.map(
            ({ icon, img, text, linkName, linkUrl, visible, ref }, index) => {
              return (
                <AnimatedContent isVisible={visible}>
                  <div
                    ref={ref}
                    key={text}
                    className=" md:flex md:items-center gap-8 justify-between"
                  >
                    <div
                      className={`mb-4 md:mb-0 mx-auto   ${
                        index === 1 && "order-1"
                      } `}
                    >
                      <img src={img} alt={linkName} />
                    </div>
                    <div className=" text-black grid gap-4 md:w-[60%]">
                      <div className=" w-fit">
                        <img src={icon} alt={`${linkName} icon`} />
                      </div>
                      <p className="  md:font-medium md:text-2xl">{text}</p>
                      <Link
                        to={linkUrl}
                        className=" flex items-center text-green-500"
                      >
                        {linkName} <GoChevronRight className=" mt-1" />{" "}
                      </Link>
                    </div>
                  </div>
                </AnimatedContent>
              );
            }
          )}
        </div>
      </section>
      {/* section 5 */}
      <section className=" px-3 md:px-16 py-16 lg:px-24 ">
        <AnimatedContent isVisible={isVisibleSection10}>
          <div ref={section10Ref}>
            <p className=" text-center text-sm"> How we work</p>
            <h2 className=" text-center font-bold text-xl md:text-3xl">
              Our Project Management Framework
            </h2>
            <div className=" mt-8 mb-20 ">
              {/* Buttons */}
              <div className=" flex justify-between gap-1 mb-6 px-2 md:w-[60%] mx-auto">
                {section5Buttons.map(({ id, title }) => {
                  return (
                    <button
                      key={id}
                      className={`globalTransition font-semibold rounded-2xl md:px-3 md:py-2 text-sm p-1 px-2 text-white  ${
                        id === activeButtonID && "bg-ctaGreen "
                      } ${id != activeButtonID && "hover:text-ctaGreen"} `}
                      onClick={() => setActiveButton(id)}
                    >
                      {title}
                    </button>
                  );
                })}
              </div>
              {/* content */}
              <article className=" bg-white rounded-2xl p-3 md:p-6 flex flex-col md:flex-row justify-between md:items-center">
                {/* points */}
                <div className=" grid gap-4 mb-6 md:w-[45%]">
                  {activeButtonContent.map(({ headerText, point }) => {
                    return (
                      <div key={point} className=" text-black">
                        <p className=" font-bold text-xl md:2xl">
                          {headerText}
                        </p>
                        {point && (
                          <p className=" flex gap-3 items-center md:text-xl">
                            <span className=" shrink-0">
                              <img src={checkMark} alt="checkmark" />
                            </span>
                            {point}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
                {/* image */}
                <p className=" bg-slate-300 rounded-2xl max-h-[50rem] h-[20rem]  w-full md:max-w-[40%]"></p>
              </article>
            </div>
          </div>
        </AnimatedContent>
        {/* Service and Security Guaranteed */}
        <AnimatedContent isVisible={isVisibleSection11}>
          <article ref={section11Ref}>
            <h1 className=" font-bold text-2xl md:text-5xl mb-12">
              Service and Security Guaranteed
            </h1>
            <div className=" flex flex-col gap-8 md:flex-row justify-between">
              {serviceSecurityData.map(
                ({ headerText, icon, point1, point2, point3, point4 }) => {
                  return (
                    <div key={headerText}>
                      <div className=" w-fit mb-4">
                        <img src={icon} alt={headerText} />
                      </div>
                      <div>
                        <h2 className=" font-bold text-lg mb-4 md:text-2xl">
                          {headerText}
                        </h2>
                        <ul className=" list-inside list-disc md:text-lg">
                          <li>{point1}</li>
                          <li>{point2}</li>
                          <li>{point3}</li>
                          {point4 && <li>{point4}</li>}
                        </ul>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </article>
        </AnimatedContent>
      </section>
    </>
  );
};
