import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const [showCookies, setShowCookies] = useState(false);

  const handleAccept = () => {
    setCookie("cookieConsent", true, { path: "/" });
    setShowCookies(false);
  };

  const handleReject = () => {
    setCookie("cookieConsent", false, { path: "/" });
    setShowCookies(false);
  };

  // show cookies after delay is over
  useEffect(() => {
    if (!cookies.cookieConsent) {
      const delayTimeout = setTimeout(() => {
        setShowCookies(true);
      }, 4000);

      return () => clearTimeout(delayTimeout);
    }
  }, [cookies.cookieConsent]);

  return (
    <>
      {showCookies && (
        <div className="fixed bottom-4 left-[50%] -translate-x-[50%] border font-bold bg-black bg-opacity-80 w-[50%] md:w-[40%] text-white  p-4 shadow-lg rounded-2xl text-sm ">
          <p className="mb-4">
            CoreInfra uses cookies to enhance your browsing experience and
            analyze the performance and traffic on our website.
          </p>
          <div className=" flex justify-between">
            <button
              onClick={handleAccept}
              className="mr-2 border px-4 py-1 rounded-md hover:text-ctaGreen"
            >
              Accept
            </button>
            <button
              onClick={handleReject}
              className="border text-white px-4 py-1 rounded-md hover:text-ctaGreen"
            >
              Reject
            </button>
          </div>
        </div>
      )}
    </>
  );
};
