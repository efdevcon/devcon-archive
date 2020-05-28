import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const isWindow = typeof window !== `undefined`;
  /* 2nd value is arbitrary, we just have this condition so that
   * Gatsby doesn't fail on build. See here for details:
   * https://www.gatsbyjs.org/docs/debugging-html-builds/#how-to-check-if-window-is-defined */
  const [windowWidth, setWindowWidth] = useState(
    isWindow ? window.innerWidth : 1387
  );

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}
