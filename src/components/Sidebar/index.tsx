import Calendar from "components/Icon/Calendar";
import Charts from "components/Icon/Charts";
import Dashboard from "components/Icon/Dashboard";
import Settings from "components/Icon/Settings";
import Teams from "components/Icon/Teams";

type Props = {
  toDoListLength: number;
  toDoListCompletedLength: number;
};

const Sidebar: React.FC<Props> = ({
  toDoListLength,
  toDoListCompletedLength,
}) => (
  <aside className="sidebar">
    <div className="header">
      <h1>MyTrack</h1>
    </div>

    <div className="sidebar__item  sidebar__item--dashboard sidebar__item--selected">
      <div className="flex flex-align-center">
        <Dashboard />
        <p>Dashboard</p>
      </div>
      <div className="dashboard-counter">{`${toDoListCompletedLength}/${toDoListLength}`}</div>
    </div>
    <div className="sidebar__item">
      <Calendar />
      <p>Calendar</p>
    </div>
    <div className="sidebar__item">
      <Teams />
      <p>Teams</p>
    </div>
    <div className="sidebar__item">
      <Charts />
      <p>Charts</p>
    </div>
    <div className="sidebar__item sidebar__item--last">
      <Settings />
      <p>Settings</p>
    </div>
  </aside>
);

export default Sidebar;
