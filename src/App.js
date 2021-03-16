import "./App.css";
import Header from "./components/Header/Header";
import Recommended from "./components/Recommended/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar />
        <Recommended />
      </div>
    </div>
  );
}

export default App;
