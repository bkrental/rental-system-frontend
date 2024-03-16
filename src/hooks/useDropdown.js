import { useEffect, useRef, useState } from "react";

export default function useDropdown() {
  const elementRef = useRef(null);
  const [isOpened, setIsOpened] = useState(false);

  const toggleDropdown = () => setIsOpened((prev) => !prev);

  useEffect(() => {
    if (!isOpened || !elementRef.current) return;

    const handleClickOutside = (e) => {
      if (elementRef.current.contains(e.target)) {
        return;
      }

      toggleDropdown();
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  });

  return [elementRef, isOpened, toggleDropdown];
}
