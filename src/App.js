import "./App.scss";
import Plus from "./components/Icon/Plus";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>MyTrack</h1>
        </header>
        <main>
          <div className="list-item list-item--add">
            <span className="u-margin-right-small">New task</span>
            <Plus />
          </div>

          <div>
            <p className="list-title">
              <span className="u-margin-right-small">In progress</span>
              <span className="counter-circle">5</span>
            </p>

            <ul>
              <li class="list-item list-item--list">
                <span>New design system: brainstorming</span>
                <i class="far fa-trash-alt delete"></i>
              </li>
              <li class="list-item list-item--list">
                <span>New design system: brainstorming</span>
                <i class="far fa-trash-alt delete"></i>
              </li>
              <li class="list-item list-item--list">
                <span>New design system: brainstorming</span>
                <i class="far fa-trash-alt delete"></i>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
