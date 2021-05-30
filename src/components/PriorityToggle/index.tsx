import React from "react";

type Props = {
  handleHighPriority: VoidFunction;
  isHighPriority: boolean
};

const PriorityToggle: React.FC<Props> = ({ handleHighPriority, isHighPriority }) => {
  

  return (
    <div
      className="priority-toggle"
      role="button"
      aria-labelledby="priority-toggle-label"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          handleHighPriority();
        }
      }}
      onClick={() => handleHighPriority()}
    >
      <span
        className="priority-toggle__label"
        id="priority-toggle-label"
        title="High priority"
      >
        High priority
      </span>
      <div className="priority-toggle__bg">
        <div
          className={`priority-toggle__circle ${isHighPriority && "priority-toggle__circle--active"}`}
        />
      </div>
    </div>
  );
};

export default PriorityToggle;
