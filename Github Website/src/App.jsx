import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import InfoPage from "./Pages/InfoPage";
import Sidebar from "./Components/Sidebar";

function App() {
  return(
    <div className="Website">
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/Info" Component={InfoPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App