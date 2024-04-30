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

export const LetsTalkButton = ({ style }) => {
  const { setActiveLink } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        setActiveLink("/contact-us");
        navigate("/contact-us");
      }}
      className={`rounded-md px-3 py-2 font-medium shadow-sm  text-black bg-ctaGreen w-fit ${
        style && style
      } `}
    >
      Let's Talk
    </button>
  );
};
