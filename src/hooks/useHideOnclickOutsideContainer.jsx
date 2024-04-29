import { useEffect } from "react";

export function useHideOnclickOutsideContainer(
  linkContainerRef,
  containerClassname,
  hideContainer
) {
  useEffect(() => {
    function hideOnclickOutsideContainer(e) {
      const clickedElement = e.target;

      // Check if the clicked element or its parent has the button class
      const isButtonClick =
        clickedElement.classList.contains(containerClassname) ||
        clickedElement.closest(`.${containerClassname}`);

      if (
        linkContainerRef.current &&
        !linkContainerRef.current.contains(e.target) &&
        !isButtonClick
      ) {
        hideContainer(false);
      }
    }

    document.addEventListener("click", hideOnclickOutsideContainer);

    return () => {
      document.removeEventListener("click", hideOnclickOutsideContainer);
    };
  }, [linkContainerRef, containerClassname, hideContainer]);
}
