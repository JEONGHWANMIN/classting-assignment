import { useEffect, useRef, useState } from "react";

const useDropDown = () => {
  const [isDrop, setIsDrop] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsDrop(false);
    }
  };

  const handleChangeDrop = (value?: boolean) => {
    setIsDrop((prev) => (value !== undefined ? value : !prev));
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return {
    isDrop,
    ref,
    handleChangeDrop,
  };
};

export { useDropDown };
