import { GreenUnderline } from "../components/greenUnderline";
import { RequestDemoButton } from "../components/button";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import { HeroImage } from "../components/heroImage";
import img1 from "../assets/digitalSolutionHero.svg";

export const DigitalBankingSolutions = () => {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  const section5Ref = useRef();
  const heroImgRef = useRef();

  const { isVisible: isVisibleSection1 } = useScrollVisibility(
    section1Ref,
    true
  );

  const { isVisible: isVisibleSection2 } = useScrollVisibility(section2Ref);

  const { isVisible: isVisibleSection3 } = useScrollVisibility(section3Ref);
  const { isVisible: isVisibleSection4 } = useScrollVisibility(section4Ref);
  const { isVisible: isVisibleSection5 } = useScrollVisibility(section5Ref);

  const { isVisible: isVisibleHeroImg } = useScrollVisibility(heroImgRef);

  const section4data = [
    {
      id: 0,
      content:
        " Provide your customers with a secure and user-friendly online banking experience, enabling them to manage their accounts, transfer funds, and access a wide range of financial services from the convenience of their devices.",
      title: "Internet Banking:",
    },
    {
      id: 1,
      content:
        " Empower your customers with feature-rich mobile banking applications, allowing them to conduct transactions, check balances, and access personalized financial insights on-the-go.",
      title: "Mobile Banking: ",
    },
    {
      id: 2,
      content:
        " Tailor your digital banking offerings with innovative payment solutions, such as peer-to-peer payments, QR code-based payments, and contactless transactions, catering to the evolving needs of your customer base.",
      title: "Custom Payment Solutions:  ",
    },
  ];

  return (
    <>
      <AnimatedContent isVisible={isVisibleSection1}>
        <section ref={section1Ref} className="   px-3 md:px-16 lg:px-28">
          <h1 className=" text-2xl md:text-4xl lg:text-5xl relative z-20 font-bold mb-8   w-fit ">
            Unleash the Power of{" "}
            <span className=" relative inline-block">
              Digital
              <GreenUnderline />
            </span>{" "}
            Banking with Our Comprehensive Infrastructure
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

      {/* hero image */}
      <AnimatedContent isVisible={isVisibleHeroImg}>
        <div ref={heroImgRef}>
          <HeroImage heroImg={img1} altText={"hero"} />
        </div>
      </AnimatedContent>

      {/* section 2 */}
      <AnimatedContent isVisible={isVisibleSection2}>
        <section ref={section2Ref} className="  px-3 md:px-16 lg:px-28 mb-16">
          <div className=" flex flex-col gap-y-8 ">
            <p>
              In the era of digital transformation, financial institutions must
              adapt to the evolving needs and preferences of their customers.
              Our cutting-edge Digital Banking Infrastructure empowers you to
              stay ahead of the curve, offering an array of innovative digital
              banking services across multiple channels, including ATMs, POS
              terminals, web portals, mobile apps, USSD, NFC, QR codes, and
              kiosks.
            </p>
          </div>
          <RequestDemoButton
            text={"Request a Demo"}
            style={" bg-ctaGreen  mt-6"}
          />
        </section>
      </AnimatedContent>

      {/* section 3 */}
      <AnimatedContent isVisible={isVisibleSection3}>
        <section ref={section3Ref} className="   px-3 md:px-16 lg:px-28 mb-16">
          <h1 className=" font-bold text-xl md:text-2xl lg:text-4xl mb-4">
            Leverage Your Existing Investments, Extend Your Reach
          </h1>
          <div>
            <p>
              Our solution seamlessly integrates with your existing payments
              infrastructure and card management systems, allowing you to
              maximize the value of your investments while extending your mobile
              banking offerings with fully EMV-compliant digital banking
              services. By connecting multiple systems to your switch and
              front-end processors (FEPs), you can unlock a world of new service
              possibilities tailored to the digital natives.
            </p>
          </div>
        </section>
      </AnimatedContent>

      {/* section 4 */}
      <AnimatedContent isVisible={isVisibleSection4}>
        <section ref={section4Ref} className="   px-3 md:px-16 lg:px-28 mb-16">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold  mb-4">
            Omnichannel Digital Banking Solutions
          </h1>
          <div className=" grid gap-y-8">
            <p>
              Embrace the future of banking with our comprehensive suite of
              omnichannel digital banking solutions:
            </p>
            <ul className=" list-decimal pl-4 md:pl-12 mt-4  grid gap-y-4">
              {section4data.map(({ id, content, title }) => (
                <li key={id}>
                  <span className=" font-medium">{title}</span> {content}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </AnimatedContent>

      {/* section  */}
      <AnimatedContent isVisible={isVisibleSection5}>
        <section ref={section5Ref} className="   px-3 md:px-16 lg:px-28 mb-16">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold  mb-4">
            Seamless Integration, Scalable Architecture
          </h1>
          <div className=" grid gap-y-8">
            <p>
              Our Digital Banking Infrastructure is designed with a modular and
              scalable architecture, ensuring seamless integration with your
              existing systems and enabling future expansion as your digital
              banking needs evolve. Leverage our open APIs and robust
              integration capabilities to create a cohesive and consistent
              digital banking experience across all channels.
            </p>
            <p>
              Partner with us and unlock the full potential of digital banking.{" "}
            </p>
          </div>
        </section>
      </AnimatedContent>
    </>
  );
};
