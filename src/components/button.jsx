import React from "react";

export const GlobalCTAButton = ({ text, style, func }) => {
  return (
    <button
      onClick={func}
      className={`rounded-md px-3 py-2 font-medium shadow-sm  ${style}`}
    >
      {text}
    </button>
  );
};
