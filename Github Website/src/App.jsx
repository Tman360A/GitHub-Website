import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import AdminPage from "./Pages/AdminPage";
import ErrorPage from "./Pages/ErrorPage";
import Sidebar from "./Components/Sidebar";
import SignUpPage from "./Pages/SignUpPage";

function App() {
  return(
    <div className="Website">
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/sign-up" Component={SignUpPage} />
          <Route path="/admin" Component={AdminPage} />
          <Route path="*" Component={ErrorPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App