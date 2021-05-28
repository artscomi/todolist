import { useEffect } from "react";

const useKeyboardOrMouseEvent = (appContainer) => {
  const handleMouseDown = () => {
    if (appContainer.current) {
      appContainer.current.classList.add("mousedown");
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (appContainer.current) {
      if (e.key === "Enter" || e.key === "Tab") {
        appContainer.current.classList.remove("mousedown");
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};

export default useKeyboardOrMouseEvent;
