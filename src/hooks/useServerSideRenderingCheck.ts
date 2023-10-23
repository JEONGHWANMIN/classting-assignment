import { useState, useEffect } from "react";

export const useServerSideRenderingCheck = () => {
  const [isServerSideRendered, setIsServerSideRendered] = useState(true);

  useEffect(() => {
    setIsServerSideRendered(false);
  }, []);

  return { isServerSideRendered };
};
