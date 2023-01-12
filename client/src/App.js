import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, ScrollToTop } from "./components";
import { Home, Login, Signup, Profile } from "./screens";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
