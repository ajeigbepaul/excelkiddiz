import "./App.css";
import School from "./School";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Forgotpassword from "./Forgotpassword";
import Admin from "./Admin";
import Studentmgt from "./Studentmgt";

function App() {
  return (
    <div className="app">
      {/* admin */}
      <Router>
        <Routes>
          <Route path="/studentmgt" element={<Studentmgt />} />
        </Routes>
        <Routes>
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Routes>
          <Route path="/passwordrecovery" element={<Forgotpassword />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/" element={<School />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
