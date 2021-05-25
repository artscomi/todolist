import Calendar from "components/Icon/Calendar";
import Charts from "components/Icon/Charts";
import Dashboard from "components/Icon/Dashboard";
import Settings from "components/Icon/Settings";
import Teams from "components/Icon/Teams";

const Sidebar = () => (
  <aside className="sidebar">
    <div className="header">
      <h1>MyTrack</h1>
    </div>

    <div className="sidebar__item sidebar__item--selected">
      <Dashboard />
      <p>Dashboard</p>
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
