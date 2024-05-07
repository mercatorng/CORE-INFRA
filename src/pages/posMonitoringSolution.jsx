import { GreenUnderline } from "../components/greenUnderline";
import {
  LetsTalkButton,
  OpenAboutPageButton,
  RequestDemoButton,
} from "../components/button";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import img1 from "../assets/posmonHero.svg";
import { HeroImage } from "../components/heroImage";

export const PosMonitoringSolution = () => {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  const section5Ref = useRef();
  const section6Ref = useRef();
  const heroImgRef = useRef();

  const { isVisible: isVisibleSection1 } = useScrollVisibility(
    section1Ref,
    true
  );

  const { isVisible: isVisibleSection2 } = useScrollVisibility(section2Ref);

  const { isVisible: isVisibleSection3 } = useScrollVisibility(section3Ref);

  const { isVisible: isVisibleSection4 } = useScrollVisibility(section4Ref);
  const { isVisible: isVisibleSection5 } = useScrollVisibility(section5Ref);
  const { isVisible: isVisibleSection6 } = useScrollVisibility(section6Ref);

  const { isVisible: isVisibleHeroImg } = useScrollVisibility(heroImgRef);

  const section3data = [
    {
      id: 0,
      content:
        " Track and monitor transactions in real-time, enabling proactive identification and resolution of issues.",
      title: "Transaction Monitoring: ",
    },
    {
      id: 1,
      content:
        " Receive timely alerts and notifications regarding terminal performance, uptime, and potential hardware or software issues.",
      title: "Terminal Health Monitoring:",
    },
    {
      id: 2,
      content:
        " Streamline your settlement processes with comprehensive reconciliation modules, ensuring accurate and efficient financial reporting.",
      title: "Settlement and Reconciliation: ",
    },
  ];

  return (
    <>
      {/* section 1 */}
      <AnimatedContent isVisible={isVisibleSection1}>
        <section ref={section1Ref} className="  px-3 md:px-16 lg:px-28">
          <h1 className=" text-3xl relative z-20 font-bold mb-8 md:text-5xl lg:text-7xl  w-fit ">
            Gain Unparalleled {""}
            <span className=" relative inline-block">
              Visibility
              <GreenUnderline />
            </span>{" "}
            and Control
          </h1>
          {/* buttons */}
          <div className=" flex flex-wrap gap-4">
            <RequestDemoButton
              text={"Request a Demo"}
              style={" bg-ctaGreen  mt-6"}
            />
          </div>
        </section>
      </AnimatedContent>

      {/* hero*/}
      <AnimatedContent isVisible={isVisibleHeroImg}>
        <div ref={heroImgRef}>
          <HeroImage heroImg={img1} altText={"issuing as a service hero"} />
        </div>
      </AnimatedContent>

      {/* section 2 */}
      <AnimatedContent isVisible={isVisibleSection2}>
        <section ref={section2Ref} className="  px-3 md:px-16 lg:px-28 mb-16">
          <div className=" grid gap-y-4 md:text-2xl ">
            <p>
              In retail and payments acquiring, ensuring the smooth operation of
              your point-of-sale (POS) terminals is crucial for delivering
              exceptional customer experiences and maximizing revenue streams.
            </p>
            <p>
              Introducing our cutting-edge POS Monitoring Solution, designed to
              provide you with comprehensive visibility and control over your
              POS terminal fleet, regardless of the device manufacturer or
              Payment Terminal Service Provider (PTSP).
            </p>
          </div>
        </section>
      </AnimatedContent>

      {/* section 3 */}
      <AnimatedContent isVisible={isVisibleSection3}>
        <section ref={section3Ref} className="   px-3 md:px-16 lg:px-28 mb-16">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
            Seamless Integration, Agnostic Monitoring
          </h1>
          <div className=" grid gap-y-4 md:text-2xl">
            <p>
              Our solution seamlessly connects to your POS terminals, enabling
              real-time monitoring and reporting of transaction status, terminal
              health, and operational performance. With its agnostic
              architecture, our platform supports a wide range of devices and
              PTSPs, ensuring a unified and consistent monitoring experience
              across your entire terminal network.
            </p>
          </div>
        </section>
      </AnimatedContent>

      {/* section 4 */}
      <AnimatedContent isVisible={isVisibleSection4}>
        <section ref={section4Ref} className="   px-3 md:px-16 lg:px-28 mb-16">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
            Real-Time Visibility and Actionable Insights
          </h1>
          <div className=" grid gap-y-4 md:text-2xl">
            <p>
              Gain unprecedented visibility into your POS operations with our
              intuitive dashboards and reporting modules:
            </p>
            <ul className=" list-decimal pl-8  md:pl-12 mt-4  grid gap-y-4">
              {section3data.map(({ id, content, title }) => (
                <li key={id}>
                  <span className=" font-medium">{title}</span> {content}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </AnimatedContent>

      {/* section 5 */}
      <AnimatedContent isVisible={isVisibleSection5}>
        <section ref={section5Ref} className="  px-3 md:px-16 lg:px-28 mb-16">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
            Empower Acquirers and Merchants
          </h1>
          <div className=" grid gap-y-4 md:text-2xl">
            <p>
              Our solution is designed to meet the unique needs of both
              acquirers and merchants, providing tailored dashboards and
              reporting capabilities:
            </p>
            <ul className="pl-8  md:pl-12 mt-4  grid gap-y-4">
              <li>
                <span className=" font-medium">-Acquirer Dashboard: </span> Gain
                a centralized view of your entire terminal network, enabling
                efficient management, proactive issue resolution, and informed
                decision-making.
              </li>
              <li>
                <span className=" font-medium">-Merchant Dashboard:</span>{" "}
                Empower your merchants with real-time insights into their POS
                operations, transaction data, and terminal performance,
                fostering transparency and trust.
              </li>
            </ul>
          </div>
        </section>
      </AnimatedContent>

      {/* section 6 */}
      <AnimatedContent isVisible={isVisibleSection6}>
        <section ref={section6Ref} className="   px-3 md:px-16 lg:px-28 mb-16">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
            Maximize Uptime, Enhance Customer Experiences
          </h1>
          <div className=" grid gap-y-4 md:text-2xl">
            <p>
              By leveraging our POS Monitoring Solution, you can proactively
              identify and address potential issues before they impact your
              operations, maximizing terminal uptime and ensuring seamless
              customer experiences. Our solution not only optimizes your
              operational efficiency but also enhances customer satisfaction and
              loyalty, driving long-term business success.
            </p>
            <p>
              Experience the power of comprehensive POS monitoring and take
              control of your terminal fleet today.
            </p>
          </div>
          <RequestDemoButton
            text={"Request a Demo"}
            style={" bg-ctaGreen  mt-6"}
          />
        </section>
      </AnimatedContent>
    </>
  );
};
