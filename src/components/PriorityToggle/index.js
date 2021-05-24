import React, { useEffect, useState, useRef } from "react";

const PriorityToggle = () => {
  const [isActive, setIsActive] = useState(false);
  const componentMount = useRef(false);

  const toggle = () => setIsActive(!isActive);

  useEffect(() => {
    componentMount.current = true;
  }, []);

  return (
    <div
      className="toggle"
      role="button"
      aria-labelledby="priority-toggle-label"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          toggle();
        }
      }}
      onClick={toggle}
    >
      <span
        className="toggle__label"
        id="priority-toggle-label"
        title="High priority"
      >
        High priority
      </span>
      <div className="toggle__bg">
        <div
          className={`toggle__circle ${isActive && "toggle__circle--active"}`}
        />
      </div>
    </div>
  );
};

export default PriorityToggle;
