import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Dashboard } from "./Layout/Dashboard/Dashboard.page";
import { DefaultLayout } from "./Layout/DefaultLayout.js";
import { Entry } from "./page/entry/Entry.page.js";
import { AddTicket } from "./page/new-ticket/AddTicket.page";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        <Dashboard />
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
