import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Routes from "./Routes/route";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Routes} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
