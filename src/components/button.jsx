import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../utils/context";

export const OpenAboutPageButton = ({ text, style }) => {
  const { setActiveLink } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/about");
        setActiveLink("/about");
      }}
      className={`rounded-md px-3 py-2 font-medium shadow-sm  ${style}`}
    >
      {text}
    </button>
  );
};

export const RequestDemoButton = ({ text, style }) => {
  const { setActiveLink } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        setActiveLink("/contact-us");
        navigate("/contact-us");
      }}
      className={`rounded-md px-3 py-2 font-medium shadow-sm  ${style}`}
    >
      {text}
    </button>
  );
};

export const GetInTouchBTN = ({ style }) => {
  const { setActiveLink } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        setActiveLink("/contact-us");
        navigate("/contact-us");
      }}
      
      className={`shadow-[inset_0px_0px_8px_1px_#14141400] font-instrument rounded-xl px-5 py-[14px] border border-[#807f7f]   text-[13px] font-semibold bg-[#e1e4eb] w-fit ${
        style && style
      } `}
    >
      Get in touch
    </button>
  );
};
