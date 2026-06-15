import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** La navigare între rute, pagina începe de sus (ex. din banere către produs). */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
