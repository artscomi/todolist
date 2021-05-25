import React, { useState } from "react";
import PriorityToggle from "components/PriorityToggle";

type Props = {
  addTask: React.VoidFunctionComponent;
};

const NewTaskDesktop: React.FC<Props> = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");
  const [isHighPriority, setHighPriority] = useState(false)
  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    if (newTask) {
      addTask(newTask, isHighPriority);
    }
    setNewTask("");
    setHighPriority(false);
  };

  const handleHighPriority = (highPriority: boolean) => {
    setHighPriority(!highPriority);
  };

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setNewTask(e.currentTarget.value);
  };

  return (
    <form className="new-task" onSubmit={handleSubmit}>
      <label className="new-task__label">New task</label>
      <div className="new-task__input-wrapper">
        <input
          value={newTask}
          type="text"
          name="newTask"
          className="new-task__input"
          placeholder="insert task title..."
          onChange={handleChange}
        />
        <button
          className={`new-task__button ${
            newTask ? "new-task__button--active" : ""
          }`}
        >
          Add
        </button>
        <div className="toggle--desktop">
          <PriorityToggle handleHighPriority={handleHighPriority} isHighPriority={isHighPriority} />
        </div>
      </div>
    </form>
  );
};

export default NewTaskDesktop;
