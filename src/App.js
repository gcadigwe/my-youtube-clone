import "./App.css";
import Header from "./components/Header/Header";
import Recommended from "./components/Recommended/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Switch } from "react-router-dom";
import SearchPage from "./components/SearchPage/Searchpage";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/search/:search">
          <div className="app__page">
            <Sidebar />
            <SearchPage />
          </div>
        </Route>
        <Route exact path="/">
          <div className="app__page">
            <Sidebar />
            <Recommended />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
