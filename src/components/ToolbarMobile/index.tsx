import Calendar from "components/Icon/Calendar";
import Charts from "components/Icon/Charts";
import Dashboard from "components/Icon/Dashboard";
import Settings from "components/Icon/Settings";
import Teams from "components/Icon/Teams";

const ToolbarMobile = () => (
  <footer className="toolbar">
    <div className="toolbar__item">
      <Dashboard />
      <p>Dashboard</p>
    </div>
    <div className="toolbar__item">
      <Calendar />
      <p>Calendar</p>
    </div>
    <div className="toolbar__item">
      <Teams />
      <p>Teams</p>
    </div>
    <div className="toolbar__item">
      <Charts />
      <p>Charts</p>
    </div>
    <div className="toolbar__item">
      <Settings />
      <p>Settings</p>
    </div>
  </footer>
);

export default ToolbarMobile;
