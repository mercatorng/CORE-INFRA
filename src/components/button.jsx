import React from "react";

export const GlobalCTAButton = ({ text, style, func }) => {
  return (
    <button
      onClick={func}
      className={`rounded-md px-2 py-1 font-medium ${style}`}
    >
      {text}
    </button>
  );
};
