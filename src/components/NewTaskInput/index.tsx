import React, { useState } from "react";
import PriorityToggle from "components/PriorityToggle";
import useMediaQuery from "hooks/useMediaQueries";
import Plus from "components/Icon/Plus";
import { rawMq } from "utils/media-queries";

type Props = {
  addNewTask: (newTask: string, isHighPriority: boolean) => void;
  hideModal?: VoidFunction;
};

const NewTaskInput: React.FC<Props> = ({ addNewTask, hideModal }) => {
  const [newTask, setNewTask] = useState("");
  const [isHighPriority, setHighPriority] = useState(false);
  const isDesktop = useMediaQuery(rawMq.tabLand);
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
      {isDesktop ? (
        <label className="new-task__label">New task</label>
      ) : (
        <div className="new-task__header">
          <label id="my-modal-label" className="new-task__label">
            New task
          </label>
          <button onClick={hideModal}>
            <Plus className="icon-rotate" />
          </button>
        </div>
      )}

      <div className="new-task__input-wrapper">
        <input
          value={newTask}
          type="text"
          name="newTask"
          className="new-task__input"
          placeholder="Insert task title..."
          onChange={handleChange}
        />
        <div className="new-task__tools">
          <div className="toggle">
            <PriorityToggle
              handleHighPriority={handleHighPriority}
              isHighPriority={isHighPriority}
            />
          </div>
          <button
            onClick={!isDesktop && newTask ? hideModal : undefined}
            className={`button ${newTask ? "button--active" : ""}`}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewTaskInput;
