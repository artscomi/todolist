import PriorityToggle from "components/PriorityToggle";

const NewTaskDesktop = () => (
  <div className="new-task">
    <label className="new-task__label">New task</label>
    <div className="new-task__input-wrapper">
      <input className="new-task__input" placeholder="insert task title..." />
      <button className="new-task__button">Add</button>
      <div className="toggle--desktop">
        <PriorityToggle />
      </div>
    </div>
  </div>
);

export default NewTaskDesktop;
