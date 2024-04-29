import { GreenUnderline } from "../components/greenUnderline";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import { useRef } from "react";
import { Link } from "react-router-dom";

export const ContactUs = () => {
  const section1Ref = useRef();
  const { isVisible: isVisibleSection1 } = useScrollVisibility(
    section1Ref,
    true
  );

  const section2Ref = useRef();
  const { isVisible: isVisibleSection2 } = useScrollVisibility(section2Ref);

  return (
    <>
      <AnimatedContent isVisible={isVisibleSection1}>
        <section ref={section1Ref} className="px-3   md:px-16 lg:px-28">
          <h1 className=" font-bold text-3xl z-10 relative md:text-5xl lg:text-7xl mb-8 w-fit ">
            Let's Talk!
            <GreenUnderline />
          </h1>
          <div className=" grid place-items-center gap-y-8 md:text-2xl ">
            <p className=" ">
              We are all about partnership. Every great partnership begins with
              a conversation. For enquiry of any kind, including sales,
              partnership etc please contact us at
            </p>
            <p></p>
            <Link className=" hover:text-ctaGreen" to="tel:+2348057108625">
              Tel: +234 805 710 8625
            </Link>
            <Link
              to="mailto:connect@coreinfrahq.com"
              className=" hover:text-ctaGreen"
            >
              {" "}
              connect@coreinfrahq.com
            </Link>
            <p>or contact the following persons directly</p>
          </div>
        </section>
      </AnimatedContent>
      {/* personel */}
      <AnimatedContent isVisible={isVisibleSection2}>
        <section
          ref={section2Ref}
          className="px-3 mt-20  md:px-16 lg:px-28 mb-20"
        >
          <div className="md:text-xl flex flex-col md:flex-row   gap-20 md:gap-x-60 justify-center items-center ">
            {/* ceo */}
            <p className=" flex flex-col gap-y-2">
              <span className=" font-medium">CEO </span>
              <span>Oliver Johnson</span>
              <Link className=" hover:text-ctaGreen" to="tel:+2348057108625">
                Tel: +234 805 710 8625
              </Link>
              <Link
                to="mailto:oliver@coreinfrahq.com"
                className=" hover:text-ctaGreen"
              >
                {" "}
                oliver@coreinfrahq.com
              </Link>
            </p>
            {/* COO */}
            <p className=" flex flex-col gap-y-2">
              <span className=" font-medium">COO </span>
              <span>Olabisi Josh-Falade</span>
              <Link className=" hover:text-ctaGreen" to="tel:+2348028402186">
                Tel: +234 802 840 2186
              </Link>
              <Link
                to="mailto:olabisi@coreinfrahq.com"
                className=" hover:text-ctaGreen"
              >
                {" "}
                olabisi@coreinfrahq.com
              </Link>
            </p>
          </div>
        </section>
      </AnimatedContent>
    </>
  );
};
