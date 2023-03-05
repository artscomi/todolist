import { useState } from "react";
import Calendar from "components/Icon/Calendar";
import Charts from "components/Icon/Charts";
import Dashboard from "components/Icon/Dashboard";
import Settings from "components/Icon/Settings";
import Teams from "components/Icon/Teams";

export const sidebarItems = [
  { icon: <Dashboard />, label: "Dashboard", id: 1 },
  { icon: <Calendar />, label: "Calendar", id: 2 },
  { icon: <Teams />, label: "Teams", id: 3 },
  { icon: <Charts />, label: "Charts", id: 4 },
  { icon: <Settings />, label: "Settings", id: 5 },
];

const ToolbarMobile = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <footer className="toolbar">
      {sidebarItems.map((item, index) => (
        <button
          aria-label={item.label}
          key={item.id}
          className={`toolbar__item ${
            index === selectedIndex ? "toolbar__item--selected" : ""
          }`}
          onClick={() => handleItemClick(index)}
        >
          {item.icon}
          <p>{item.label}</p>
        </button>
      ))}
    </footer>
  );
};

export default ToolbarMobile;
