import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Any unknown path is a GoHighLevel funnel page — redirect there automatically
    window.location.replace("https://go.libertyfunding.us" + location.pathname + location.search);
  }, [location.pathname, location.search]);

  return null;
};

export default NotFound;
