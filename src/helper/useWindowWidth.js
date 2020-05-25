import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const isWindow = window !== undefined;
  const [windowWidth, setWindowWidth] = useState(isWindow ? window.innerWidth: 1387);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}
