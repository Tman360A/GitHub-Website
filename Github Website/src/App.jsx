import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";
import AccountPage from "./Pages/AccountPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import AdminPage from "./Pages/AdminPage";
import ErrorPage from "./Pages/ErrorPage";
import APIPage from "./Pages/APIPage";

function App() {
  return(
    <div className="Website">
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/account/:userName" Component={AccountPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/sign-up" Component={SignUpPage} />
          <Route path="/admin" Component={AdminPage} />
          <Route path="/API" Component={APIPage} />
          <Route path="*" Component={ErrorPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App