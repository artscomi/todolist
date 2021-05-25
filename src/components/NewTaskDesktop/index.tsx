import React, { useState } from "react";
import PriorityToggle from "components/PriorityToggle";

type Props = {
  addNewTask: (newTask: string, isHighPriority: boolean) => void;
};

const NewTaskDesktop: React.FC<Props> = ({ addNewTask }) => {
  const [newTask, setNewTask] = useState("");
  const [isHighPriority, setHighPriority] = useState(false);
  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    if (newTask) {
      addNewTask(newTask, isHighPriority);
    }
    setNewTask("");
    setHighPriority(false);
  };

  const handleHighPriority = () => {
    setHighPriority(!isHighPriority);
  };

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setNewTask(e.target.value);
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
        <div className="toggle--desktop">
          <PriorityToggle
            handleHighPriority={handleHighPriority}
            isHighPriority={isHighPriority}
          />
        </div>
        <button
          className={`new-task__button ${
            newTask ? "new-task__button--active" : ""
          }`}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default NewTaskDesktop;
