import { sidebarItems } from "components/ToolbarMobile";
import { useState } from "react";

type Props = {
  toDoListLength: number;
  toDoListCompletedLength: number;
};

const Sidebar: React.FC<Props> = ({
  toDoListLength,
  toDoListCompletedLength,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <aside className="sidebar">
      <div className="header">
        <h1>MyTrack</h1>
      </div>

      {sidebarItems.map((item, index) => {
        return (
          <>
            <button
              className={`sidebar__item ${
                selectedIndex === index ? "sidebar__item--selected" : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              <div className="flex flex-align-center">
                {item.icon}
                <p>{item.label}</p>
              </div>
              {index === 0 && (
                <div className="dashboard-counter">{`${toDoListCompletedLength}/${toDoListLength}`}</div>
              )}
            </button>
          </>
        );
      })}
    </aside>
  );
};
export default Sidebar;
